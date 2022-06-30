window.addEventListener('keydown', function (e) {
  const som = document.querySelector(`audio[data-key="${e.code}"]`);
  const nota = document.querySelector(`.nota[data-key="${e.code}"]`);

  if (!som) return; // impedir a função de ser executada toda de uma vez
  som.currentTime = 0; // voltar o som do início
  som.play();

  nota.classList.add('ativa');
});

const notas = document.querySelectorAll('.nota');
notas.forEach((nota) =>
  nota.addEventListener('transitionend', function () {
    nota.classList.remove('ativa');
  })
);
