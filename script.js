// Example: Toggle FAQ Answers
document.addEventListener('DOMContentLoaded', function () {
    const faqs = document.querySelectorAll('#faq-list div');

    faqs.forEach(faq => {
        faq.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
