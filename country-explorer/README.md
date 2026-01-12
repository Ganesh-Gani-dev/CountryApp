# Country Explorer

A small learning project to search countries and view basic details with a map.

## Features

- Search countries by name (uses the REST Countries API)
- Displays flag, capital, population, languages and local times
- Shows location on an interactive map using Leaflet and OpenStreetMap tiles

## Tech stack

- Vanilla JavaScript (ES6+)
- Fetch API + async/await
- Leaflet for interactive maps
- Vite for development server and bundling

## What I learned

- How to call external REST APIs using `fetch` and handle `async/await`.
- Parsing and displaying JSON responses and using template literals for DOM updates.
- Basic DOM manipulation and event handling (`addEventListener`, updating `innerHTML`).
- Defensive programming: validating API responses and adding guards before destructuring values.
- Integrating Leaflet maps and adding tile layers, markers, and popups.
- Handling loading and error states in the UI.
- Project structure with Vite and simple development workflow.

## How to run

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the app in your browser at the URL shown by Vite.


