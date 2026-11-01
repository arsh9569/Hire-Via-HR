# Hire Via HR website starter

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Copy `.env.example` to `.env` and set `EMAIL_USER`, `EMAIL_PASS`, and `CLIENT_EMAIL`.
   For Gmail, `EMAIL_PASS` must be a Google App Password.
5. In one terminal, run `npm run server`.
6. In another terminal, run `npm run dev` and open the local URL printed by Vite.

Keep `npm run server` running locally; it handles email and listens on port 5000.
Vite proxies local `/api` requests to it. Production uses
`https://hire-via-hr-backend.onrender.com` by default; set `VITE_API_URL` in Vercel
to override it if the backend URL changes. Set `FRONTEND_URL` on the backend to the
website's origin. Never commit `.env` or publish email credentials.

## Routes
- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/contact` — Contact Us

The navbar's **Find a Job** button intentionally routes to `/contact`, as requested.

## Contact form
- The contact form sends submissions to `POST /api/contact` and emails them using the backend's Gmail transporter.
- Configure `EMAIL_USER`, `EMAIL_PASS`, and `CLIENT_EMAIL` before running the backend.

## Before production
- Replace the text-based logo with the client's approved logo.
- Replace image placeholders with approved assets from the client.
- Verify all company claims, statistics, testimonials and legal-policy copy.
- Confirm official social-media profile URLs.
- Add real page metadata and a production privacy/terms/refund policy.
