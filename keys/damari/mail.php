<?php
    $name = $_POST['name'];
    $file = $_POST['file'];
    $comment = $_POST['comment'];
    $phone = $_POST['phone'];
    $message = "Имя: ".$name."\nТелефон: ".$phone."\nФайл: ".$file."\nСообщение ".$comment."";
    $to = 'gynyax5@gmail.com';
    $subject = 'Заявка с сайта D A M A R I';
    mail($to, $subject, $message);
?>