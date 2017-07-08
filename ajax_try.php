<!DOCTYPE html>
<html>
<head>
<script>
function showUser(str) {
  if (str=="") {
    document.getElementById("txtHint").innerHTML="";
    return;
  } 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("txtHint").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","ajax_try.php?q="+str,true);
  xmlhttp.send();
}
</script>
</head>
<body>

<form>
	<select name="users" onchange="showUser(this.value)">
		<option value="">Select a category:</option>
		<option value="Wallpaper">Wallpaper</option>
		<option value="Animation">Animation</option>
		<option value="Video">Video</option>
	</select>
</form>
<br>
<div id="txtHint"><b>Person info will be listed here.</b></div>

</body>
</html>


<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
if(isset($_GET['q'])){
	$q =$_GET['q'];
	$con = mysqli_connect('localhost','root','','content');
	mysqli_select_db($con,"ajax_demo");
	$sql="SELECT * FROM contents WHERE category = '$q'";
	$result = mysqli_query($con,$sql);
	?>
	<table>
	<tr>
	<th>Images</th>
	</tr>
	<?php
	while($row = mysqli_fetch_array($result)) {?>
		<tr>
		<td align="center" height="200" width="250"><img  src="<?php echo $row['preview_link'];?>" /> </td>
		</tr>
		<?php
	}?>
	</table>
	<?php
	mysqli_close($con);
	}

?>
</body>
</html>