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
  default:
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
