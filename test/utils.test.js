// IMPORT MODULES under test here:
// use require because backend
const { mungeLocation } = require('../utils.js');
const locationData = require('../data/geo.json');

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const expected = {
        'formatted_query': 'Portland, Multnomah County, Oregon, USA',
        'latitude': '45.5202471',
        'longitude': '-122.6741949'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = mungeLocation(locationData);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(expected, result);
});
