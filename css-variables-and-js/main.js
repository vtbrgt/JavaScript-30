let root = document.documentElement;

let color = document.querySelector('.color');
let dinamicColor = '';

let blur = document.querySelector('.blur').value;
let dinamicBlur = '';

/* CAPTURAR E SETAR O VALOR DINÂMICO DA COR */
color.addEventListener('input', () => {
  dinamicColor = color.value;
  root.style.setProperty('--color', dinamicColor);
});

/* CAPTURAR E SETAR O VALOR DINÃMICO DO BLUR */
blur.addEventListener('input', () => {
  dinamicBlur = blur.value;
  root.style.setProperty('--blur', dinamicBlur);
});
