<?
	function show() {
?>
	<form method="post"	action="calculator.php">
		<table border=1 cellspacing=2 cellpadding=2>
			<tr>
				<td>First number: </td>
				<td><input size=14 type=text name=first></td>
			</tr>
			<tr>
				<td>Second number: </td>
				<td><input size=14 type=text name=second></td>
			</tr>
			<tr>
				<td>
				<select size="1" name="action">
					<option value="choo">Choose operation</option>
					<option value="sum">Sum</option>
					<option value="diff">Difference</option>
					<option value="mul">Multiplication</option>
					<option value="div">Division</option>
					<option value="pow">Power up</option>
					<option value="percent">Percent</option>
					<option value="sqroot">Square root</option>
					<option value="sin">Sinus</option>
					<option value="cos">Cosinus</option>
					<option value="tan">Tangent</option>
					<option value="cot">Cotangent</option>
				</select>
				</td>
			<td><input type="submit" value="Run">
			</td>
			</tr>
<?
}
	function calc(){						
		switch($_POST['action']) {
			case "choo":
				return -1;
			case "sum": 
				return 0;
				break;
			case "diff": 
				return 1;
				break;
			case "mul": 
				return 2;
				break;
			case "div":
				return 3;
				break;
			case "pow":
				return 4;
				break;
			case "percent":
				return 5;
				break;
			case "sqroot":
				return 6;
				break;
			case "sin":
				return 7;
				break;
			case "cos":
				return 8;
				break;
			case "tan":
				return 9;
				break;
			case "cot":
				return 10;
				break;
		}
	}
	show();
	$answer = calc();
?>
	
<tr>
	<td>Результат:</td>
	<td><div align="center">	
		<?
			if ( (is_numeric($_POST['first'])) && (is_numeric($_POST['second'])) ){
				switch($answer){
					case -1: echo "Choose operation"; break;
					case 0: echo $_POST['first'] + $_POST['second']; break;
					case 1: echo $_POST['first'] - $_POST['second']; break;
					case 2: echo $_POST['first'] * $_POST['second']; break;
					case 3: 
						if(!$_POST['second']) {
							echo "Infinity";
							break;
						}
						else{
							echo $_POST['first'] / $_POST['second']; 
							break;
						}
					case 4: echo pow($_POST['first'], $_POST['second']); break;
					case 5: echo round($_POST['second']/($_POST['first']/100), 4)."%"; break;
					case 6: echo round(sqrt($_POST['first']), 4); break;
					case 7: 
						$rad = deg2rad($POST_['first']);
						echo round(sin(deg2rad($POST_['first'])), 6); break;
					case 8: 
						$rad = deg2rad($POST_['first']);
						echo round(cos($rad), 6); break;
					case 9: 
						$rad = deg2rad($POST_['first']);
						echo round(tan($rad), 6); break;
					case 10: 
						$rad = deg2rad($POST_['first']);
						echo 1/round(tan($rad), 6); break;
				}
			}
			elseif ( empty($_POST['first']) && empty($_POST['second']) ) {
				echo "";	
			}
			else{
				echo "Wrong format.";	
			}
		?>
	</div>
	</td>
</tr>
</table>
</form>








													  