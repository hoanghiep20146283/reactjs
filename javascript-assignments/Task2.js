// Create custom method for String

// Extend String prototype with custom method
Object.assign(String.prototype, {
    myCustomContat(stringBeAdded) {
        return `${this} my ${stringBeAdded}`;
    }
});
const result = 'hello'.myCustomContat('world')
console.log(result) // hello my world

const result2 = 'I lost'.myCustomContat('phone')
console.log(result2) // I lost my phone