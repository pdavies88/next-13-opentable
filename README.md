## Getting Started

Install dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma

Set up Prisma:

- `npx prisma init`

Push DB Schema:

- `npx prisma db push`

(Optional) - Run Prisma Locally:

- `npx prisma studio`

## Postgres DB Hosted by Supabase

- [https://supabase.com/](https://supabase.com/)
- Set up a new project and table with Supabase that this project will connect to
- Get Connection String from Supabase under "Connection Pooling": (https://supabase.com/docs/guides/database/connecting-to-postgres)[https://supabase.com/docs/guides/database/connecting-to-postgres]
- Add DB Url to a .env file
- Look at sample.env for key name

## JWT

- Look at sample.env
- Set a random string to be the JWT Secret to be used for authorization in a .env file

## Seed DB

- Uncomment `/app/api/seed/route.ts`
- Start project `npm run dev`
- In browser go to `http://localhost:3000/api/seed`
- Success message will be shown as `DB Seeded`

## Seeded data can be viewed in Supabase

- After seeding access the project in Supabase
- Newly created Supabase table should be loaded with mock data
