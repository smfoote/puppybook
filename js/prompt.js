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
  return /(?:1-)?\(?(\d{3})(?:-|\) ?)\d{3}-\d{4}/.test(phoneNumber);
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
