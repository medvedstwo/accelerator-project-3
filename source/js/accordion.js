const accordion = document.querySelector('.faq');
const accordionBtns = accordion.querySelectorAll('.faq__button');
const accordionAnswers = accordion.querySelectorAll('.faq__answer');

const initAccordion = () => {
  accordionBtns.forEach.call(accordionBtns, (accordionBtn) => {
    accordionBtn.addEventListener('click', () => {
      const clickedAnswer = accordionBtn.parentElement.parentElement.querySelector('.faq__answer');
      accordionBtn.classList.toggle('faq__button--active');
      clickedAnswer.classList.toggle('faq__answer--active');

      if (clickedAnswer.classList.contains('faq__answer--active')) {
        clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + 'px';
      } else {
        clickedAnswer.style.maxHeight = null;
      }
    });
  });

  accordionAnswers.forEach((item) => {
    if (item.classList.contains('faq__answer--active')) {
      item.style.maxHeight = item.scrollHeight + 'px';
    }
  });
};

export default initAccordion;

