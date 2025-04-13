function sendMail() {
    console.log("Hello man");
    if (!validateName() || !validateEmail() || !validatePhone() || !validateSubject() || !validateMessage() || !checkEmptyFields()) {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.cursor = "not-allowed";
        return;
    }
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.cursor = "pointer";

    let params = {
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       phone: document.getElementById("phone").value,
       message: document.getElementById("comments").value
    };
    emailjs.send("service_o8wzk57", "template_ypse019", params)
       .then(function(response) {
          alert("Message sent successfully!");
       }, function(error) {
          alert("Failed to send message. Please try again later.");
       });
}