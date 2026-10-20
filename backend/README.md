# backend (Django REST Framework)

Admin panel + REST API that stores the "Book a Call" calendar bookings from the React portfolio.

## Run

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

## Admin panel

- URL: http://127.0.0.1:8000/admin/
- Username: `Admin`
- Password: `Admin@123`

Powered by **django-jazzmin** (modern AdminLTE look):

- Custom **Dashboard**: stat cards (total / pending / upcoming / completed), a monthly bookings bar chart (Chart.js), and an upcoming-calls table.
- Branded **sidebar** with icons; menu order: Bookings, then Authentication.
- **Bookings list**: status badges, inline status editing, filters (status/date/time), search, and bulk actions (`Mark selected as Confirmed / Completed / Cancelled`).
- Logo at `backend/static/admin_custom/logo.svg` — replace the file to change branding.
- Theme/colors configured in `JAZZMIN_UI_TWEAKS` in `settings.py`.

## REST API

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| GET    | `/api/bookings/`        | List bookings          |
| POST   | `/api/bookings/`        | Create a booking       |
| GET    | `/api/bookings/{id}/`   | Fetch one booking      |
| PATCH  | `/api/bookings/{id}/`   | Update a booking       |
| DELETE | `/api/bookings/{id}/`   | Delete a booking       |

Example payload:

```json
{
  "name": "Janani",
  "email": "janani@example.com",
  "date": "2026-08-10",
  "time": "10:00 AM"
}
```

CORS allows `http://localhost:5173` and `http://127.0.0.1:5173` (the Vite dev server).

## Default superuser (created via `createsuperuser`)

- Username: `Admin`
- Email: `admin@example.com`
- Password: `Admin@123`
