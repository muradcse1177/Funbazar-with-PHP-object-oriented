<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head >
 <title>Confirmation | Content House</title> 
  <link rel="icon" type="image/ico" href="images/favicon.ico">
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1"> 
 <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
 
 <style type="text/css">
    body { background: orange !important; }
	.button {
		background-color: #09FE3A;
		border: none;
		color: white;
		padding: 15px 50px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 30px;
		margin: 4px 2px;
		cursor: pointer;
		
	}
	
	.button2{background-color: #788282; }
	
 </style>
</head>

<body bgcolor="#FFA500" style="margin-left:10px; margin-right:10px; font-size:20px">

<br/><br/><br/>
<p align="center" ></p> 
<br/>
<p align="center" >Do you want to activate WAP service at 2.44 Tk/day with 2 free contents download daily (autorenew)?</p>
<br/><br/>
<table class="index_table" border="0" width="100%">
  <tbody>
 <tr>
  <td colspan="3" align="center" > 
    <?php
		if (isset($_GET['content_id'])){
			$content_id = $_GET['content_id'];
			?>
				<a href="download_bl.php?content_id=<?php echo $content_id; ?>&confirmation=true"><button class="button">Yes</button></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="index.php"><button class="button button2">No</button></a>	
			<?php
		}
	?>           
		
  </td>       
 </tr>
  </tbody>
</table> 
    
</body>
</html>