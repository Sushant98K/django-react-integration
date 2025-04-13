create react project

    npm create vite@latest frontend

create env and django backend project and activate env

    python -m venv env

    env/script/activate

    django-admin startproject backend

install dependency

    pip install django djangorestframework django-cors-headers

then add it to your installed apps

    INSTALLED_APPS = [
    ...,

    'rest_framework',
    'corsheaders',

    ...,
    ]

You will also need to add a middleware class to listen in on responses

    MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
    ]


add cors_allowed_origins

    CORS_ALLOWED_ORIGINS = [
        'http://localhost:5173'
    ]

for adding data install axios for api handeling

    npm i axios