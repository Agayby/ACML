# ACML
To run the app:
A config.json file must be provided in the form :
    {
      "PORT": 3437,
      "MONGODB_URI": "mongodb://localhost:27017/BMI-calculator",
      "JWT_SECRET": "",
    }
The JWT_SECRET should be injected with the correct secret

**How to run in docker:
The the MONGODB_URI should be mongodb://mongo:27017/BMI-calculator (changing localhost to mongo which is the container name)

use: sudo docker-compose up and use flag: --build to build 

Important notice:
The dependecies are all declared in package.json file which is the Manifest file

The goal of our app is to offer an easy method to track your bmi records throughout the time.
The app is easy to use as follows:
You can either log in (or sign-up of course if you don't have an existing account),
or use the app as a visitor with the downside of not being able to save your bmi record for future use.

To sign up you should fill in:
1.First name
2.Last name
3.E-mail
4.Password (not less than 8-characters)

to log in you should fill in:
1.E-mail
2.Password

TO use the BMI calculator click on calculator tab in the left of the screen
1. Fill in your gender,age, weight, height.
2. Wait for a few seconds for the BMI to be calculated

To view your records history click on the history tab in the left of the screen
then scroll down through the records

