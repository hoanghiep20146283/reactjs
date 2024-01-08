// Create function add

const add = function pure(total) {
    let closure = param => {
        return new pure(total + param);
    };
    closure.toString = function() {
        return total;
    };
    return closure;
}

const result = add(1)(2)

console.log("" + result) // 3

const result2 = add(1)(2)(3)(4)

console.log("" + result2) // 10
