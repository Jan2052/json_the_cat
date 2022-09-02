const request = require('request');

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log('Error on HTTP GET Request...', error);
    return;
  }

  if (response && response.statusCode !== 200) {
    console.log(`Status code: ${response.statusCode}`);
    return;
  }
  const data = JSON.parse(body);
  if (data.length >= 1) {
    const descript = data[0].description;
    console.log(descript);
    return;
  }
  else {
    console.log("Breed doesn't exist in server.");
    return;
  }
});