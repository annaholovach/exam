function square(x) {
    return x * x;
}

function sum(a, b) {
    return a + b;
}

function double(a) {
    return a * 2;
}

function compose(...fns) {
    return function (...args) {
        let result = args;
        fns.reverse().map(fn => {
            result = [fn.apply(this, result)]
        })
        return +result.join();
    };
}

const calculateSquareOfSum = compose(square, sum);

const calculateDoubleSquareOfSum = compose(double, square, sum);
const calculateSquareDoubleOfSum = compose(square, double, sum);

const result = calculateSquareOfSum(3, 4);
console.log("Result:", result); // 49

const result_double = calculateDoubleSquareOfSum(3, 4);
console.log("Result double:", result_double); // 98

const result_square = calculateSquareDoubleOfSum(2, 5)
console.log("Result square:", result_square) // 196