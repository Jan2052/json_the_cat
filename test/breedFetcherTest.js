const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('1 returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('2 returns an error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Fox', (err, desc) => {
      
      // we expect an error for this scenario
      const expectedDesc = "Fox does not exist in server."
      assert.equal(err, expectedDesc);

      // compare returned description
      assert.equal(null, desc);

      done();
    });
  });






});