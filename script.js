document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get error elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccess = document.getElementById('formSuccess');

    // Reset previous messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formSuccess.textContent = '';

    let isValid = true;

    // Validate Name
    if (name === '') {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Message
    if (message === '') {
        messageError.textContent = 'Please enter a message.';
        isValid = false;
    }

    // Submit if valid
    if (isValid) {
        formSuccess.textContent = 'Thank you! Your message has been validated and sent.';
        document.getElementById('contactForm').reset();
    }
});
