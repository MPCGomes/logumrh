<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $smtpHost = $_ENV['HOSTINGER_SMTP_HOST'];
  $smtpPort = $_ENV['HOSTINGER_SMTP_PORT'];
  $smtpUser = $_ENV['HOSTINGER_SMTP_USER'];
  $smtpPass = $_ENV['HOSTINGER_SMTP_PASS'];
  $name = $_POST['name'] ?? '';
  $email = $_POST['email'] ?? '';
  $phone = $_POST['phone'] ?? '';
  $jobTitle = $_POST['jobTitle'] ?? '';
  $jobId = $_POST['jobId'] ?? '';
  $fileTmp = $_FILES['file']['tmp_name'] ?? '';
  $fileName = $_FILES['file']['name'] ?? '';
  if (!$name || !$email || !$phone || !$fileTmp || !$jobTitle || !$jobId) {
    http_response_code(400);
    echo "Missing fields";
    exit;
  }
  try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->Port = $smtpPort;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->setFrom($smtpUser, "Site Application");
    $mail->addAddress("contato@logumrh.com.br", "Recruiter");
    $mail->Subject = "$jobTitle - ID $jobId";
    $mail->Body = "Nome: $name\nE-mail: $email\nTelefone: $phone\nVaga: $jobTitle (ID $jobId)";
    if ($fileTmp && $fileName) {
      $mail->addAttachment($fileTmp, $fileName);
    }
    $mail->send();
    echo "success";
  } catch (Exception $e) {
    http_response_code(500);
    echo "Mailer Error: " . $mail->ErrorInfo;
  }
} else {
  http_response_code(405);
  echo "Method not allowed";
}
