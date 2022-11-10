# housing-app

We want to create an app that could help people find the most recent listings for people who are looking to buy or rent a home.

## Backend

For the backend we used Splinter and BeautifulSoup to scrape websites to get info about the most recent data on what is for sale or available for rent. We then used pandas to clean the data and transform it into our SQL database.

We then created our app through Heroku which uses a Python Flask API to take our data from a database and present it on our app.