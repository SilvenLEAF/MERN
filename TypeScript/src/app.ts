

/* ------------------------------------
.       practicing export/import
------------------------------------ */
import { greeting } from "./variables.js";











/* ------------------------------------
.     practicing DOM manipulaiton
------------------------------------ */
const myH1 = document.querySelector('h1')!;
const myImage = document.querySelector('.myImage') as HTMLImageElement;


const src = myImage.src
myH1.textContent = src;




const myForm = document.querySelector('.myForm') as HTMLFormElement;













/* ------------------------------------
.         practicing tuples
------------------------------------ */
let ninja : [string, number, boolean] = ['gj', 34, true];
 ninja.pop()
console.log(ninja)












/* ------------------------------------
.         practicing enums
------------------------------------ */
enum NinjaTypes { a, b=5, c, d, e, f, g, h, i, j }

console.log(NinjaTypes)








/* ------------------------------------
.       practicing generics
------------------------------------ */
interface Ninja <T> {
  name: string,
  age: number,
  data: T
}

const myNinja: Ninja <string> = {
  name: `ryu`,
  age: 27,
  data: `afeard`
}