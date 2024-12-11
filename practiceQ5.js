let prices = [250,645,300,900,50];

let discountAmount;

for(i = 0; i < prices.length; i++){
  console.log(`Original price: ${prices[i]}`);
  discountAmount = 0.1 * prices[i];
  console.log(`After 10% discount: ${discountAmount}`);

  prices[i] -= discountAmount;
  console.log(`Final price: ${prices[i]}`);
}

console.log(prices);