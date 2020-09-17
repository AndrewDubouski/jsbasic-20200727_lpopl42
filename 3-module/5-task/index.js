/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr2 = [];
  let arr = str.split(' ');
  arr = arr.join();
  arr = arr.split(',');

  for (let i = 0; i < arr.length; i++){
    arr[i] = parseFloat (arr[i])
  }

  for (let i = 0; i < arr.length; i++){
    if (isNaN(arr[i]) !== true){
      arr2.push (arr[i]);
    }
  }
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  arr2.sort(compareNumeric)
  let result = {}
  result.min = arr2[0]
  result.max = arr2[arr2.length-1]
  return result;
}
