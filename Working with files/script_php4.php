<html>
	<head>
		<titlе>Гостевая книга</titlе>
	</head>
	<body>
		<form action="script_php4.php" method="post">
			<textarea name="message" cols=12 rows=4></textarea><br>
			<input type="text" name="person" />
			<input type="submit" value="submit" />
		</form>
		<?
			$filename = "messages.txt";
			$fp = fopen($filename,"a");
			if (isset($_POST['message']) && isset($_POST['person'])){
				$str_to_write = $_POST['person']."(".date("d.m.y. H:i:s")."): ".$_POST['message'].'<br>';
				if($fp){
					fputs($fp, $str_to_write);
					fclose($fp);
				}
				include($filename);
			}
		?>
	</body>
</html>