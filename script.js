const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove destaque e esconde botão dos outros cards
    cards.forEach(c => {
      c.classList.remove('selected');
      c.classList.add('dimmed');
      const btn = c.querySelector('.orderBtn');
      if (btn) btn.classList.add('hidden');
    });

    // Destaca o card clicado
    card.classList.remove('dimmed');
    card.classList.add('selected');

    // Exibe botão dentro do card clicado
    const orderBtn = card.querySelector('.orderBtn');
    if (orderBtn) {
      orderBtn.classList.remove('hidden');

      // Define link para o botão
      const link = card.dataset.link;
      orderBtn.onclick = () => {
        if (link) window.location.href = link;
      };
    }
  });
});
