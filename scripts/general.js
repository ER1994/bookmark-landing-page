const contactForm = document.getElementById('contact-form')


contactForm.addEventListener('submit', (e) => {
    if (!contactForm.checkValidity()) {
        e.preventDefault()
    }
    contactForm.classList.add('was-validated')

})