
# Implementing  a responsive web app with Reactjs

A brief description of how the code and the test can be run and how most popular articles can be generated

## System & Software Requirements

*Intel Core processor or higher 

*4GB RAM or Higher

*Visual Studio Code IDE 

*ReactJs

## Getting Started 

**Obtaining the API** 

To obtain the NY Times API for Most Popular Articles one has to follow this https://developer.nytimes.com/get-started link. If you do not have an account create it and if it already exists login and click the "create app" button and choose the API and enable it to get its Key and save the app. 

**Creating a React App**

In the Visual Studio IDE Terminal run the mkdir react-my-app command then change the directory to get into the app environment. 
An API call is made in our App.js file using React’s useEffect Hook. Firstly, we define our state variable pairs loading and articles using the useState Hook.In order to view our data object we can paste the get url combined with the API key on the browser.Here we will find an array of Articles objects together with their properties such as headlines,bylines,published_date etc.

**Generating Articles**

In order to generate Articles we render them dynamically where we map each item to an article component. We can also import Material-UI components here to help with styling.

**Testing & Running**

On our first run in the Terminal window we run the npm start command which will allocate us a port in the server to run the API. The console continues running until there are any chnages made in after saving the file it continues to run the console

## Console Output

Below is the output of my web App when running the NY Times API . Also Added some Styling for presentation purposes

![Screen Shot 2021-06-29 at 12 39 01 AM](https://user-images.githubusercontent.com/60769525/123712407-8d188d80-d872-11eb-903c-664c6b795561.png)

Upon Clicking the Read more link the user is redirected to the actual full Article as shown below

![Screen Shot 2021-06-29 at 12 41 46 AM](https://user-images.githubusercontent.com/60769525/123712615-fbf5e680-d872-11eb-9444-215d337f9940.png)

Author : Tsotlhe Aubrey Basimanebotlhe


