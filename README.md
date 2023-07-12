# Helix.com Front End
[Next.js](https://nextjs.org/docs) code for corporate website, including [Storybook](https://storybook.js.org/docs/react/get-started/install/) for documenting styles and components.

## Getting Started

1. After cloning this repository, if you use `nvm` run `nvm install` to use and, if needed, install the version of node specified in `.nvmrc`. Or otherwise use the specified node version.

2. Run `yarn` to install dependencies.

3. Run `yarn dev` to run the development server and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployments

The app deploys to Vercel.

Pushes to the `staging` branch auto-deploy to [https://helix-dot-com-next-staging.vercel.app/](https://helix-dot-com-next-staging.vercel.app/).

Pushes to the `main` branch auto-deploy to [https://helix-dot-com-next.vercel.app/](https://helix-dot-com-next.vercel.app/).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Storybook

You can run Storybook locally alongside the studio with `yarn storybook`. Changes to storybook will automatically deploy to Vercel:
- Storybook on the `main` (production) environment is at [https://helix-dot-com-storybook.vercel.app/](https://helix-dot-com-storybook.vercel.app/)
- Storybook on `staging` is at [https://helix-dot-com-storybook-git-staging-helix.vercel.app/](https://helix-dot-com-storybook-git-staging-helix.vercel.app/)
