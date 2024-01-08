// In register.js

function validatePassword() {
    console.log('Validating password...'); // Add this line for debugging
    var newPassword = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (newPassword.length < 8) {
        alert('Password must be at least 8 characters.');
        return false;
    }
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please confirm your password.');
        return false;
    }

    return true; // Return true if password validation passes
}

function validateForm() {
    console.log('Validating form...'); // Add this line for debugging
    var firstName = document.getElementById('first-name').value;
    var email = document.getElementById('mail-id').value;

    var nameRegex = /^[a-zA-Z\s]{1,50}$/; // Adjusted for longer names
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstName)) {
        alert('First name must be 1 to 50 characters and contain only letters and spaces.');
        return false;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return validatePassword();
}
