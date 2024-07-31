# Welcome to the Heyrise Frontend Assessment

This Frontend Assessment is based on Remix. Understanding of React Development and Fullstack Frameworks (like Remix, Next.js or similiar) is required.

This technical assessment is designed to evaluate your proficiency in HTML, JavaScript (Typescript) CSS and Frontend Development in general. The challenge will simulate a real-world project that encompasses various aspects of frontend development, including responsive design, state management, and API interaction. You will have 8 hours to complete this task.

## Pre Requisits

- IDE (recommended VSCode <https://code.visualstudio.com/>)
- Node Version manager: nvm (<https://github.com/nvm-sh/nvm> or <https://github.com/coreybutler/nvm-windows>)
  - Installed Node v20.15.0 via nvm
- Java JDK (For the OpenAPI Generator CLI <https://www.npmjs.com/package/@openapitools/openapi-generator-cli>): You must have the java binary executable available on your PATH for this to work.

## Overview of tools and useful links

The Project is based on following technologies:

- 📖 [Remix](https://remix.run/docs) Fullstack Application Framework
- 💨 [Tailwind](https://tailwindcss.com/) To apply styling
- 📃 [Typescript](https://www.typescriptlang.org/docs/) For type safe development
- 🧑‍💻 [Shadcn UI](https://ui.shadcn.com/docs) For UI primitives
- 🤓 [Openapi Generator](https://openapi-generator.tech/docs/generators/typescript-fetch/) To align Frontend with Backend Specs

## Development

### Install dependencies and generate API

Before being able to run the project dependencies needs be installed:

1. Run `npm install` to install node dependencies
2. Run `npm run generate:api` to generate API client

### Run Servers

To run the project you need to spin up the API mock server (which is based on the Openapi Specification), and the Remix DEV Server in parallel. (Use two seperate terminals):

1. Run `npm run mock` to Start the API mock server
2. Run `npm run dev` to start the development server

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience.
You can adapt the tailwind config and global tailwind.css file to your needs.

## Base components

For base components [Shadcn/ui](https://ui.shadcn.com/docs) can be used, where it makes sense. It depends on your decision, when to use it and how to integrate it, or when to implement a custom component for the given use case.
