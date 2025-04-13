function countFrequency(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}
let str = "bharat ruidas";
console.log(countFrequency(str));