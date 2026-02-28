# QuickHire — Simple Job Board Application

A full-stack job board application built with **Next.js** (frontend) and **Node.js/Express** (backend), using **MongoDB** for data persistence. Users can browse job listings, search and filter jobs, view job details, and submit applications. An admin panel allows posting and managing job listings.

---

## Tech Stack

| Layer    | Technology                            |
| -------- | ------------------------------------- |
| Frontend | Next.js 16, React 19, Tailwind CSS v4 |
| Backend  | Node.js, Express 5, express-validator |
| Database | MongoDB via Mongoose                  |
| HTTP     | Axios                                 |

---

## Features

### User-Facing

- **Job Listings Page** — Browse all jobs with live search (by title/company) and filters (category, location)
- **Job Detail Page** — Full job description with company info, location, job type, and category
- **Apply Now Form** — Name, email, resume URL, and cover note fields with client and server-side validation
- **Responsive UI** — Fully responsive layout built with Tailwind CSS

### Admin Panel (`/admin`)

- Post new job listings (title, company, location, category, description, type)
- Delete existing job listings

---

## Project Structure

```
quickhire/
├── backend/
│   ├── config/         # MongoDB connection
│   ├── controllers/    # Route handlers (jobs, applications)
│   ├── middleware/     # Error handler, 404, validation
│   ├── models/         # Mongoose models (Job, Application)
│   ├── routes/         # Express routers
│   ├── utils/          # asyncHandler, apiResponse helpers
│   └── server.js       # Express app entry point
│
└── frontend/
    ├── app/            # Next.js App Router pages
    │   ├── page.tsx            # Homepage
    │   ├── jobs/page.tsx       # Job listings
    │   ├── jobs/[id]/page.tsx  # Job detail + apply form
    │   └── admin/page.tsx      # Admin panel
    ├── components/
    │   ├── forms/      # AdminJobForm, ApplyForm, NewsletterForm
    │   ├── jobs/       # JobCard, JobDetailView, SearchBar
    │   ├── layout/     # Navbar, Footer
    │   ├── sections/   # Homepage sections (Hero, FeaturedJobs, etc.)
    │   └── ui/         # Button, Badge, Input, Spinner, EmptyState
    ├── hooks/          # useJobs custom hook
    └── lib/            # API client, constants, utilities
```

---

## API Endpoints

### Jobs

| Method | Endpoint        | Description                                                  |
| ------ | --------------- | ------------------------------------------------------------ |
| GET    | `/api/jobs`     | List all jobs (supports `?search`, `?category`, `?location`) |
| GET    | `/api/jobs/:id` | Get a single job by ID                                       |
| POST   | `/api/jobs`     | Create a new job (Admin)                                     |
| DELETE | `/api/jobs/:id` | Delete a job (Admin)                                         |

### Applications

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | `/api/applications` | Submit a job application |

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or [MongoDB Atlas](https://cloud.mongodb.com))

---

### 1. Clone the repository

```bash
git clone https://github.com/himelpaul/quickhire.git
cd quickhire
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/quickhire
FRONTEND_URL=http://localhost:3000
```

Start the backend server:

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The API will be available at `http://localhost:5000`.

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.local` file inside `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the frontend dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable       | Description                     | Default                               |
| -------------- | ------------------------------- | ------------------------------------- |
| `PORT`         | Port the Express server runs on | `5000`                                |
| `MONGO_URI`    | MongoDB connection string       | `mongodb://localhost:27017/quickhire` |
| `FRONTEND_URL` | Allowed CORS origin             | `*`                                   |

### Frontend (`frontend/.env.local`)

| Variable              | Description          | Default                 |
| --------------------- | -------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000` |

---

## Data Models

### Job

```js
{
  title: String; // required
  company: String; // required
  location: String; // required
  category: String; // required
  description: String; // required
  type: String; // "Full Time" | "Part Time" | "Remote" | "Internship" | "Contract"
  createdAt: Date;
  updatedAt: Date;
}
```

### Application

```js
{
  jobId: ObjectId; // ref: Job, required
  name: String; // required
  email: String; // required, valid email
  resumeLink: String; // required, valid URL
  coverNote: String; // optional
  createdAt: Date;
}
```

---

## Validation

All API endpoints perform server-side validation:

- All required fields must be present
- `email` must be a valid email format
- `resumeLink` must be a valid URL
- Attempting to apply to a non-existent job returns a `404` error

---
