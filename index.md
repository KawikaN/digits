# Digits

## Overview

Digits is a contact management application that allows users to:
- Create and manage contacts with detailed information
- Add notes to contacts
- View a list of all contacts
- Administrators can manage all contacts in the system

## Installation

1. Install Node.js and npm
2. Clone the repository
3. Install dependencies with `npm install`
4. Create a `.env` file with your database configuration:
   ```
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/digits"
   ```
5. Initialize the database:
   ```
   npx prisma migrate dev
   npx prisma db seed
   ```
6. Start the development server:
   ```
   npm run dev
   ```

## Application Walkthrough

### Landing Page
![Landing Page](public/untitled folder/Screenshot 2025-04-07 at 9.19.57 PM.png)

The landing page provides an overview of the application and its features.

### Sign In Page
![Sign In Page](public/untitled folder/Screenshot 2025-04-07 at 9.20.15 PM.png)

Users can sign in with their email and password.

### List Contacts Page
![List Contacts Page](public/untitled folder/Screenshot 2025-04-07 at 9.20.56 PM.png)

Shows all contacts associated with the current user. Each contact card displays:
- Contact's name
- Address
- Description
- Profile image
- Notes associated with the contact

### Add Contact Page
![Add Contact Page](public/untitled folder/Screenshot 2025-04-07 at 9.21.18 PM.png)

Allows users to add new contacts with the following information:
- First Name
- Last Name
- Address
- Description
- Profile Image URL

### Admin Page
![Admin Page](public/untitled folder/Screenshot 2025-04-07 at 9.54.36 PM.png)

Administrators can view and manage all contacts in the system, regardless of owner.
