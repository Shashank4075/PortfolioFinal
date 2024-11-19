<?php
// Ensure the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get form data
    $userEmail = $_POST['userEmail'];
    $message = $_POST['message'];

    // Your email address (where you want to receive the email)
    $to = 'sshekha1@mail.yu.edu'; // Your email address
    $subject = 'New Message from Recruiter';
    
    // Headers to send the email properly
    $headers = "From: " . $userEmail . "\r\n";
    $headers .= "Reply-To: " . $userEmail . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email body
    $body = "Message from: " . $userEmail . "\n\n" . $message;

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
?>
