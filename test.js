
var totalyDone = process.argv.slice(2).reduce(function(previousValue, currentValue, index, array) {
  return Number(previousValue) + Number(currentValue);
});
console.log(totalyDone);