// const message = 'Welcome';
// const isOpen = true;
// const shouldConfirm = false;
// const shouldRenew = confirm('Паша лох?');
// console.log(shouldRenew);
// const pashaLox = confirm('Шо ну прям лошара?');
// console.log(pashaLox);
// let quantity = prompt('Наскільки Паша лох по десятибальній?');
// quantity = Number(quantity);
// console.log(quantity);


// let elementHeight = '60px';
// elementHeight = Number.parseInt(elementHeight);
// console.log('elementHeight:', elementHeight);


// let salary = 1255.12341249124;
// console.log(Number(salary.toFixed(2)));

// let base = prompt("Давай число");
// base = Number(base);

// console.log(base);



// let power = prompt('Давай степінь');
// power = Number(power);
// console.log(power);

// const result = base ** power;

// console.log(result);

// const max = 35;
// const min = 33;


// let brand = prompt("Давай бренд");
// brand = brand.toLowerCase();
// console.log(brand);

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// const balance = -100;
// let message;

// if (balance >=0) {
//   message = 'Ваш баланс позитивний =';
// } else {
//   message = 'Ваш баланс негативний =';
// }
// console.log(message , balance);
 

// const balance = 1500;

// const message = balance >= 0 ? "Баланс позитивний" : "Негативний баланс"
// console.log(message)

  
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;


// for (let i = 1; i <= employees; i+=1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//   console.log(`ЗП робітника ${i} = ${salary}`);
//   totalSalary += salary;
// }

// console.log(totalSalary);




// const min = 0;
// const max = 1000000;
// let total = 0;

// for (let i = min; i <= max; i += 1) {

//   if (i % 2 === 0) {
//     console.log('парне: ' , i);
    
//     total += i;
//   }
  
// }

// console.log('total:', total);
  

// let balance = 1000;
// const payment = 2000;


// console.log(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо число доступних кредитів на вашому балансі.`,);

// if (payment <= balance) {
//   balance -= payment

//   console.log('Все гаразд, знімаємо гроші з вашого рахунку... Дякуємо за покупку!');
//   console.log(`На рахунку залишилось ${balance} кредитів.`);
// } else {
//   console.log('На вашому рахунку недостатньо коштів для операції!');
//   console.log(`Операція не була завершена. Поповніть баланс на ${payment - balance }, щоб завершити покупку `);
// }


// const totalSpent = 2001;
// const balance = 980;
// let payment = 1000;
// let discount = 0;
// let priceWithDiscount = 0;


// if (totalSpent < 100 && balance >= payment) {
//   console.log('У вас ще немає партнерської знижки.');

//   console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%.`);
  

// } else if (totalSpent < 100 && balance < payment) {
//   console.log('У вас ще немає партнерської знижки.');

//   console.log(`Неможливо здійснити операцію, на вашому балансі недостатньо коштів.`);


// } else if (totalSpent >= 2000 && totalSpent < 5000 && balance >= payment - (payment * 0.02)) {
//   console.log('Бронзовий партнер, ваша знижка 2%.');

//   discount = 0.02;

//   console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%.`);

//   let priceWithDiscount = (payment - (payment * 0.02));

//   console.log(`Загальна вартість замовлення становитиме ${priceWithDiscount}.`);

//   console.log(`На вашому балансі залишилось ${balance - (payment - (payment * 0.02))} кредитів.`);
  

// } else if (totalSpent >= 2000 && totalSpent < 5000 && balance < payment - (payment * 0.02)) {
//   console.log('Бронзовий партнер, ваша знижка 2%.');

//   discount = 0.02;

//   console.log(`Неможливо здійснити операцію, на вашому балансі недостатньо коштів.`);
 

// } else if (totalSpent >= 5000 && totalSpent < 10000 && balance >= payment - (payment * 0.05)) {
//   console.log('Срібний партнер, ваша знижка 5%.');
  
//   discount = 0.05;

//   console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%.`);
   
//   let priceWithDiscount = (payment - (payment * 0.05));

//   console.log(`Загальна вартість замовлення становитиме ${priceWithDiscount}.`);

