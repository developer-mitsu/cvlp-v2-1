<?php
mb_internal_encoding("UTF-8");
if($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$age = $_POST['age'];
	$address = $_POST['address'];
	$phone = $_POST['phone'];
	$opportunity = $_POST['opportunity'];

	$body .= "氏名".$name."\n";
	$body .= "年齢:".$age."\n";
    $body .= "メールアドレス:".$email."\n";
    $body .= "住所:".$address."\n";
	$body .= "電話番号:".$phone."\n";
	$body .= "ダウンロードの目的:\n".$opportunity."\n\n";

	SENDMAIL("info@permil.jp", $email, "資料請求", $body);
}

function SENDMAIL($to,$from,$sub,$body) {
	mb_language("uni");
	mb_internal_encoding("utf-8");//utf-8 or SJIS
	$Head="";
	$Head.="From: ".$from."\n";
	$Head.="Mime-Version: 1.0\n";
	$Head.="Reply-To: ".$from."\n";
	$Head.="X-Mailer: PHP/". phpversion();
	$flg = mb_send_mail($to, $sub, $body,$Head,"info@permil.jp");
	return $flg;
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <title>CodeVillage</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/6270f2e9f0.js"></script>
    <title>Document</title>
</head>

<body>
    <% include ./src/components/header %>

    <section class="downloading">
        <p>
            自動でダウンロードが始まらない場合は、<wbr>以下のリンクをクリックしてください。<br>
            <a href="favicon.ico" download="favicon.ico">ダウンロードを開始する</a>
        </p>
        <div class="reservation-btn__wrapper">
            <div class="reservation-btn__bg"></div>
            <a href="./" class="reservation-btn__main"></a>
            <a href="./" class="reservation-btn__description">TOPに戻る</a>
        </div>

    </section>


    <% include ./src/components/footer.ejs %>
</body>

</html>