/* 
1.Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

2.
- перший параметр users — масив обєктів користувачів,
- другий параметр gender — рядок, що зберігає стать.

3.Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), 
стать яких (властивість gender) збігається зі значенням параметра gender.

*/

const getTotalBalanceByGender = (users, gender) => {
  const totalBalance = users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);

  return totalBalance;
};






/*****************************   PROVERKA  ************************************** */

const allUserss = [
    {
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(allUserss, "male")); // 12053

console.log(getTotalBalanceByGender(allUserss, "female")); // 8863