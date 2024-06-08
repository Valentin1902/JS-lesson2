/*
 * Цикл for
 */
// const number = 10;
// const number = 10;

// for(let i = 0; i < number; i += 1  ){
//     const q = 12;
//     const result = q * i;
//     console.log(result)
// }



















/*
 * Pre-increment та Post-increment
 */

// let a = 10;
// const b = --a;
// console.log(b);


    










/*
 * Напиши скрипт, як рахує загальну суму зарплат працівників.
 * К-ть працівників зберігається в змінній employees.
 * Зарплата кожного співробітника це випадкове число від 500 до 5000
 * Записати суму в зміну totalSalary та вивести в консоль
 */

// const employees = 200;
// const maxSalary = 5000;
// const minSalary = 500;
// let totalSalary = 0;


// for (let i = 0; i <= employees; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,
//     );
//     console.log(`Зарплата співробітника #${i} - ${salary}`)
//     totalSalary += salary;
// }
// console.log(totalSalary);





/*
 * Напиши скрипт, який рахує суму всіх парних чисел,
 * які входять в діапазон числ в змінних від min до max.
 * Наприклад, якщо min=0 та max=5, то діапазон 0-5, і в ньому два парних числа - 2 и 4, їх сума 6.
 */


// const min = 3;
// const max = 300;
// let total = 0;
// for(let i = min; i -= max; i += 1){
// if(i % 2 === 0){
//     console.log(`Парні, i `);
// }
// total += i;
// }