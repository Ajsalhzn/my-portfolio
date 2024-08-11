// document.addEventListener('DOMContentLoaded', function() {
//     // Example: Change the background color of the header on scroll
//     const header = document.querySelector('header');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             header.style.backgroundColor = '#444';
//         } else {
//             header.style.backgroundColor = '#333';
//         }
//     });
// });

function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Check if all fields are filled out
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before sending your message.");
        return; // Stop the function from proceeding further
    }

    var params = {
        name: name,
        email: email,
        message: message,
    };

    const serviceID = "service_j4t9wnc"; // Replace with your actual service ID
    const templateID = "template_lo2wlav"; // Replace with your actual template ID

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                // Clear the input fields only if the email was sent successfully
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Your message has been sent successfully.");
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch((err) => {
            console.error("Failed to send email:", err);
            alert("Failed to send your message. Please try again later.");
        });
}
