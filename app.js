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
function getMiddleElements(arr) {
    let middleIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return [arr[middleIndex - 1], arr[middleIndex]];
    } else {
      return [arr[middleIndex]];
    }
  }
  
  let arr1 = [1, 2, 3, 4, 5];
  console.log(getMiddleElements(arr1)); // [3]
  let arr2 = [1, 2, 3, 4];
  console.log(getMiddleElements(arr2)); // [2, 3]
  
// 3. Massiv qiymatlarini guruhlash:
// • Berilgan massiv [1, 2, 3, 4, 5], birinchi ikkita elementni va qolgan elementlarni destrukturizatsiya yordamida alohida massivlarga guruhlang.
// 4. O‘rnatilgan obyekt ma’lumotlari:
// • { person: { name: 'John', age: 30}} kabi ichki oʻrnatilgan obyekt berilgan boʻlsa, destrukturizatsiya yordamida ism va yosh xususiyatlarini ajratib oling.
// 5. Yo'qolgan xususiyatlar uchun standart qiymatlar:
// • Ixtiyoriy xususiyatlarga ega ob'ektni hisobga olgan holda, agar ushbu xususiyatlar etishmayotgan bo'lsa, standart qiymatlarni taqdim etish uchun destruksiyadan foydalaning.
// 6. Massiv va obyektni destrukturasini birlashtirish:
// • Ob'ektlar massivini hisobga olgan holda, massiv va ob'ektni tuzilmasini buzish yordamida har bir ob'ektdan yangi massivga o'ziga xos xususiyatlarni ajratib oling.
// 7. Destrukturizatsiya bilan funksiya argumentlari:
// // • X va y xossalariga ega bo'lgan ob'ektni qabul qiladigan va bu xususiyatlardan argument sifatida foydalanib, ikkala funktsiya chaqiruvi uchun tuzilmani buzishdan foydalangan holda boshqa funktsiyani chaqiradigan funktsiyani yozing.
