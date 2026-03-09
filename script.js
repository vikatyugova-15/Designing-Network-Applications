window.onload = function() {
    let a = ''
    let b = ''
    let expressionResult = ''
    let selectedOperation = null

    const outputElement = document.getElementById('result')
    const digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit != '.') || (digit == '.' && !a.includes(digit))) {
                a += digit;
            }
            outputElement.innerHTML = a;
        }
        else {
            if ((digit != '.') || (digit == '.' && !b.includes(digit))) {
                b += digit;
                outputElement.innerHTML = b;
            }
        }
    }

    digitButtons.forEach(button => {
        button.onclick = function() {
            const digitValue = button.innerHTML;
            onDigitButtonClicked(digitValue);
        }

    });

    function factorial(n) {
        if (n < 0)return NaN;
        if (n == 0)return 1;
        let result = 1;
        for (let i = 1; i<=n; i++) {
            result *= i;
        }
        return result;
    }
    document.getElementById('btn_op_mult').onclick = function() {
        if (a === '') return;
        selectedOperation = 'x';
    }
    document.getElementById('btn_op_plus').onclick = function() {
        if (a === '' )return;
        if (b !== '') {
            a = ((+a) + (+b)).toString();
            b = '';
            outputElement.innerHTML = a;
        }
        selectedOperation = '+';
    }
    document.getElementById('btn_op_minus').onclick = function() {
        if (a === '') return;
        if (b !== '') {
            a = ((+a) - (+b)).toString();
            b = '';
            outputElement.innerHTML = a;
        }
        selectedOperation = '-';
    }
    document.getElementById('btn_op_div').onclick = function() {
        if (a === '' )return;
        selectedOperation = '/';
    }
    document.getElementById('btn_op_sign').onclick = function() {
        if (!selectedOperation) {
            if (a == '')return;
            a = (-parseFloat(a)).toString();
            outputElement.innerHTML = a;
        } else {
            if (b == '')return;
            b = (-parseFloat(b)).toString();
            outputElement.innerHTML = b;
        }
    }
    document.getElementById('btn_op_percent').onclick = function() {
        if (a == '')return;
        selectedOperation = '%';
    }
    document.getElementById('btn_op_sqrt').onclick = function() {
        if (!selectedOperation) {
            if (a == '') return;
            a = Math.sqrt(+a).toString();
            outputElement.innerHTML = a;
        }
    }
    document.getElementById('btn_op_square').onclick = function() {
        if (!selectedOperation) {
            if (a == '')return;
            a = Math.pow(+a, 2).toString();
            outputElement.innerHTML = a;
        }
    }
    document.getElementById('btn_op_fuctorial').onclick = function() {
        if (a == '')return;
        a = factorial(+a).toString();
        outputElement.innerHTML = a;
    }
    document.getElementById('btn_op_zero').onclick = function() {
        if (!selectedOperation) {
            if (a !== ''){
                a += '000';
                outputElement.innerHTML = a;
            }
        } else {
            if (b !==''){
                b += '000';
                outputElement.innerHTML = b;
            }
        }
    }
    document.getElementById('btn_first_vznos').onclick = function() {
        if (!selectedOperation) {
            if (a == '') return;
            a = ((+a * 10)/100).toString();
            outputElement.innerHTML = a;
        }
    }

    document.getElementById('btn_change_result_color').onclick = function() {
        outputElement.classList.toggle('result-dark');
    }

    document.getElementById('btn_op_backspace').onclick = function(){
        if (!selectedOperation) {
            a = a.slice(0, -1);
            outputElement.innerHTML = a || 0;
        } else {
            b = b.slice(0, -1);
            outputElement.innerHTML = b || 0;
        }
    }
    
    document.getElementById('btn_change_theme').onclick = function(){
        document.body.classList.toggle('dark');
    }

    document.getElementById("btn_op_clear").onclick = function() {
        a = ''
        b = ''
        selectedOperation = ''
        expressionResult = ''
        outputElement.innerHTML = 0
    }
    document.getElementById("btn_op_equal").onclick = function () {
        if (a == '' || b == '' || !selectedOperation)
            return
        switch (selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b)
                break;
            case '+':
                expressionResult = (+a) + (+b)
                break;
            case '-':
                expressionResult = (+a) - (+b)
                break;
            case '/':
                expressionResult = (+a) / (+b)
                break;
            case '%':
                expressionResult = ((+a * +b)/ 100)
                break;
            default:
                break;
        }
        a = expressionResult.toString()
        b = ''
        selectedOperation = null 
        outputElement.innerHTML = a
    }
};