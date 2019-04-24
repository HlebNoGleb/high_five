<?php
  $name = $_POST['name'];
  $email = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = "Имя: ".$name."\nТелефон: ".$phone."\nE-mail: ".$email."";
    $to = 'gynyax5@gmail.com';
    $subject = 'заявочка на дай пять';
    mail($to, $subject, $message);
?>