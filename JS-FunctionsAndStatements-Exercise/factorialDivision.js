function factorialDivision(a, b) {

    let aFactorial = getFactorial(a);
    let bFactorial = getFactorial(b);

    let result = aFactorial / bFactorial;
    console.log(result.toFixed(2));

    function getFactorial(n) {

        let facttorial = 1;

        for (let i = 1; i <= n ; i++) {
            facttorial *= i;
        }

        return facttorial;
    }
}