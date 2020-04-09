// regex patterns
const patterns = {
        telephone: /^\d{11}$/
};
let num = '12345678912';
let index = num.search(patterns.telephone);
console.log(index);