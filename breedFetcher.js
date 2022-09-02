const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      callback('Error on HTTP GET Request...', error);
      return;
    }

    if (response && response.statusCode !== 200) {
      callback(`Status code: ${response.statusCode}`);
      return;
    }

    const data = JSON.parse(body);
    if (data.length >= 1) {
      callback(null, data[0].description);
      return;
    } else {
      callback(`${breed} does not exist in server.`, null);
      return;
    }

  });
};

module.exports = { fetchBreedDescription };