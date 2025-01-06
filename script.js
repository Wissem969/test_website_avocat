document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value;

    // Here, you can integrate with an API to send this data to a server

    // Show the thank-you message
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = `Thank you, ${name}! We have received your request about ${topic} and will get back to you at ${email} soon.`;

    // Optionally, clear the form after submission
    document.getElementById('contact-form').reset();
});
