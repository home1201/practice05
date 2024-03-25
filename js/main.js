import '/sass/style.scss';

(() => {
  const accordionButtonArr = [...document.querySelectorAll('[data-accordion-button]')];
  accordionButtonArr.forEach(e => {
    e.addEventListener('click', (ev) => {
      const accordionItem = ev.target.closest('[data-accordion-item]');
      const destElArr = [accordionItem, ...accordionItem.querySelectorAll('[data-state]')];
      destElArr.forEach(e => {
        e.dataset.state = (e.dataset.state === 'opened') ? "closed" : "opened";
      });
    });
  });
})();
