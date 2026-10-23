# Movie-Review-and-Recommender-website
This project is a movie review and recommender system using python and django as the web framework

## Setup

1. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Create your local environment file:
   ```bash
   cp .env.example .env
   ```
   Set a long random value for `DJANGO_SECRET_KEY` in `.env`. Email credentials
   are optional for local development; by default email is printed to the console.
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```
6. Open http://127.0.0.1:8000/.

Never commit `.env`, `db.sqlite3`, or uploaded profile images. They are ignored
by Git because they can contain credentials and personal data.
