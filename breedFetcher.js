const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, resp, body) => {
if(error) {
  callback(error, null);
} else {
  const data = JSON.parse(body)[0];
  
  if (!data) {
    callback(null, 'error cannot find it');
  } else {
    callback(null, data.description);
  }
}
})
}
module.exports = { fetchBreedDescription };