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

/**
 * Get the area codes defined in pbValues
 * @method
 * @return {object}
 */
function getAreaCodes() {
  return pbValues.areaCodes;
}

/**
 * Ask for the user's name, twice if necessary.
 * @method getUserName
 * @return {string} The user's name
 */
function getUserName() {
  var userName = prompt('Hello, what\'s your name?');

  if (!userName) {
    userName = prompt('You didn\'t enter a name. Really, what\'s your name?');
  }
  return userName;
}

/**
 * Check the validity of a phone number
 * @method
 * @param {string} phoneNumber The phone number to be validated
 * @return {boolean}
 */
function validatePhoneNumber(phoneNumber) {
  return (/(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/).test(phoneNumber);
}

/**
 * Ask the user for their phone number. Twice if necessary.
 * @method
 * @param {string} userName The user's name, so we can ask the user by name
 * @return {string}
 */
function getPhoneNumber(userName) {
  var phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');
  if (!validatePhoneNumber(phoneNumber)) {
    phoneNumber = prompt('Please enter a valid phone number.');
  }
  return phoneNumber;
}

/**
 * Return a geographic location (in the form of a string),
 * based on a phone number
 * @method
 * @param {string} phoneNumber The phone number to be used to get the location.
 * It is assumed that this phone number has already been validated.
 * @return {string} The geographic location of the phone number's area code
 */
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

/**
 * Get the images in the Facebook news feed
 * @method
 * @return {array} An array-like collection of HTML elements
 */
function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img');
  return images;
}

/**
 * Get the height of the given image
 * @method
 * @param {image} image An image, either a DOM reference to an <img> or `new Image`
 * @return {number}
 */
function getImageHeight(image) {
  return image.height;
}

/**
 * Get the width of the given image
 * @method
 * @param {image} image An image, either a DOM reference to an <img> or `new Image`
 * @return {number}
 */
function getImageWidth(image) {
  return image.width;
}

/**
 * Change the source of all of the given images. The new source depends on the
 * given location.
 * @method
 * @param {array} images An array of Images
 * @param {string} location A string that represents a location.
 */
function replaceImages(images, location) {
  var baseImageUrl, height, width, image;
  switch (location) {
  case 'Memphis':
    // Use puppies for Memphis
    baseImageUrl = 'http://placepuppy.it/';
    break;
  case 'Utah':
    // use kittens everywhere else
    baseImageUrl = 'http://placekitten.com/';
    break;
  }
  for (var i=0,len=images.length; i<len; i++) {
    image = images[i];
    height = getImageHeight(image);
    width = getImageWidth(image);
    image.src = baseImageUrl + width + '/' + height;
  }
}

/**
 * The main method is used to start the program
 * @method
 */
function main() {
  var userName = getUserName();
  var phoneNumber = getPhoneNumber(userName);
  var location = getLocation(phoneNumber);
  var images = getImages();
  replaceImages(images, location);
  setInterval(function() {
    images = getImages();
    replaceImages(images, location);
  }, 3000);
}

main();
