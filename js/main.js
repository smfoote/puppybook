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
