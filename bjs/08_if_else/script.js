let minValue = parseInt(prompt('Минимальное значение','0')) || 0;
// minValue = minValue > 999 ? 999 : minValue < -999 ? -999 : minValue;

let maxValue = parseInt(prompt('Максимальное значение','100')) || 100;
// maxValue = maxValue > 999 ? 999 : maxValue < -999 ? -999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ? 
            `Вы загадали неправильное число!\n\u{1F914}` :
            phraseRandom === 1 ? `Я сдаюсь..\n\u{1F92F}` :
            phraseRandom === 2 ? `Что-то тут не сходится!\n\u{1F635}` :
            `Упс! Я совсем запутался!\n\u{1F62C}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // answerField.innerText = `Вы загадали число ${answerNumber }?`;
            const phraseRandom = Math.round(Math.random() * 3);
            const questionPhrase = phraseRandom === 0 ? 
            `Вы загадали число ${answerNumber}?` :
             phraseRandom === 1 ? `Наверное, это число ${answerNumber}?` :
            phraseRandom === 2 ? `Я думаю, это ${answerNumber}?` :
            `Хмм... может быть ${answerNumber}?`;
            answerField.innerText = questionPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue > maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 0) ?
            `Вы загадали неправильное число!\n\u{1F914}` :
            phraseRandom === 1 ? `Я сдаюсь..\n\u{1F92F}` :
            phraseRandom === 2 ? `Что-то тут не сходится!\n\u{1F635}` :
            `Упс! Я совсем запутался!\n\u{1F62C}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3);
            const questionPhrase = phraseRandom === 0 ? 
            `Вы загадали число ${answerNumber}?` :
            phraseRandom === 1 ? `Наверное, это число ${answerNumber}?` :
            phraseRandom === 2 ? `Я думаю, это ${answerNumber}?` :
            `Хмм... может быть ${answerNumber}?`;
            answerField.innerText = questionPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

