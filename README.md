## Instructions for Running Locally

- Install dependencies: pnpm install

## Run the Application

- Start the development server: pnpm run dev
- Open your web browser and visit http://localhost:3000

### Vercel

- Deployed the application to Vercel: https://brighthr-documents.vercel.app/

### Styling

- Styles are managed using Tailwind

### Architecture

- The application is built using the Next.js framework with React and TypeScript. The components are organized within the src/components directory, following a component-based architecture pattern. This structure promotes maintainability and scalability as the project grows.

### Testing

- Vitest is used in combination with React Testing Library for unit testing.
- The tests are placed in the **tests** folder.
- To test the components: pnpm run test

## Improvements / Added Notes

- Considered using queryParams to show the modal on the server side
- Document animations breaking modal: I would change how the modal is working. Commented out the animation code for now.
- Add an overlay on the modals
