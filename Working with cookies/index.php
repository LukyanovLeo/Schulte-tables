<?php
	if(!isset($_COOKIE['total'])){
		setcookie("total", 1, time()+(3600*30*24));
	}
	else{
		setcookie("total", ++$_COOKIE['total'], time()+(3600*30*24));
	}		
	

	if(isset($_COOKIE['count'])){
		setcookie("count", ++$_COOKIE['count'], time()+(3600*$_COOKIE['lifetime']));
	}
	else{ 
		setcookie("count", 1, time()+(3600*$_POST['lifetime']));	
	}
	if(isset($_POST['login']) && isset($_POST['password']) && isset($_POST['lifetime']) 
	   						&& is_numeric($_POST['lifetime']) && $_POST['lifetime'] > 0){
		//$ctime = mktime(0,0,0,01,25,2009);
		//setcookie("total", ++$_COOKIE['total'], time()+(3600*30*24));
		setcookie("last_login", date("d.m.y. H:i:s"), time()+(3600*$_POST['lifetime']));
		setcookie("lifetime", $_POST['lifetime'], time()+(3600*$_POST['lifetime']));
		setcookie("lab_login", $_POST['login'], time()+(3600*$_POST['lifetime']));
		setcookie("lab_pass", $_POST['password'], time()+(3600*$_POST['lifetime']));		
		
		$_COOKIE['last_login'] = date("d.m.y. H:i:s");
		$_COOKIE['lifetime'] = $_POST['lifetime'];
		$_COOKIE['lab_login'] = $_POST['login'];
		$_COOKIE['lab_pass'] = $_POST['password'];
	}
	elseif(isset($_POST['lifetime']) && !is_numeric($_POST['lifetime']) && $_POST['lifetime'] <= 0){
		echo "Вы ввели неверные данные. Попробуйте снова<br>";
	}
	if($_GET['logout'] == 11){
		setcookie("lifetime");
		setcookie("lab_login");
		setcookie("lab_pass");
		setcookie("count");
		
		unset($_COOKIE['count']);
		unset($_COOKIE['lifetime']);
		unset($_COOKIE['lab_login']);
		unset($_COOKIE['lab_pass']);
	}
?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
<title>Лабораторная работа Cookies</title>
</head>
<body>
<?php
	if(($_COOKIE['lab_login'] == "") && ($_COOKIE['lab_pass'] == "")){
		echo '<form id="form1" name="form1" method="post" action="index.php">
		  <input type="text" name="login" id="login" /> Login
		  <br>
		  <input type="text" name="password" id="password" /> Password
		  <br>
		  <input type="text" name="lifetime" id="lifetime" /> Cookie lifetime
		  <br>
		  <input type="submit" name="login_but" id="login_but" value="Login" />
		</form>';
	}
	else{
		echo "Вы зашли как: ".$_COOKIE['lab_login']."
		<br>Последний раз вы заходили: ".$_COOKIE['last_login']."
		<br>Количество посещений вами нашего сайта: ".$_COOKIE['count']."
		<br>Общее количество осещений сайта: ".$_COOKIE['total']."
		<br>Время жизни вашей куки: ".$_COOKIE['lifetime']."ч.".
			'<br><a href="index.php?logout=11">[выйти]</a>';
	}
?>
</body>
</html>



















