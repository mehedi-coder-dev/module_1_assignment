// 3) number question answer

function generateMultiplication(num) {
    for (let i = 1; i <= 10; i++) {
        const result = i * num;

        console.log(`${i} x ${num} = ${result}`);
    }
}

generateMultiplication(5);
