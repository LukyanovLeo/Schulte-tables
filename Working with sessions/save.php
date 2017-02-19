<?php
session_start();
	$connect = mysql_connect('localhost', 'root') or die(mysql_error());
	mysql_select_db('users');
	
	$res = $_POST['secs'];
	$diff = $_POST['detect'];
	$session = $_SESSION['name'];
	if ($diff == 3){
		$q = mysql_query("SELECT easy FROM usr WHERE login = '$session'");
		$selected = mysql_result($q, 0).",".$res;
		$query = mysql_query("UPDATE usr SET easy = '$selected' WHERE login = '$session'") or die(mysql_error());
		
		//calculating the best result on current difficult
		$array_of_results = explode(",", $selected);
		$dummy = array_shift($array_of_results);
		$dummy = $array_of_results[0];
		for ($i = 1; $i < count($array_of_results); $i++){
			if ($array_of_results[$i] < $dummy){
				$dummy = $array_of_results[$i];
			}
		}
		$query = mysql_query("UPDATE usr SET best_easy = '$dummy' WHERE login = '$session'") or die(mysql_error());
	}
	if ($diff == 5){
		$q = mysql_query("SELECT normal FROM usr WHERE login = '$session'");
		$selected = mysql_result($q, 0).",".$res;
		$query = mysql_query("UPDATE usr SET normal = '$selected' WHERE login = '$session'") or die(mysql_error());
		
		$array_of_results = explode(",", $selected);
		$dummy = array_shift($array_of_results);
		$dummy = $array_of_results[0];
		for ($i = 1; $i < count($array_of_results); $i++){
			if ($array_of_results[$i] < $dummy){
				$dummy = $array_of_results[$i];
			}
		}
		$query = mysql_query("UPDATE usr SET best_normal = '$dummy' WHERE login = '$session'") or die(mysql_error());
	}
	if ($diff == 7){
		$q = mysql_query("SELECT hard FROM usr WHERE login = '$session'");
		$selected = mysql_result($q, 0).",".$res;
		$query = mysql_query("UPDATE usr SET hard = '$selected' WHERE login = '$session'") or die(mysql_error());
		
		$array_of_results = explode(",", $selected);
		$dummy = array_shift($array_of_results);
		$dummy = $array_of_results[0];
		for ($i = 1; $i < count($array_of_results); $i++){
			if ($array_of_results[$i] < $dummy){
				$dummy = $array_of_results[$i];
			}
		}
		$query = mysql_query("UPDATE usr SET best_hard = '$dummy' WHERE login = '$session'") or die(mysql_error());
	}	
	if ($diff == 9){
		$q = mysql_query("SELECT veryhard FROM usr WHERE login = '$session'");
		$selected = mysql_result($q, 0).",".$res;
		$query = mysql_query("UPDATE usr SET veryhard = '$selected' WHERE login = '$session'") or die(mysql_error());
		
		$array_of_results = explode(",", $selected);
		$dummy = array_shift($array_of_results);
		$dummy = $array_of_results[0];
		for ($i = 1; $i < count($array_of_results); $i++){
			if ($array_of_results[$i] < $dummy){
				$dummy = $array_of_results[$i];
			}
		}
		$query = mysql_query("UPDATE usr SET best_veryhard = '$dummy' WHERE login = '$session'") or die(mysql_error());
	}
?>