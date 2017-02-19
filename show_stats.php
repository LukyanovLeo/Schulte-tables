<?php
	session_start();
	
	$connect = mysql_connect('localhost', 'root') or die(mysql_error());
	mysql_select_db('users');
	
	$query = mysql_query("SELECT login FROM usr");
	$logins = array();
	while($login = mysql_fetch_assoc($query)) { 
		$logins[] = $login['login']; 
	}
	
	if(isset($_POST['myEasy'])){
		$session = $_SESSION['name'];
		$query = mysql_query("SELECT easy FROM usr WHERE login = '$session'");
		$result = mysql_result($query, 0);
		$_SESSION['stats'] = $result;
		$_SESSION['diff'] = 0;
		
		if ($result != ''){
			require('graphics.html');
			exit();
		}
		else{
			require('statistics.html');
		}
	}
	if(isset($_POST['myNormal'])){
		$session = $_SESSION['name'];
		$query = mysql_query("SELECT normal FROM usr WHERE login = '$session'");
		$result = mysql_result($query, 0);
		$_SESSION['stats'] = $result;
		$_SESSION['diff'] = 1;
		
		if ($result != ''){
			require('graphics.html');
			exit();
		}		
		else{
			require('statistics.html');
		}
	}
	if(isset($_POST['myHard'])){
		$session = $_SESSION['name'];
		$query = mysql_query("SELECT hard FROM usr WHERE login = '$session'");
		$result = mysql_result($query, 0);
		$_SESSION['stats'] = $result;
		$_SESSION['diff'] = 2;
		
		if ($result != ''){
			require('graphics.html');
			exit();
		}
		else{
			require('statistics.html');
		}
	}
	if(isset($_POST['GlobalEasy'])){
		$session = $_SESSION['name'];
		$query = mysql_query("SELECT best_easy FROM usr");
		
		$results = array();
		while($result = mysql_fetch_assoc($query)) { 
			$results[] = $result['best_easy']; 
		}
		array_unshift($results, '');
		$_SESSION['stats'] = implode(",", $results).",".implode(",", $logins);
		
		if ($results != ''){
			require('graphics.html');
			exit();
		}
		else{
			require('statistics.html');
		}
	}
	if(isset($_POST['GlobalNormal'])){
		$session = $_SESSION['name'];
		$query = mysql_query("SELECT best_normal FROM usr");
		
		$results = array();
		while($result = mysql_fetch_assoc($query)) { 
			$results[] = $result['best_normal']; 
		}
		array_unshift($results, '');
		$_SESSION['stats'] = implode(",", $results).",".implode(",", $logins);
		
		if ($results != ''){
			require('graphics.html');
			exit();
		}
		else{
			require('statistics.html');
		}
	}
	if(isset($_POST['GlobalHard'])){
		$session = $_SESSION['name'];
		$query = mysql_query("SELECT best_hard FROM usr");
		
		$results = array();
		while($result = mysql_fetch_assoc($query)) { 
			$results[] = $result['best_hard']; 
		}
		array_unshift($results, '');
		$_SESSION['stats'] = implode(",", $results).",".implode(",", $logins);
		
		if ($results != ''){
			require('graphics.html');
			exit();
		}
		else{
			require('statistics.html');
		}
	}
?>