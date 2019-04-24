<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$comment = $_POST['comment'];
	$phone = $_POST['phone'];
    $message = "Имя: ".$name."\nТелефон: ".$phone."\nE-mail: ".$email."\nКомментарий ".$comment."";
    $to = 'manager@jetfly.by';
    $subject = 'Заявка на поездку в испанию';
    mail($to, $subject, $message);
?>