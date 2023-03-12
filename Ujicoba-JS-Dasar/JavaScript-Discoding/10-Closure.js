/* 
Fungsi init() memiliki variabel lokal name dan fungsi greet(). Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). 
*/

function init() {
    const name = 'Obi Wan';
  
    function greet() {
      console.log(`Halo, ${name}`);
    }
  
    return greet;
  }
  
  const myFunction = init();
  myFunction();
  
  /* output
  Halo, Obi Wan
   */