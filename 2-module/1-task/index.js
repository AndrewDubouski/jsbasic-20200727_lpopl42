/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {

}



let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}
function sumSalary(x){
  let sum = 0;

  for (let key in x){
    if (typeof x[key] == 'number') {
      sum =sum + x[key]}

  }return (sum)

}
