document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        const username = document.getElementById('username').value.trim();
        if (username.length < 5) {
            isValid = false;
            document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long.';
        }

        const email = document.getElementById('email').value.trim();
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        }

        const phone = document.getElementById('phone').value.trim();
        if (phone.length < 10) {
            isValid = false;
            document.getElementById('phoneError').textContent = 'Phone number must be at least 10 digits long.';
        }

        const password = document.getElementById('password').value.trim();
        if (password.length < 8) {
            isValid = false;
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        }

        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        if (password !== confirmPassword) {
            isValid = false;
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        }

        const terms = document.getElementById('terms').checked;
        if (!terms) {
            isValid = false;
            document.getElementById('termsError').textContent = 'You must agree to the terms and services.';
        }

        if (isValid) {
            loginForm.submit();
        }
    });
});
