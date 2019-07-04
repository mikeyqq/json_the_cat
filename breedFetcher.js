const request = require('request');

const breedName = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=sib`;

//When we are requesting over here with the URL, its bring int a string.
request(url, (error, resp, body) => {
  //console.log(body);
  //console.log(typeof body);

if(error) {
  return console.log('Failed to request details', error);
}

//This will covert the body retrieved by request from the API url into objects.
  const data = JSON.parse(body);

const breed = data[0];
  if(breed) {
    console.log(breed.description) 
  } else {
    console.log('Failed to find breed ${Siberian}');
  }
});