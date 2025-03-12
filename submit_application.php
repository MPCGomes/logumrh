<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = htmlspecialchars($_POST['name']);
  $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $phone = htmlspecialchars($_POST['phone']);
  $jobTitle = htmlspecialchars($_POST['jobTitle']);
  $jobId = htmlspecialchars($_POST['jobId']);
  $file = $_FILES['file'];

  // File upload handling
  $uploadDir = 'uploads/';
  if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
  }
  $uploadFilePath = $uploadDir . basename($file['name']);
  move_uploaded_file($file['tmp_name'], $uploadFilePath);

  // Email sending
  $to = "your-email@example.com";  // Change to your email
  $subject = "Nova Candidatura: $jobTitle (ID: $jobId)";
  $message = "Nome: $name\nE-mail: $email\nTelefone: $phone\n\nCurrículo anexado: " . $_SERVER['HTTP_HOST'] . "/$uploadFilePath";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
} else {
  echo "invalid_request";
}
?>