# Dsa-intern-project

## Setting Up the Environment

Install python and django first
**1. Clone the repository:**


    git clone https://github.com/bdllhdrss3/dsa-intern-project.git
    cd dsa-intern-project
**2. Create a virtual environment:**

## On macOS/Linux

    python3 -m venv env
    source env/bin/activate

## On Windows

    python -m venv env
    .\env\Scripts\activate
**3. Install dependencies:**


    pip install -r requirements.txt

Running the Project

1. Apply migrations:

  

       python manage.py migrate

2. Start the development server:

`python manage.py runserver`


Access the project in your browser at http://127.0.0.1:8000/.

Additional Notes
If you encounter any issues, please refer to the Django documentation.

