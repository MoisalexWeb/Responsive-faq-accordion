document.addEventListener('click', (e) => {
    if (e.target.matches(".container__faq__item__header-title") || e.target.matches(".container__faq__item__header-arrow")) {
        const faqHeader = e.target.parentElement;
        const faqParagraph = e.target.parentElement.nextElementSibling;

        faqHeader.classList.toggle('active');
        if (faqHeader.classList.contains('active')) {
            faqParagraph.style.height = `${faqParagraph.scrollHeight}px`
        } else {
            faqParagraph.removeAttribute('style');
        }
    }
})