import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
	try {
		// Parse form data
		const formData = await request.formData();
		const email = formData.get('email')?.toString();
		const interestsRaw = formData.get('interests')?.toString();

		// Validate email
		if (!email) {
			return new Response(
				JSON.stringify({ error: 'Email is required' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } }
			);
		}

		// Get environment variables
		const resendApiKey = locals.runtime?.env?.RESEND_API_KEY;
		const audienceId = locals.runtime?.env?.RESEND_AUDIENCE_ID;

		if (!resendApiKey) {
			console.error('RESEND_API_KEY not found in environment');
			return new Response(
				JSON.stringify({ error: 'Email service not configured' }),
				{ status: 500, headers: { 'Content-Type': 'application/json' } }
			);
		}

		if (!audienceId) {
			console.error('RESEND_AUDIENCE_ID not found in environment');
			return new Response(
				JSON.stringify({ error: 'Audience ID not configured' }),
				{ status: 500, headers: { 'Content-Type': 'application/json' } }
			);
		}

		// Initialize Resend
		const resend = new Resend(resendApiKey);

		// Parse interests
		const interests = interestsRaw ? JSON.parse(interestsRaw) : [];

		// Create contact
		const { data, error } = await resend.contacts.create({
			email: email,
			unsubscribed: false,
			audienceId: audienceId,
		});

		if (error) {
			console.error('Resend error:', error);

			// Handle duplicate contact error gracefully
			if (error.message?.includes('already exists') || error.message?.includes('duplicate')) {
				return new Response(
					JSON.stringify({ success: true, message: 'You are already subscribed!' }),
					{ status: 200, headers: { 'Content-Type': 'application/json' } }
				);
			}

			return new Response(
				JSON.stringify({ error: 'Failed to subscribe. Please try again.' }),
				{ status: 500, headers: { 'Content-Type': 'application/json' } }
			);
		}

		// Optionally send a notification email about the new subscriber with their interests
		if (interests.length > 0) {
			await resend.emails.send({
				from: 'BuildAtScale <onboarding@resend.dev>',
				to: 'accounts@buildatscale.tv',
				subject: 'New Newsletter Subscriber',
				html: `
					<h2>New Newsletter Subscription</h2>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Interests:</strong> ${interests.join(', ')}</p>
				`,
			});
		}

		return new Response(
			JSON.stringify({ success: true, data }),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }
		);
	} catch (error) {
		console.error('Server error:', error);
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
};
