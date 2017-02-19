<?php
	$connect = mysql_connect('localhost', 'root') or die(mysql_error());
	mysql_select_db('users');
	
	$ask = $_POST['to_get'];
	$query = mysql_query("SELECT result FROM usr WHERE ID = 1");
	$selected = mysql_result($query, 0);
	echo $selected;	
?>