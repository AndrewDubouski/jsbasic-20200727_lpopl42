/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {

  let arr = str.split('-');

  function t (testStr){
    return testStr[0].toUpperCase() + testStr.slice(1);
  }

  let abc = [];
  abc[0] = arr[0]

  for (let i = 1; i < arr.length; i++){
    abc[i] = t(arr[i])
  }

  str = abc.join('');
return str;
}
