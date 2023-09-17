const country = 'Bangladesh';
const age = 22;
const inIndependent = true;
const student = { id: 121, clss: 11, name: 'Rakib' };
const friends = [12, 13, 14, 15, 32, 43, 23];
// ! Function
function add(num1, num2) {
    return num1 + num2;
}
console.log(typeof add)
console.log(typeof country);
console.log(typeof age);
console.log(typeof inIndependent);
//! chek arry using arry.isarry
console.log(typeof Array.isArray(age))
console.log(friends.includes(17))
if (friends.indexOf(19) != -1) {
  
}
// ! concat:
const newFriends = [12, 14, 43, 23];
const allFrineds = newFriends.concat(friends);
console.log(allFrineds)