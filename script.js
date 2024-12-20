// JavaScript code for the NASA API logic
var date = document.querySelector(".date"); // select the date element
var image = document.querySelector(".image"); // select the image element
var explanation = document.querySelector(".explanation"); // select the explanation element
var link = document.querySelector(".link"); // select the link element
var apiKey = "O1MMHop1qC2OWW96D3ykzb2qVO0n1oRMYRdOjNhj"; // use the demo key for testing
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey; // construct the API url

// fetch the data from the API using the fetch method
fetch(url)
  .then(function(response) {
    return response.json(); // parse the response as JSON
  })
  .then(function(data) {
    // display the data in the HTML elements
    date.textContent = data.date; // display the date
    image.src = data.url; // display the image
    explanation.textContent = data.explanation; // display the explanation
    link.href = data.hdurl; // display the link to the high resolution image
    link.textContent = data.title; // display the title of the image
  })
  .catch(function(error) {
    // handle any errors
    console.log(error); // log the error to the console
  });