//   console.log(`На вашому балансі залишилось ${balance - (payment - (payment * 0.05)) } кредитів.`);


// } else if (totalSpent >= 5000 && totalSpent < 10000 && balance < payment - (payment * 0.05)) {
//   console.log('Срібний партнер, ваша знижка 5%.');

//   discount = 0.05;

//   console.log(`Неможливо здійснити операцію, на вашому балансі недостатньо коштів.`);
  

// }else if (totalSpent >= 10000 && balance >= payment - (payment * 0.1)) {
//   console.log('Золотий партнер, ваша знижка 10%.');

//   discount = 0.1;

//   let priceWithDiscount = (payment - (payment * 0.1));
  
//   console.log(`Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%.`);

//   console.log(`Загальна вартість замовлення становитиме ${priceWithDiscount}.`);

//   console.log(`На вашому балансі залишилось ${balance - (payment - (payment * 0.1)) } кредитів.`);


// } else if (totalSpent >= 10000 && balance < payment - (payment * 0.1)) {
//   console.log('Золотий партнер, ваша знижка 10%.');

//   discount = 0.1;

//   console.log(`Неможливо здійснити операцію, на вашому балансі недостатньо коштів.`);
   

// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


//


// const numbers = [1, 5, 10, 23, 24, 39, 56, 20, 2, 4, 12, 13];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//   const number = numbers[i];
//   console.log(number);

//   if (numbers[i] % 2 === 0) {
//     console.log('Парне');
    
//     total += number;
    
//   }
  
// }

// console.log('Total: ' , total);


// const friends = ['Artur' , 'Sasha' , 'Bogdan' , 'Yarko' , 'Maks'];

// const string = friends.join (', ')

// console.log(string);



// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);

//   return a + b + c;

// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  

  

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   if (password !== ADMIN_PASSWORD) {
//     return "Access denied, wrong password!";
    
//   }

  
// }
// checkPassword("mangohackzor")
// checkPassword("polyhax")
// checkPassword("jqueryismyjam")



// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls =fruits.slice(1,4) ;
// const lastThreeEls = fruits.slice(3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);



// const username = 'Artur';
// const email = 'artursmut2006@gmail.com';


// const signUpData = {
//   username,
//   email,
// };

// console.log(signUpData);

// const inputName = 'Car' ;
// const inputValue = 'BMW';


// const carPickerData = {
//   [inputName]: inputValue,
// };

// console.log(carPickerData);

// const friends = [
//   { name: 'Bogdan', online: false },
//   { name: 'Artur', online: true },
//   { name: 'Danylo', online: false },
//   { name: 'Myrko', online: true },
// ];
  
// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
       
//     if (friend.name === friendName) {
//       // return 'Знайшли';
//     }
//   }
//   // return "Не знайшли :(";
// };
  
  
  
  
//   // console.log(findFriendByName(friends, 'Vlad'));
//   // console.log(findFriendByName(friends, 'Artur'));
  
// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//   console.log(friend.name);
    
//   names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));


// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     console.log(friend.online);


//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));



// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     console.log(friend.online);
    
//     if (!friend.online) {
//       offlineFriends.push(friend)
//     }

//   }
//   return offlineFriends;
// }



// console.log(getOfflineFriends(friends));


// const temperatures = [1,3,76,54,83,13,15]

// console.log(Math.max(...temperatures));
  
// const playlist = {
//   name: 'Мій плейлист',
//   tracks: ['runnin', 'a lot', 'without me' , 'highway love'],
//   trackcount:4,
//   rating:10,

// };

// const { rating, tracks, name, trackcount } = playlist;

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackcount);




// const profile = {
//   instaName: 'artursmut',
//   instaTag: 'arsm',
//   instaNick: 'noone',
//   stats: {
//     instaFollowers: 84,
//     instaPhotos: 0,
//     instaFollowing: 269,
//     instaStatus: 'online',
    
//   }
// }




// const {
//   instaName,
//   instaTag,
//   instaNick,
//   stats: { instaFollowers, instaPhotos, instaFollowing, instaStatus },
// } = profile;


