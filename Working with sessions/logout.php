<?php
	session_start();
	if (isset($_POST['logout'])){
		$current_session = $_SESSION['name'];
		unset($_SESSION['name']);
		setcookie($current_session, '123', time() - 43200, "/");
		session_destroy();	
		require('index.php');
		exit();
	}
?>