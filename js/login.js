function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(username)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter your password");
        return false;
    }

    // If both fields are valid, submit the form
    document.getElementById("loginForm").submit();
}
