const faqQuestion = document.querySelectorAll('.faq__question-box');

const faqAnswer = document.querySelectorAll('.faq__answer');

faqQuestion.forEach((question, i) => {
    faqQuestion[i].addEventListener('click', () => {

        if (!faqAnswer[i].classList.contains('selected')) {
            faqAnswer[i].classList.add('selected');
        } else {
            faqAnswer[i].classList.remove('selected');
        }

        faqQuestion[i].children[0].classList.toggle('selected');
        faqQuestion[i].children[1].classList.toggle('selected');

    })
})