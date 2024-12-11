/* create an array to store companies -> bloomberg, microsoft, uber, google, imb, netflix
   1. remove the first company from the array.
   2. remove uber & add ola in its place.
   3. add amazon at the end. */

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);

let removedList = companies.splice(0,1);
console.log(removedList);
console.log(companies);

removedList = companies.splice(2,1,"Ola");
console.log(companies);

removedList = companies.splice(6, 0, "Amazon");
console.log(companies);