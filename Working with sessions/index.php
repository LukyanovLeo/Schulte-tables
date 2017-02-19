<?php 
	error_reporting( E_ERROR );
	$connect = mysql_connect('localhost', 'phpmyadmin', '12345') or die(mysql_error());
	mysql_select_db('users');

	
	if (isset($_POST['registr'])){
		$username = $_POST['username'];
		$login = $_POST['login'];
		$password = $_POST['password'];
		$repeat_password = $_POST['repeat_password'];
		
		//ПОЛУЧАЕМ ВСЕ ИМЕНЯ ПОЛЬЗОВАТЕЛЕЙ И ЛОГИНЫ
		
		//проверяем username
		$query = mysql_query("SELECT username FROM usr");	
		$existing_users = array();
		while($usernames = mysql_fetch_assoc($query)) { 
			$existing_users[] = $usernames['username']; 
		} 
		//проверям login
		$query = mysql_query("SELECT login FROM usr");	
		$existing_logins = array();
		while($logins = mysql_fetch_assoc($query)) { 
			$existing_logins[] = $logins['login']; 
		}
		
		//ПРОВЕРЯЕМ, ЕСТЬ ЛИ ТАКИЕ ИМЯ ПОЛЬЗОВАТЕЛЯ ИЛИ ЛОГИН В БД
		$isTrue = true;
		for($i = 0; $i < count($existing_logins); $i++){
		if (($username == $existing_users[$i]) || ($login == $existing_logins[$i])){
				echo "That username and/or login is already used by someone else. Try another one.";			
				$isTrue = false;
				break;
			}
			else{
				continue;
			}
		}
		if (($username != '') || ($login != '') || ($password != '')){
			if (!is_numeric($login{0})){
				if (($password == $repeat_password) && ($isTrue)){
					$password = md5($password);
					$query = mysql_query("INSERT INTO usr VALUES 
					('', '$username', '$login', '$password', '', '', '', '', '', '', '', '')") or die(mysql_error());
				}
				else{
					die("Passwords aren't match.");
				}
			}
			else{
				die("Login must start with a char.");
			}
		}
		else{
			die("There mustn't be any empty fields.");
		}

	}
	if (isset($_POST['author'])){
		$ent_login = $_POST['ent_login'];
		$ent_password = md5($_POST['ent_password']);
		
		$query = mysql_query("SELECT * FROM usr WHERE password = '$ent_password'");
		$user_data = mysql_fetch_array($query);
		
		if ($user_data['password'] == $ent_password){
			setcookie($ent_login, '123', time() + 43200, "/");
			session_start();
			$_SESSION['name'] = $ent_login;
			require('main.html');
			exit();
		}
		else{
			echo "Wrong passowrd or login";
		}
	}

?>
<body>
	<link href="menustyle.css" rel="stylesheet">
	<div class="header">YOU WELCOME!</div>
	<form class="registr" method="post" action="index.php">
		<input type="text" name="username" placeholder="Username"/> <br>
		<input type="text" name="login" placeholder="Login"/> <br>
		<input type="password" name="password" placeholder="Password"/> <br>
		<input type="password" name="repeat_password" placeholder="Repeat Password"/> <br>
		<input class="buttons" type="submit" name="registr" value="Registrate"/>
	</form>
</body>
<?php 
	if (isset($_SESSION['name'])){
	}
	else{
		echo '<form class="author" method="post" action="index.php">
				<input type="text" name="ent_login" placeholder="Login"/> <br>
				<input type="password" name="ent_password" placeholder="Password"/> <br>
				<input class="buttons" type="submit" name="author" value="Enter"/>
			</form>';
	}
?>





