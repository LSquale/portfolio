<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST["Nom"]);
    $email = htmlspecialchars($_POST["Email"]);
    $message = htmlspecialchars($_POST["Message"]);

    $to = "triouxvictor4@gmail.com";
    $subject = "Nouveau message depuis le site";
    $body = "Nom : $nom\nEmail : $email\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: merci.html");
    } else {
        echo "Erreur lors de l'envoi.";
    }
}
?>