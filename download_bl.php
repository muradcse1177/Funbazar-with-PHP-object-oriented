<?php include 'header/header.php';?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Value Added Services</title>
	<link rel="icon" type="image/ico" href="images/favicon.ico">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="http://wap.chl-bd.com/main_css4.css" rel="stylesheet" type="text/css" media="screen">
	
	<style>
		ul.pagination {
			display: inline-block;
		}

		div.center {text-align: center;}
	</style>
</head>

<body>		

 <!--Menu buttons-->
<table class="index_table" border="1" width="100%" style="background-color: #C0540A">
	<tbody>
	   <tr>
			<td width="33%" height="30" align="center" >
				
					<a href="./index" class="myButton-group-justified">Home</a>
				
			</td>
			<td width="33%" height="30" align="center" >
				
					<a href="./TopDownloads" class="myButton-group-justified">Top Downloads</a>
				
			</td>
			<td width="33%" height="30" align="center">
				
					<a href="./RecentlyAdded" class="myButton-group-justified">Recently added</a>
				
			</td>			
	   </tr>   
	  
	</tbody>
 </table> 
<br/>

<table width="100%">
	<tbody>
	   <tr>
			<td  align="center">
				<p></p>	
				<p style="color:red;"></p>
				<br/>
				<?php
					
					if (isset($_GET['content_id'])){
						$content_id = $_GET['content_id'];
						//echo $content_id;
						//die();
						$sql="select preview_link,name from contents where content_id ='$content_id' and portal='funhouse'";
						$result = mysqli_query($conn,$sql);
						if ($result->num_rows > 0) {
							while($row = $result->fetch_assoc()) {
						?>
							<a href="#"><img src="<?php echo $row['preview_link'];?>" width="200" height="200"></a><br/><br/>
						<form action="index.php" method="GET" >		
							<input name="msisdn"  type="hidden"  value=""> 
							<input name="contentid"  type="hidden"  value="<?php echo $content_id; ?> ">
							<input name="category"  type="hidden"  value="">
							<input name="success"  type="submit"  class="myButton" role="button" value="Download">
						</form>							
						<?php
							}
						}
					}
				?>
							
				<p></p>
				
				<!--download button	-->

				<br/><br/>
			</td>		
	   </tr>	  
	</tbody>
 </table>	



 
<br/><br/><br/><br/>
<!-- footer -->

<br/><br/>
<?php include'footer.php';?>
</body>
</html>