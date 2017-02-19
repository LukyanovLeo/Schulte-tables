<?php
	session_start();
	$connect = mysql_connect('localhost', 'root') or die(mysql_error());
	mysql_select_db('users');
	
	if (isset($_POST['clear'])){
		$session = $_SESSION['name'];
		$diff = $_SESSION['diff'];
		switch($diff){
			case 0: $query = mysql_query("UPDATE usr SET easy = '', best_easy = '' WHERE login = '$session'") or die(mysql_error()); break;
			case 1: $query = mysql_query("UPDATE usr SET normal = '', best_normal = '' WHERE login = '$session'") or die(mysql_error()); break;
			case 2: $query = mysql_query("UPDATE usr SET hard = '', best_hard = '' WHERE login = '$session'") or die(mysql_error()); break;
		}
		require('statistics.html');
	}
?>
