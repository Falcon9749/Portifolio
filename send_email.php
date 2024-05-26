<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // Obter credenciais do Gmail
        $gmailUsername = getenv('GMAIL_USERNAME');
        $gmailPassword = getenv('GMAIL_PASSWORD');

        // Configurações do servidor
        $mail->isSMTP();
        $mail->Host = 'smpt.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $gmailUsername;
        $mail->Password = $gmailPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatário
        $mail->setFrom($email, $name);
        $mail->addAddress($gmailUsername); // Enviar para o próprio e-mail configurado

        // Conteúdo do e-mail
        $mail->isHTML(true);
        $mail->Subject = 'Nova mensagem do formulário de contato';
        $mail->Body = "<p><strong>Nome:</strong> $name</p>
                       <p><strong>Email:</strong> $email</p>
                       <p><strong>Mensagem:</strong><br>$message</p>";
        $mail->AltBody = "Nome: $name\nEmail: $email\nMensagem:\n$message";

        $mail->send();
        echo 'Mensagem enviada com sucesso!';
    } catch (Exception $e) {
        echo "Falha ao enviar a mensagem. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Método de solicitação inválido.";
}
