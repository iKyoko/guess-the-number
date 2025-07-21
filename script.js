let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessBtn = document.getElementById('guessBtn');
const guessInput = document.getElementById('guessInput');
const result = document.getElementById('result');

guessBtn.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > 100) {
        result.textContent = '请输入 1 到 100 之间的数字！';
        return;
    }
    if (guess === randomNumber) {
        result.textContent = '恭喜你，猜对了！';
        guessBtn.disabled = true;
    } else if (guess > randomNumber) {
        result.textContent = '太大了！再试试~';
    } else {
        result.textContent = '太小了！再试试~';
    }
});
