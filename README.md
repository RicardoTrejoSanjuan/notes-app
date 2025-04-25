# NotesApp

NotesApp is a simple application built with Angular and TypeScript that allows users to manage their notes. The app is designed with a responsive UI using Angular Material and ensures type safety with TypeScript.

## Problem Statement

**Task 2: Angular (with TypeScript)**  
**Task:** Build a simple Notes App

### Requirements:

- Users should be able to **create**, **update**, and **delete** notes.
- Use **TypeScript** for state management.
- Implement a **responsive UI** using **Angular Material**.
- Ensure **TypeScript type safety**.

### Bonus Points:

- Implement **search functionality** for notes.
- Add a **character count indicator** for each note.

## Features

- Create, edit, and delete notes.
- Search notes by title or content.
- Display a character count for each note.
- Responsive design for mobile and desktop devices.

## Project Structure

```plaintext
src/
├── app/
│   ├── core/          # Core components like header and layout
│   ├── pages/         # Pages like dashboard and task
│   ├── shared/        # Shared models and services
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── index.html
├── main.ts
├── styles.scss
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Angular CLI](https://angular.dev/cli) (v19.2.9)

### Installation

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   cd notes-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/`. The app will reload automatically when you make changes to the source files.

### Building the Project

To build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

### Running End-to-End Tests

For end-to-end testing:

```bash
ng e2e
```

Note: Angular CLI does not include an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on Angular CLI, visit the [Angular CLI Documentation](https://angular.dev/tools/cli).

## License

This project is licensed under the MIT License.
