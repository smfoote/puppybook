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
