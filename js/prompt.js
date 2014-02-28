// Get the user's name.
var userName = prompt('Hello, what\'s your name?');

if (!userName) {
  prompt('You didn\'t enter a name. Really, what\'s your name?');
}

// Get the user's phone number.
var phoneNumber = prompt('Hello ' + userName +', what\'s your phone number?');
// Create the phone number pattern.
var phoneNumberPattern = /(?:1-)?\(?(\d{3})[\-\)]\d{3}-\d{4}/;
// Get matches from phoneNumber
var phoneMatches = phoneNumberPattern.exec(phoneNumber);
// Create a variable to store the output.
var output = '<h1>Hello, ' + userName + '!</h1>';
// Create other variables to be used later
var areaCode, locationName;

// Is the phone number valid?
if (phoneMatches) {

  // Yes, the phone number is valid!
  // Get area code
  areaCode = phoneMatches[1];
  // Get location
  locationName = pbValues.areaCodes[areaCode];
  if (locationName) {
    output += '<h2>How is ' + locationName +
              ' this time of year?</h2>';
  }
  output = output + '<p>' + pbValues.projectName + ' ' +
           pbValues.versionNumber +' viewed on: ' + pbValues.currentTime + '</p>';

} else {

  // No, the phone number is not valid. Tell the user about the problem.
  output = output + '<h2>That phone number is invalid: ' + phoneNumber;
}

// Insert the output into the web page.
document.body.innerHTML = output;
