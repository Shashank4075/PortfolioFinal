<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email and message content
    $userEmail = $_POST['userEmail'];
    $message = $_POST['message'];

    // Your email address (where you want to receive the email)
    $to = 'sshekha1@mail.yu.edu'; // Replace with your email address
    $subject = 'New Message from Recruiter';
    $headers = "From: " . $userEmail . "\r\n";
    $headers .= "Reply-To: " . $userEmail . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Prepare the message content
    $body = "Message from: " . $userEmail . "\n\n" . $message;

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>
