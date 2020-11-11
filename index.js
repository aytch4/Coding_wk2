


var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = false;

var costOfMilk = 2.50;
var moneyInWallet = 4.50;
var thirstLevel = 4;

var shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
var willGoSwimming = isHotOutside && !isWeekday;
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
var willBuyMilk = isHotOutside && thirstLevel > 3 && moneyInWallet >= costOfMilk * 2;

console.log(shouldBuyIceCream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log (willBuyMilk);

