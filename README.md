# EduHub: A Comprehensive Learning Management System (LMS)

EduHub is a comprehensive Learning Management System (LMS) built to enhance online learning by providing an intuitive platform for both students and teachers. Designed using cutting-edge technologies like Next.js, React, and Prisma, EduHub offers a rich feature set that makes it easy to create, manage, and access educational content. This platform includes course browsing, video processing, and secure payment options, making it ideal for institutions and independent educators looking to provide high-quality, engaging learning experiences.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Prisma, MySQL (Aiven)
- **Media Management**: Mux for video processing and streaming
- **Payments**: Stripe for secure payments
- **Authentication**: Clerk for user management
- **File Uploads**: UploadThing for file and video uploads


Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database using Aiven

### Prerequisites

**Node version 20.x.x**

### Cloning the repository

```shell
git clone https://github.com/barasa001/EduHub.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma

Add MySQL Database (Aiven)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```
