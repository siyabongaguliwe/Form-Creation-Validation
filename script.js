document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        console.log('Form submitted');

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);

        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
            console.log('Username validation failed');
        }

        // Email validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
            console.log('Email validation failed');
        }

        // Password validation
        if (password.length < 6) {
            isValid = false;
            messages.push('Password must be at least 6 characters long.');
            console.log('Password validation failed');
        }

        // Display feedback
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = 'green';
            console.log('Registration successful');
        } else {
            feedbackDiv.textContent = messages.join(' ');
            feedbackDiv.style.color = 'red';
            console.log('Validation errors:', messages);
        }
    });
});
