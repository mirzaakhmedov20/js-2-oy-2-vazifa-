// // const getLargestElement = (array) => {
// //   let largest = array[0];
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] > largest) {
// //       largest = array[i];
// //     }
// //   }
// //   return largest;
// // }

// // const heading1 = document.getElementById('sarlavha');
// // console.log(heading1);
// // heading1.remove();
// // const inputEls = document.getElementsByName("username");
// // const inputEl = inputEls[0];
// // console.log(inputEl);
// // inputEl.remove();

//
//
//
//

//      Masalalar

// 1. Massiv qiymatlarini almashtirish:
// Berilgan [a, b] massivda a va b qiymatlarini destrukturadan foydalanib almashtiring.
// let a, b, rest;
// [a, b] = [15, 25];
// console.log(a);
// console.log(b);
// [a, b, c, ...rest] = [12, 17, 20, 30, 40, 55, 44, 88];
// console.log(rest);

// 2. O'rta elementlarni ajratib olish:
// • Istalgan uzunlikdagi massiv berilgan bo‘lsa, o‘rta element(lar)ni tuzilmalarni buzish, juft va toq uzunliklarni ishlatib chiqarib oling.
// function getMiddleElements(arr) {
//   let orta = Math.floor(arr.length / 2);
//   if (arr.length % 2 === 0) {
//     return [arr[orta - 1], arr[orta]];
//   } else {
//     return [arr[orta]];
//   }
// }

// let arr1 = [2, 5, 15, 20, 44, 55];
// console.log(getMiddleElements(arr1));
// let arr2 = [3, 4, 6, 8];
// console.log(getMiddleElements(arr2));

// 3. Massiv qiymatlarini guruhlash:
// • Berilgan massiv [1, 2, 3, 4, 5], birinchi ikkita elementni va qolgan elementlarni destrukturizatsiya yordamida alohida massivlarga guruhlang.
// let arr = [15, 22, 43, 14, 65];
// let [first, second, ...rest] = arr;
// console.log(first);
// console.log(second);
// console.log(rest);

// 4. O‘rnatilgan obyekt ma’lumotlari:
// • { person: { name: 'John', age: 30}} kabi ichki oʻrnatilgan obyekt berilgan boʻlsa, destrukturizatsiya yordamida ism va yosh xususiyatlarini ajratib oling.
// let object = { person: { name: "Shukurullo", age: 20 } };
// let {
//   person: { name, age },
// } = object;
// console.log(name);
// console.log(age);

// 5. Yo'qolgan xususiyatlar uchun standart qiymatlar:
// • Ixtiyoriy xususiyatlarga ega ob'ektni hisobga olgan holda, agar ushbu xususiyatlar etishmayotgan bo'lsa, standart qiymatlarni taqdim etish uchun destruksiyadan foydalaning.
// 6. Massiv va obyektni destrukturasini birlashtirish:
// • Ob'ektlar massivini hisobga olgan holda, massiv va ob'ektni tuzilmasini buzish yordamida har bir ob'ektdan yangi massivga o'ziga xos xususiyatlarni ajratib oling.

let arr = [
  { name: "Diyor", age: 19, color: "toq sariq" },
  { name: "Javlon", age: 22, height: "1,65" },
];
let newArr = arr.map(({ name, color, height }) => ({ name, height }));
console.log(newArr);
// 7. Destrukturizatsiya bilan funksiya argumentlari:
// // • X va y xossalariga ega bo'lgan ob'ektni qabul qiladigan va bu xususiyatlardan argument sifatida foydalanib, ikkala funktsiya chaqiruvi uchun tuzilmani buzishdan foydalangan holda boshqa funktsiyani chaqiradigan funktsiyani yozing.
