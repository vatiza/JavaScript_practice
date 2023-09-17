const names = ['nahian', 'babul', 'cabul', 'mohib', 'eyamin', 'raihan', 'raihan', 'nahian', 'mohib', 'rakib', 'sumu', 'sumu', 'rakib'];
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        // console.log(i,name);
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqnames = removeDuplicate(names)
console.log(uniqnames)
