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

let budgetDay = money / 30;
console.log(budgetDay);
console.log(money % 30);