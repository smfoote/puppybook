/**
 * Get the images in the Facebook news feed
 * @method
 * @return {array} An array-like collection of HTML elements
 */
function getImages() {
  var images = document.querySelectorAll('div.userContentWrapper img');
  return images;
}