// console.log(
//   instaName,
//   instaTag,
//   instaNick,
//   instaFollowers,
//   instaStatus,
//   instaFollowing,
//   instaPhotos,
// );










// const friends = ["Artur","Bogdan", "Danylo", "Maks"]


// const [friend1,friend2,friend3,friend4] = friends

// console.log(friend1,friend2,friend3,friend4);






// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];


// const titles = [];
// const authors = [];
// const ratings = [];

// let book = 0;

// for (book of books) {

//   titles.push(book.title)
//   authors.push(book.author)
//   ratings.push(book.rating)
// };



// console.log(titles);
// console.log(authors);
// console.log(ratings);







// const films = [
//   {
//     name: 'Inception',
//     director: 'Christopher Nolan',
//     mainHeroCast: 'Leonardo Di Caprio',
//     ratingIMDB: 8.8,
//   },
//   {
//    name: 'Inglourious Basterds',
//    director: 'Quentin Tarantino',
//    mainHeroCast: 'Brad Pitt',
//    ratingIMDB: 8.3,
//   },
//   {
//     name: 'The Truman Show',
//     director: 'Peter Weir',
//     mainHeroCast:'Jim Carrey',
//     ratingIMDB: 8.2,
//   },
//   {
//    name: 'American psycho',
//    director: 'Mary Harron',
//    mainHeroCast: 'Christian Bale',
//    ratingIMDB: 7.6,
//  }

// ];


// const names = [];
// const directors = [];
// const mainHeroCasts = [];
// const ratings = [];

// let film = 0;

// for (const film of films) {
//   names.push(film.name);
//   directors.push(film.director);
//   mainHeroCasts.push(film.mainHeroCast);
//   ratings.push(film.ratingIMDB)

// };

// console.log(names);
// console.log(directors);
// console.log(mainHeroCasts);
// console.log(ratings);




// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


// const profile = {
//   name: 'Artur Smut',
//   tag: 'archit3ct0r',
//   location: 'Lviv, Ukraine',
//   stats: {
//     followers: 3453,
//     followedUsers: 282,
//     likes: 6544,
//   }


// }


// const { name, tag, location, ...restProps} = profile;
// console.log(name,tag,location);
// console.log(restProps);





// const authors = {
//   Artur: 4,
//   Bogdan: 6,
//   Ostap: 7,
//   Vlad: 3,
// };


// const entries = Object.entries(authors)


// const showProfileInfo = function ( userProfile ) {
//  console.log(userProfile);
// };

// const profile = {
//   name: "Artur Smut",
//   tag: "artursmut",
//   location: "Lviv, Ukraine",
//   stats: {
//     followers: 92,
//     followed: 247,
//     posts: 0,
//     likes: 0,
//   },
// };

// showProfileInfo(profile);

// const bookShelf = {
//
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }
//
// };

// console.log(bookShelf.addBook("Стара книга"));
// console.log(bookShelf.getBooks());
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;

//     },
//     add(product) {
        

//      for (const item of this.items) {
//          if (item.name === product.name) {
//             item.quantity += 1;
//             return;
//         }
//      }



//         const newProduct = {
//         ...product,
//         quantity: 1,
//         };

//         this.items.push(newProduct)
//     },
//     remove(productName) {
//         const { items } = this;
//         for (let i = 0; i < items.length; i += 1){
//             const { name } = items[i];

//             if (productName === name) {
//                 console.log('найшли такий продукт', productName);
//                 console.log(i);
//                 items.splice(i,1)
//             }
//         }
//      },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const {items} = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
            
//         }
//         return total;
//      },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
    
// };




// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 70 });
// cart.add({ name: "cherry", price: 40 });
// cart.add({ name: "strawberry", price: 90 });


// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());


// cart.remove("apple");

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());





// function proccesCall(recipient) {
//     const isRecipientAvailable = Math.random() > 0.5;


//     if (!isRecipientAvailable) {
//         console.log(`Абонент ${recipient} наразі не доступний, передзвоніть пізніше.`);

//     } else {
//         console.log(`З'єднуємо з ${recipient}, зачекайте хвильку.`);
//     }
// }


