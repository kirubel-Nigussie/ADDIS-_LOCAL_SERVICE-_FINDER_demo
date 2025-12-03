# Admin Web Portal - Addis Local Service Finder

The Admin Web Portal is the backbone and control center of the Addis Local Service Finder system. It is a secure, non-public web interface used by system administrators to enforce trust and manage data integrity.

## Key Functions
- **Enforce Trust**: Manage the verification process for service providers.
- **CRUD Operations**: Create, Read, Update, and Delete provider data and user accounts.
- **Oversight**: Monitor key metrics like total users and pending verifications.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules (Vanilla CSS)
- **Icons**: Lucide React

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18.17.0 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd admin_frontend
   ```

3. Install dependencies:
   > **Note**: This will automatically install all required packages, including **`lucide-react`** (for icons) and **`clsx`** (for class utilities), which were added to the project.
   ```bash
   npm install
   ```

## Running the Project

### Development Mode
To run the application in development mode with hot-reloading:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To build and start the application for production:
```bash
npm run build
npm run start
```

## Project Structure
- `src/app`: Contains the page routes (Dashboard, Categories, Providers, Users).
- `src/components`: Reusable UI components (Cards, Tables, Badges) and Layouts (Sidebar).
- `src/app/globals.css`: Global styles and CSS variables.
