<?php
session_start();
$_SESSION['played'] = 1;
$_SESSION['logged'] = 0;
echo "<html><head><META HTTP-EQUIV='Refresh' content ='0; URL=https://wf.mail.ru/pin/activate/?code='></head></html>"; ?>