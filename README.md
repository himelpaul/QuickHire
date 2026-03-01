# QuickHire

> A simple, full-stack job board

**Live Demo → [https://quickhire-jobs.vercel.app](https://quickhire-jobs.vercel.app/)**

Users can browse job listings, search & filter by keyword / category / location, view full job details, and submit applications. A basic admin panel lets you post and delete job listings.

---

## Features

| Area              | What's included                                                              |
| ----------------- | ---------------------------------------------------------------------------- |
| **Job Listings**  | List all jobs · live search by title/company · filter by category & location |
| **Job Detail**    | Full description · company · location · job type · category                  |
| **Apply**         | Name · email · resume link (URL) · cover note — fully validated              |
| **Admin Panel**   | `/admin` — post new jobs · delete existing jobs                              |
| **Responsive UI** | Mobile-first layout with Tailwind CSS                                        |
| **Validation**    | Server-side validation on all endpoints (express-validator)                  |

---

## Tech Stack

| Layer    | Technology                            |
| -------- | ------------------------------------- |
| Frontend | Next.js 16, React 19, Tailwind CSS v4 |
| Backend  | Node.js, Express 5, express-validator |
| Database | MongoDB (Mongoose)                    |

---

## Project Structure

```
quickhire/
├── backend/
│   ├── config/            # MongoDB connection
│   ├── controllers/       # Business logic (jobs, applications)
│   ├── middleware/        # Error handler · 404 · validation chains
│   ├── models/            # Mongoose models (Job, Application)
│   ├── routes/            # Express routers
│   ├── utils/             # asyncHandler, apiResponse helpers
│   └── server.js          # Entry point
│
└── frontend/
    ├── app/
    │   ├── page.tsx               # Homepage
    │   ├── jobs/page.tsx          # Job listings (search + filter)
    │   ├── jobs/[id]/page.tsx     # Job detail + Apply form
    │   └── admin/page.tsx         # Admin panel
    ├── components/
    │   ├── forms/                 # AdminJobForm · ApplyForm · NewsletterForm
    │   ├── jobs/                  # JobCard · JobDetailView · SearchBar
    │   ├── layout/                # Navbar · Footer
    │   ├── sections/              # Hero · FeaturedJobs · Category · CTA …
    │   └── ui/                    # Button · Badge · Input · Spinner · EmptyState
    ├── hooks/                     # useJobs
    └── lib/                       # api.ts · constants.ts · utils.ts
```

---

## API Endpoints

### Jobs

| Method   | Endpoint        | Description                                                   |
| -------- | --------------- | ------------------------------------------------------------- |
| `GET`    | `/api/jobs`     | List all jobs — supports `?search=` `?category=` `?location=` |
| `GET`    | `/api/jobs/:id` | Get single job                                                |
| `POST`   | `/api/jobs`     | Create a job _(admin)_                                        |
| `DELETE` | `/api/jobs/:id` | Delete a job _(admin)_                                        |

### Applications

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| `POST` | `/api/applications` | Submit application for a job |

---

## Data Models

### Job

```js
{
  title:       String,   // required
  company:     String,   // required
  location:    String,   // required
  category:    String,   // required
  description: String,   // required
  type:        String,   // "Full Time" | "Part Time" | "Remote" | "Internship" | "Contract"
  createdAt:   Date,
  updatedAt:   Date,
}
```

### Application

```js
{
  jobId:      ObjectId,  // ref -> Job (required)
  name:       String,    // required
  email:      String,    // required · must be valid email
  resumeLink: String,    // required · must be valid URL
  coverNote:  String,    // optional
  createdAt:  Date,
}
```

---

## Running Locally

### Prerequisites

- Node.js v18+
- MongoDB — local instance **or** free [MongoDB Atlas](https://cloud.mongodb.com) cluster

---

### 1. Clone

```bash
git clone https://github.com/himelpaul/quickhire.git
cd quickhire
```

---

### 2. Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/quickhire
FRONTEND_URL=http://localhost:3000
```

```bash
npm run dev     # hot-reload with nodemon
# or
npm start       # production
```

API runs at `http://localhost:5000`

---

### 3. Frontend

```bash
cd frontend
npm install
```

Create `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

```bash
npm run dev
```

App runs at `http://localhost:3000`

---

## Environment Variables

### `backend/.env`

| Variable       | Description               | Example                               |
| -------------- | ------------------------- | ------------------------------------- |
| `PORT`         | Express server port       | `5000`                                |
| `MONGO_URI`    | MongoDB connection string | `mongodb://localhost:27017/quickhire` |
| `FRONTEND_URL` | Allowed CORS origin       | `http://localhost:3000`               |

### `frontend/.env.local`

| Variable              | Description          | Example                 |
| --------------------- | -------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:5000` |


## Validation Rules

- All required fields must be present
- `email` must be a valid email address
- `resumeLink` must be a valid URL (http / https)
- Applying to a non-existent job returns `404`