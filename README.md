# JobBoard

A modern job marketplace built with Next.js, React, and Tailwind CSS.

## Run Locally

**Prerequisite:** Node.js 20.9 or later

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open [http://localhost:3000](http://localhost:3000).

Create a production build with `npm run build` and serve it with `npm start`.

## Deploy to Netlify

This is a Next.js app. The included `netlify.toml` sets the production build
command, publish directory, and Node.js version. Netlify detects Next.js and
configures its Next.js runtime automatically.

1. Push this repository to GitHub. Keep real environment files such as
   `.env.local` out of Git; `.env.example` is only a placeholder template.
2. In Netlify, choose **Add new site → Import an existing project**, connect
   GitHub, and select this repository and the branch to deploy.
3. Confirm the build command is `npm run build` and the publish directory is
   `.next` (both are already set by `netlify.toml`), then deploy the site.
4. Netlify builds and publishes the site. Future pushes to the selected branch
   trigger new deployments automatically.

This project currently does not read application environment variables. If
you add server-side secrets later, set them in **Site configuration → Environment
variables** in Netlify and redeploy; do not commit them or expose them with a
`NEXT_PUBLIC_` variable.
