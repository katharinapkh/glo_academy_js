let money = +prompt('Ваш месячный доход?'),
    income = 'иллюстрации',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 20000,
    period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log(`Период ${period} месяц(ев). Цель заработать ${mission} долларов.`);
console.log(addExpenses.toLowerCase().split(', '));
//
let budgetDay = money / 30;
// console.log(budgetDay);
// console.log(money % 30);

let necessaryExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    costs = +prompt('Во сколько это обойдется?'),
    necessaryExpensesTwo = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    costsTwo = +prompt('Во сколько это обойдется?');
let budgetMonth = money - (costs + costsTwo);
console.log(budgetMonth);

if (budgetDay > 0 && budgetDay < 300) {
    console.log('Низкий уровень дохода');
} else if (budgetDay > 300 && budgetDay < 800) {
    console.log('Средний уровень дохода');
} else if (budgetDay > 800) {
    console.log('Высокий уровень дохода');
} else {
    console.log('Что то пошло не так');
}
