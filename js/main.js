import '/sass/style.scss';

(() => {
  const accordionButtonArr = [...document.querySelectorAll('[data-accordion-button]')];
  accordionButtonArr.forEach(e => {
    e.addEventListener('click', (ev) => {
      const accordionItemEl = ev.currentTarget.closest('[data-accordion-item]');
      const destElArr = [accordionItemEl, ...accordionItemEl.querySelectorAll('[data-state]')];
      destElArr.forEach(e => {
        e.dataset.state = (e.dataset.state === 'opened') ? "closed" : "opened";
      });

      const textEl = ev.currentTarget.querySelector('[data-accordion-button-text]');
      textEl.textContent = (textEl.dataset.state === 'opened') ? "접기" : "펼치기";
    });
  });
})();
