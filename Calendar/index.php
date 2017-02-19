<html>
<head>

<title>Calender</title>
</head>
<body>
	<table>
<? 
	$weeks = $monthdays/7; 
	$weeks = round($weeks, 0);
	$dayofmonth = date("j"); 
	$dayofmonthlz = date("d"); 
	$monthlz = date("n"); 
	$year = date("Y");
	$daysarray = array("", "MO", "TU", "WE", "TH", "FR", "SA", "SU");
	$month = array("1" => "January",
				   "2" => "Febraury",
				   "3" => "March", 
				   "4" => "April",
				   "5" => "May",
				   "6" => "June",
				   "7" => "July",
				   "8" => "August",
				   "9" => "September",
				   "10"=> "October",
				   "11"=> "November",
				   "12"=> "December");
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$monthcounter = 1;
	for ($i = 0; $i < 3; $i++){
		echo "<tr>";
		for ($j = 0; $j < 4; $j++){
			echo "<td border=>";
			echo "<font	color=red><b>".$month[$monthcounter]."(".$year.")</b></font>"; 
			echo "<table width=\"200\" border=\"0\"	cellspacing=\"1\" ceUpadding=\"5\">\n\t<tr>\n"; 
			for ($k = 1; $k <= 7; $k++) { 
				if($k > 5){
					echo "\t\t<td><font color=\"#E4723A\">".$daysarray[$k]."</font></td>\n";
				}else {
					echo "\t\t<td>".$daysarray[$k]."</td>\n";
				}
			}
			echo "\t</tr>\n\t<tr>\n";
			$n = 1;
			
			$numberfirstday = date("w", mktime(0, 0, 0, $monthcounter, 1, date("Y"))); 
			while ($n < $numberfirstday) {
				echo "\t\t<td>&nbsp;</td>\n";
				$n++;
			}
			$monthdays = date("t", $monthcounter);
			for ($k = 1; $k <= $monthdays; $k++) { 
				if (($k == $dayofmonth) && ($monthcounter == $monthlz)){ 
					echo "\t\t<td bgcolor=\"#FF8040\"align=\"center\"><b>".$k."</b></td>\n";
					}else {
						echo "\t\t<td align=\"center\">".$k."</td>\n";
					}
					if (round($n/7)-$n/7 == 0){
						echo "\t</tr>\n\t<tr>\n";
					}
				$n++;
			}
			echo "\t</tr>\n</table>\n";
			echo "</td>";
			$monthcounter++;
		}
		echo "</tr>";
	}
?>
	</table>
</body>
</html>