// proccesCall("Богдан")
// proccesCall("Павло")
// proccesCall("Саша")





// function proccesCall(recipient, onAvailable, onNotAvailable) {
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//         onNotAvailable(recipient);
//         return;
//     }
//     onAvailable(recipient);
// }

// function takeCall(name) {
//     console.log(`З'єднуємо з ${name}, очікуйте.`);

// }

// function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} наразі недоступний, залиште повідомлення після сигналу.`);
// }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} наразі недоступний, хочете залишити повідомлення голограмою?`);
// }

// proccesCall("Богдан",takeCall,leaveHoloMessage)
// proccesCall("Саша",takeCall,activateAnsweringMachine)


// function repeatLog(n) {
//     for (let i = 0; i < n; i += 1){
//         console.log(i);
//     }

// }

// repeatLog(5)

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }


// repeat(3, printValue);



// repeat(3, prettyPrint);




// const numbers = [5, 10, 15, 20, 25, 30];


// // for (let i = 0; i < numbers.length; i+=1){
// //     console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }


// numbers.forEach(function (number, index) {
//     console.log(`Індекс ${index}, значення ${number}`);
// });



// const arrowAdd = (a, b, c) => {
//     console.log(a,b,c);
//     return a + b + c;
// };

// arrowAdd(5,20,6)





// const add = (...args) => {
    
//     console.log(args);
// }

// add(1, 2, 3, 3, 32, 312, 3, 123, 12, 31, 5, 34, 5, 346, 123, 12, 3);



// const numbers = [5, 10, 20, 50, 30];

// numbers.forEach((number, index) => {
//    console.log(`Індекс ${index}, значення ${number}.`);
// });

// const logMessage = (number, index) => {
//     console.log(`Індекс ${index}, значення ${number}.`);
// };

// numbers.forEach(logMessage);




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter(value => value > 6)
// console.log(filteredNumbers);




// function doMath(a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// }

// function add(x,y) {
//     return x + y;
    
// }

// doMath(2, 3, add);



// function sum(a, b) {
//    return a + b;
// };

// function sub(a, b) {
//     return a - b;
// };

// function multiply(a, b) {
//     return a * b;
// };

// function divide(a, b) {
//     return a / b;
// };



// function calculate(a, b, callback) {
//     return callback(a,b);
// }


// console.log(calculate(1231231235,108796786786780,multiply));

















// console.log('First');
// console.log("Second");
// console.log("Third");

// setInterval(function () {
//     console.log("Пройшло 2 секунди");
// }, 2000)


// setTimeout(function () {
//     alert("Купіть..........")
// },10000)





















// function calcFunction(n) {
//     return function () {
//         console.log(10 * n);
//     };
// }
// const calc = calcFunction(5)
// calc();







// function deliverPizza(pizzaName) {
//   console.log(`Доставляємо піцу ${pizzaName}, ще трішки...`);
//   return
// }

// function makePizza(pizzaName) {
//     console.log(`Піца ${pizzaName} готується, очікуйте...`);
//     return
// }


// function makeMessage(pizzaName,callback) {
//   return callback(pizzaName);
  
// }



// makeMessage("Салямі",deliverPizza)
// makeMessage("Цезаре",makePizza)







// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (element, index) {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     console.log(commonElements);
// };




// getCommonElements([1, 2, 3, 5, 7,9, 8], [2, 3, 6, 7, 9, 10]);






// function incrementor(n) {
//     return function (i) {
//         return function(k){
//             return function (q) {
//                 return n + i + k + q;
//             }
//         }
//     };
    
// };

// // // let addToOne = incrementor(1);
// // // console.log(addToOne(5));
// // // console.log(addToOne(29));

// console.log(incrementor(20)(10)(5)(400));
// console.log(incrementor(9)(2));



// function generatorURI(domain) {
//     return function (url) {
//         return`https://www.${url}.${domain}`
//     }
// }

// const facebook = generatorURI('com')("facebook")
// const google = generatorURI("com")("google")
// const unian = generatorURI("net")("unian")
// console.log(unian);
// console.log(facebook);
// console.log(google);
















(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });
})();
