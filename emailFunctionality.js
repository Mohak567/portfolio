// function sendMail(){
//     let parms = {
//         name : document.getElementById("name").value.trim(),
//         email : document.getElementById("email_id").value.trim(),
//         subject : document.getElementById("subject").value.trim(),
//         message : document.getElementById("message").value.trim()
//     }

//     emailjs.send("service_81pv8ca","template_32pfqfq",parms).then(alert("Email Sent!!"));
// }


function sendMail() {
    // Get field values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email_id").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check for empty fields
    if (!name || !email || !subject || !message) {
        alert("Please fill in all the fields.");
        return; // Stop the function if any field is empty
    }

    // All fields are filled; prepare parameters
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send the email
    emailjs.send("service_81pv8ca", "template_32pfqfq", parms)
        .then(function(response) {
            alert("Email Sent!!");
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error(error);
        });
}