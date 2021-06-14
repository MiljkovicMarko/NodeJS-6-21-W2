const cmdArgs = process.argv;
function getOnlyNums (args) {
  return args.slice(2).map(el => Number(el));
}
function getSum (arr) {
  return Array.from(arr).reduce((acc, cur)=>
    acc + cur
  );
}
const sum = getSum(getOnlyNums(cmdArgs));
console.log(sum);