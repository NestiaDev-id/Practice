<?php

session_start();
$_SESSION = [];
session_unset();
session_destroy();

setcookie('id','',time()-time());
setcookie('key','',time()-time());

header('Location: login.php');
exit;

?>