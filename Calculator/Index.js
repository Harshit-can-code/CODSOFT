
const display = document.querySelector('.output input');
const buttons = document.querySelectorAll('.btn input[type="button"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'AC':
                display.value = '';
                break;
            case ' ':
                display.value = display.value.slice(0, -1);
                break;
            case '=':
                try {
                    display.value = eval(display.value.replace(/x/g, '*'));
                } catch {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += value;
        }
    });
});
