document.addEventListener('DOMContentLoaded', function() {
    const correctPassword = "test"; // Remplacez par le mot de passe de votre choix

    function promptPassword() {
        const inputPassword = prompt("Please enter the password:");

        if (inputPassword === correctPassword) {
            document.getElementById("protectedContent").style.display = "block";
        } else {
            alert("Incorrect password. Please try again.");
            promptPassword();
        }
    }

    promptPassword();
});
