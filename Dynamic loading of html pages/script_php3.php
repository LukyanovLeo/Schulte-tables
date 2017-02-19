<html>
<head>
	<?
		if ($_GET['link'] == 1){
			echo "<title>I</title>
			<style> #id1{pointer-events: none;} </style>";
		}
		elseif ($_GET['link'] == 2){
			echo "<title>LOVE</title>
			<style> #id2{pointer-events: none;} </style>";
		}
		elseif ($_GET['link'] == 3){
			echo "<title>YOU</title>
			<style> #id3{pointer-events: none;} </style>";
		}
		else{
			echo "<titlе>Динамическое формирование страниц</titlе>";
		}
	?>
</head>
	<body>
	<hЗ>Пожалуйста, выберите текст:</hЗ><br>
		
	<a id="id1" href="script_php3.php?link=1">Text1</a><br>
	<a id="id2" href="script_php3.php?link=2">Text2</a><br>
	<a id="id3" href="script_php3.php?link=3">Text3</a><br>
	
	<?
		$file = "";
		
		if ($_GET['link'] == 1) { 
			$file = "script_php3_inc1.html"; 
			include($file);
			echo "<div>
					<a id=\"next\" href=\"script_php3.php?link=2\">Next</a>
					<a id=\"contents\" href=\"script_php3.php?link=4\">Back to Contents</a>
				</div>";
		}
		if ($_GET['link'] == 2) { 
			$file = "script_php3_inc2.html"; 
			include($file);
			echo "<div>
					<a id=\"prev\" href=\"script_php3.php?link=1\">Previous</a>
					<a id=\"next\" href=\"script_php3.php?link=3\">Next</a>
					<a id=\"contents\" href=\"script_php3.php?link=4\">Back to Contents</a>
				</div>";
		}
		if ($_GET['link'] == 3) { 
			$file = "script_php3_inc3.html"; 
			include($file);
			echo "<div>
					<a id=\"prev\" href=\"script_php3.php?link=2\">Previous</a>
					<a id=\"contents\" href=\"script_php3.php?link=4\">Back to Contents</a>
				</div>";
		}
		if ($_GET['link'] == 4) {
				
		}
		
	?>
	</body>
</html>