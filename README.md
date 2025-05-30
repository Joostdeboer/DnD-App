# README

A project using both sanity and nextjs.

Deploying with Github Actions and Github Pages.

Links:
- https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js
- https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-publish-GitHub-Actions-artifacts-example
- (Sanity documents) https://schema.club/ePGeH9xU

## TODOs:

- [x] Add sanity deploy/build/whatever to the github actions workflow.
- [x] Add more content to the sanity studio and see how this affects codegen (and what commands may need to be rerun).
- [x] Add some simple icons using e.g. https://mui.com/material-ui/material-icons/.
- [x] Add custom styles (colors + gradients) to tailwind using the "primary", "secondary", etc. styles from work.
- [ ] Use atomic design folder structure from other project when creating components https://bradfrost.com/blog/post/atomic-web-design/.
- [ ] Create Figma user flows, designs, etc. and implement them!
- [ ] Add automatic building of sanity to the pipeline to make changes to prod while changes are made to sanity

---

## Feature List:
- Header/Footer
  - [ ] Add a search bar (only on name/slug)
  - [ ] Add suggested items to the search bar (at most 5 show up as options to click)
  - [ ] Add a search results page
  - [ ] Add alternative search methods (can search for tags, alt title, other fields). Should also be able to select this on the search results page, so you can more accurately pinpoint what you wanted
  - [ ] Create a logo for the website and use that in the header and footer menus
- Any content Page
    - [ ] Integrate a basic listing page that can be re-used across different entries
    - [ ] Create a basic details page that can be re-used
    - [ ] Add the listing page for every possible (sub)page
    - [ ] Add the details page for every possible (sub)page
    - [ ] Scroll to Top button for long pages
    - [ ] Make clickable tag items that are displayed at the top of a content page
      - Clicking the tag makes it search for the tag
    - [ ] Add a 404 page
- Home Page
  - [ ] Integrate Sanity page with home page
  - [ ] "Fact of the Day" section with randomization
  - [ ] Recently Updated section on home page
  - [ ] Add content pages for each of the "Read More" sections (content pages, see [Gameplay] below)
- Artwork
  - [ ] Create a specific page for displaying artwork 
- Writing
  - [ ] Create a specific page for displaying writing as a content
- History
  - [ ] Add a timeline showing the events based on their era. You can select the era on top, and scroll down (or left-right) to go further forward/backward in time
  - [ ] Add links to the relevant details of the event
  - [ ] Add an integrated view with excerpts, images, hover states, possibility for continuous scrolling, etc.
- Gods
  - [ ] Add a special page to showcase the good vs evil gods
    - The page should include the icons of the gods and their names (+ title?) only, in a nice diagram
  - [ ] Add a section below for the various demigods
- Races
  - [ ] Add a special page for the races, where you have a 'character select'-like field of races (icon + name), on the side or above, and a section with an image of the race + descriptive text on the other side
  - [ ] Break up the above in better/clearer/more easy-to-implement sections
- Gameplay
  - [ ] Create a content page in Sanity for each `Gameplay` section
- Calendar
  - [ ] A basic calendar with the days of the week, month, and year
  - [ ] Integrate features such as quick mapping through the years
  - [ ] Add an algorithm for determining the days when the moon is full, recurring special dates, etc.
  - [ ] Add an option to change the display to "week"/"month"/"year"/"Lunar cycle(14 years)"
- Map
  - [ ] Make the individual maps for the world on paper
  - [ ] Draw out the maps in Wonderdraft
  - [ ] Create an interactive map, with zoom and panning
  - [ ] Add Markers to the interactive map to quickly go to an information point
  - [ ] Add a toggle for showing region borders
  - [ ] Add a toggle to show rough time zones

---

## How to use
- To check the website, run `npm run dev` from the `/frontend` folder.
- To check the sanity files, run `npm run dev` from the `/maroon-stingray` folder.
- To view changes of the website, go to http://localhost:3000/DnD-App. To view changes of Sanity, go to http://localhost:3333/desk.
- To see deployments, go to https://vercel.com/joostdeboers-projects/dnd-app
