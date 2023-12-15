/*
1.Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:

2.перший параметр users — масив обєктів користувачів
другий параметр friendName — імя друга для пошуку.

3.Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. 
Друзі кожного користувача зберігаються у властивості friends. 
Якщо користувачів, у яких є такий других немає, то функція має повернути порожній масив.

*/


const getUsersWithFriend = (users, friendName) => {
  const result = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

  return result.length > 0 ? result : [];
};


const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }