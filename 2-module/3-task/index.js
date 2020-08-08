let calculator = { };
calculator.read = function(x,y){
  return this.a=x,this.b=y;
}
calculator.sum = function(){
  return this.a+this.b;
}
calculator.mul = function(){
  return this.a*this.b;
}
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
