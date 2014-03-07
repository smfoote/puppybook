/*
var greeting = document.getElementById('greeting');
greeting.addEventListener('click', function() {
  if (greeting.innerHTML.match(/World/)) {
    greeting.innerHTML = 'Ola, mundo!';
  } else {
    greeting.innerHTML = 'Hello, World!';
  }
});
*/
function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img');
  return images;
}

function replaceImages(images, location) {

}
function main() {
  var userName = getUserName();
  var phoneNumber = getPhoneNumber(userName);
  var location = getLocation(phoneNumber);
  var images = getImages();
  replaceImages(images, location);
}

main();
// Get the user's name.
function getUserName() {
  var userName = prompt('Hello, what\'s your name?');

  if (!userName) {
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
  }
  return userName;
}

// Get the user's phone number.
function getPhoneNumber(userName) {
  var phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');
  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('Please enter a valid phone number.');
  }
  return phoneNumber;
}

function getLocation(phoneNumber) {
  // Create the phone number pattern.
  var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
  // Get matches from phoneNumber
  var phoneMatches = phoneNumberPattern.exec(phoneNumber);
  var areaCodes, areaCode, locationName;
  if (phoneMatches) {
    areaCode = phoneMatches[1];
    areaCodes = getAreaCodes();
    locationName = areaCodes[areaCode];
  }
  return locationName ? locationName : 'somewhere';
}
var pbValues = {
  projectName: 'puppybook',
  versionNumber: '0.0.1',
  areaCodes: {
    '408': 'Silicon Valley',
    '702': 'Las Vegas',
    '801': 'Utah',
    '765': 'West Lafayette',
    '901': 'Memphis'
  }
};

function getAreaCodes() {
  return pbValues.areaCodes;
}

var currentDate = new Date();   // Create Date object. More about objects and
                                // Date objects in chapter 5. This object will
                                // be used to build our date.

    // currentTime will look like '2014-01-25 at 14:45:12'
var currentTime = currentDate.getFullYear() + '-' +  // Set year
                  currentDate.getMonth() + '-' +     // Set month
                  currentDate.getDate() + ' at ' +   // Set day of the month
                  currentDate.getHours() + ':' +     // Set hours (military time)
                  currentDate.getMinutes() + ':' +   // Set minutes
                  currentDate.getSeconds();          // Set seconds

// Add currentTime to the pbValues object
pbValues.currentTime = currentTime;