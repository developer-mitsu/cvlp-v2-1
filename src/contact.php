<?php
mb_internal_encoding("UTF-8");
// []内はcontact.html内のname
if($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $name_how = $_POST['name_how'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$content = $_POST['content'];
  $date1 = $_POST['date1'];
  $date2 = $_POST['date2'];
  $date3 = $_POST['date3'];

  $body .= "氏名:".$name."\n";
  $body .= "氏名(フリガナ):".$name_how."\n";
  $body .= "メールアドレス:".$email."\n";
	$body .= "電話番号:".$phone."\n";
  $body .= "第一希望日程:".$date1."\n";
  $body .= "第二希望日程:".$date2."\n";
  $body .= "第三希望日程:".$date3."\n";
	$body .= "お問い合わせ内容:\n".$content."\n\n";
  
  function SENDMAIL($to,$from,$sub,$body) {
    mb_language("uni");
    mb_internal_encoding("utf-8");//utf-8 or SJIS
    $Head="";
    $Head.="From: ".$from."\n";
    $Head.="Mime-Version: 1.0\n";
    $Head.="Reply-To: ".$from."\n";
    $Head.="X-Mailer: PHP/". phpversion();
    $flg = mb_send_mail($to, $sub, $body,$Head,"nishiumi@permil.jp");
    return $flg;
  }

	//メールの送り先,メールの送り元,メールタイトル
	$flg = SENDMAIL("info@permil.jp", $address, "カウンセリング希望", $body);

	if($flg == true) {
		$message = "無料カウンセリングのお申込みが完了しました。\n弊社より折り返しご連絡致します。\n今しばらくお待ち下さい。";
	} else {
		$message = "メールの送信に失敗しました。\n大変お手数ですが、もう一度やり直して下さい。";
	}
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>CodeVillage</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Khula" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <title>Document</title>
</head>
<body>
  <section class="contact-sended">
    <p>
      <?php echo $message; ?>
    </p>
    <p><a href="./">>>戻る</a></p>
  </section>
</body>
</html>
