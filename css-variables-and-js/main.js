let root = document.documentElement;

let color = document.querySelector('.color');
let dinamicColor = '';

let blur = document.querySelector('.blur');
let dinamicBlur = '';

let spacing = document.querySelector('.spacing');
let dinamicSpacing = '';

/* CAPTURAR E SETAR O VALOR DINÂMICO DA COR */
color.addEventListener('input', () => {
  dinamicColor = color.value;
  root.style.setProperty('--color', dinamicColor);
});

/* CAPTURAR E SETAR O VALOR DINÂMICO DO BLUR */
blur.addEventListener('input', () => {
  dinamicBlur = blur.value;
  root.style.setProperty('--blur', dinamicBlur + 'px');
});

/* CAPTURAR E SETAR O VALOR DINÂMICO DO SPACING */
spacing.addEventListener('input', () => {
	dinamicSpacing = spacing.value;
	console.log(dinamicSpacing);
	root.style.setProperty('--spacing', dinamicSpacing + 'px')
})