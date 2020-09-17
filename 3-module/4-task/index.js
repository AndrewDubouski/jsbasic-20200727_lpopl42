/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let findRes = [];
  let result = ''



  for (let find of users){
    let userFind = find.age;
    if (userFind > age) {
      findRes.push (find)
    }
  }

  for (let b = 0; b < findRes.length; b++){
    result = `${findRes[b].name}, ${findRes[b].balance} \n` + result
  }

  result = result.substr(0, result.length -1);
  return result;
}
