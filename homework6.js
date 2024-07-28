

function checkProbabilityTheory(count) {
    if (count <= 0) {
        console.log("Кількість чисел повинна бути більше нуля.");
        return;
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let total = evenCount + oddCount;
    let evenPercentage = (evenCount / total) * 100;
    let oddPercentage = (oddCount / total) * 100;
  

    // Виводимо інформацію
    console.log(`Кількість згенерованих чисел: ${total}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenPercentage.toFixed(2)}%/${oddPercentage.toFixed(2)}%`);

}

// Приклад виклику функції
checkProbabilityTheory(600);
