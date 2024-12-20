# Authentication App

Authentication App is a full-stack authentication service built with **NextAuth.js v5**. It provides essential features such as login/logout functionality, password reset, and two-factor authentication via email verification.

## Features

- User authentication with **NextAuth.js v5**
- Password reset functionality
- Two-factor authentication via email
- Built with:
  - **Next.js**
  - **TypeScript**
  - **Prisma**
  - **PostgreSQL**

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v16 or higher)
- PostgreSQL

## Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/DavideAvagnano/Next-auth.git
cd Next-auth
```

### 2. Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
DATABASE_URL="your_database_url"
AUTH_SECRET="your_auth_secret"
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
RESEND_API_KEY="your_resend_api_key"
```

Replace `your_database_url`, `your_auth_secret`, and other placeholders with your actual credentials.

### 4. Run Database Migrations

Apply the Prisma migrations to your database:

```bash
npx prisma migrate dev
```

### 5. Start the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Usage

### Logging In

Users can log in using either their email or social login (GitHub or Google).

### Password Reset

Users can reset their passwords by requesting an email with a reset link.

### Two-Factor Authentication

Upon logging in, users will receive a verification email to complete the authentication process.

## Deployment

This project has not been deployed due to build issues. However, it can be run locally as described above. Contributions to resolve build issues are welcome.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

If you have any questions or need assistance, please don't hesitate to reach out by creating an issue in the repository.
