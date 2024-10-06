/**
 * Returns the first parameter if not undefined, otherwise the second parameter.
 * Useful for setting a default value for a parameter.
 * @namespace defaultValue
 * @global
 * @function
 * 
 * @param {*} a
 * @param {*} b
 * @returns {*} Returns the first parameter if not undefined, otherwise the second parameter.
 *
 * @example
 * param = Cesium.defaultValue(param, 'default');
 * 
 * @property {object} EMPTY_OBJECT - A frozen empty object that can be used as the default value 
 * for options passed as an object literal.
 */
function defaultValue(a, b) {
  if (a !== undefined && a !== null) {
    return a;
  }
  return b;
}

/**
 * @type {object}
 * @constant
 */
defaultValue.EMPTY_OBJECT = Object.freeze({});

export default defaultValue;
