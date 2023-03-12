// ! TANPA Spread Operator

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
console.log(favorites);
 
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

// ! Menggunakan Spread Operator
console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

const allFavorites = [favorites, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],

  */
  const allFavorites2 = [...favorites, ...others];

  console.log(allFavorites2);
  
  /* output
  [ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
  */

//   ! dengan menggunakan spread operator nilai dua array tersebut berhasil tergabung