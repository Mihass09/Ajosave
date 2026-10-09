# AjoSave

Next.js 14 + Tailwind + Supabase + Paystack + Stripe. With no env vars it runs on mock data and a demo checkout.

## Run
    npm install
    npm run dev

## Supabase
1. Run `supabase/schema.sql`, then `supabase/seed.sql` in the SQL editor (use `migration_payments.sql` instead of re-running the schema if you already created the tables).
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` locally in `.env.local` and in Vercel. The service key stays on the server; never prefix it with NEXT_PUBLIC.

## Payments
Set `PAYSTACK_SECRET_KEY` and/or `STRIPE_SECRET_KEY`. Flow: `/api/checkout` creates the session, the provider redirects to `/pay/complete`, which verifies the payment with the provider and records it in `payments`.
Stripe charges in NGN, which your Stripe account must support. Test with Paystack test keys first.

## Next steps
Add Supabase Auth (replace `getCurrentUser` in `lib/db.ts`), and add provider webhooks so payments are recorded even if someone closes the tab before redirecting back.
