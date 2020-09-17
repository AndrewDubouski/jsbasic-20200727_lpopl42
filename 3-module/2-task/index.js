/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let arrRes = [];
  for (let i = 0; i < arr.length; i++){
    if ((arr[i] >= a) && (arr[i] <= b)){
      arrRes.push (arr[i])
    }
  }
  return (arrRes)
}
