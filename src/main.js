const btns = document.querySelector('.buttons').querySelectorAll('div');
const input = document.querySelector('.text');

let current;
let _current;
let sign;

const clear = () => input.value = '';

const del = () => input.value = input.value.slice(0, -1);

const operations = {
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '%': (a, b) => a % b
};

const doOperation = () => {
  input.value = operations[sign](current, _current);
};

document.querySelector('.calculator').addEventListener('keydown', (e) => {
  e.preventDefault();
  if(e.key === 'Backspace') del();
  if(e.key.match(/^\d/)) input.value += e.key;
});

btns.forEach((target) => {
  const arr = Array.from(target.querySelectorAll('button'));

  arr.forEach((btn) => {
    const item = btn.textContent;
    const signs = ['+', '-', '*', '/', '%'];

    btn.addEventListener('click', () => {
      if(!isNaN(parseFloat(item)) || item === '.') input.value += item;
      if(item === 'C') del();
      if(item === 'AC') clear();

      if(signs.includes(item)) {
        if(input.value) {
          current = parseFloat(input.value);
          sign = item;
          clear();
        }
      }

      if(item === '=') {
        _current = parseFloat(input.value);
        doOperation();
      }

    });

  });
  
});
