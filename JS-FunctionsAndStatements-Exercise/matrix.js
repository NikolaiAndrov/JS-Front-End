function printMatrix(n) {

    let result = "";

    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n; j++) {
           result += n + " "; 
        }
        
        console.log(result.trimEnd());
        result = "";
    }
}

printMatrix(3);