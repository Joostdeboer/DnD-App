# README

A project using both sanity and nextjs.

Deploying with Github Actions and Github Pages.

https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-publish-GitHub-Actions-artifacts-example

## TODOs:

- [x] Add sanity deploy/build/whatever to the github actions workflow.
- [ ] Add more content to the sanity studio and see how this affects codegen (and what commands may need to be rerun).
- [ ] Add some simple icons using e.g. https://mui.com/material-ui/material-icons/.
- [ ] Add custom styles (colors + gradients) to tailwind using the "primary", "secondary", etc. styles from work.
- [ ] Use atomic design folder structure from other project when creating components https://bradfrost.com/blog/post/atomic-web-design/.
- [ ] Create Figma user flows, designs, etc. and implement them!
- [ ] Add automatic building of sanity to the pipeline to make changes to prod while changes are made to sanity

## How to use
- To check the website, run `npm run dev` from the `/frontend` folder.
- To check the sanity files, run `npm run dev` from the `/maroon-stingray` folder.
- To view changes of the website, go to http://localhost:3000/DnD-App. To view changes of Sanity, go to http://localhost:3333/desk.
- To see deployments, go to https://vercel.com/joostdeboers-projects/dnd-app

https://schema.club/ePGeH9xU