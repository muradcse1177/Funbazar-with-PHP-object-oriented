<?php
	include 'class/connection.php';
	$connection_obj=new connection();
	$connection_query=$connection_obj->fn_connection_recentlyadded();
	$preview_link=$connection_query[0];
	$name=$connection_query[1];

?>

<html>
	<body>
		<?php include 'header/header.php';?>
		<div style="background-color:#C0540A; padding:0px;">
			<p style="color:white;text-align:center; padding-top:10px; font-size:18px">&nbsp;&nbsp;Please select a item. <a href="" style="color:white;float:right;"></a></p>
		</div><br>
		<form action="" method="GET" enctype="multipart/form-data" class="form-horizontal">  
			<table class="index_table" border="0" width="100%">
				<tbody>
					<tr>
						<td width="50%" align="right">
							
								<select  name="category" tabindex="1" required ="">
									<option value="">Select category</option>
									<option value="Wallpaper">Wallpaper </option>
									<option value="Animation">Animation </option>
									<option value="Video">Video </option>
									<option value="games">Games & Apps </option>
									<option value="Music">Music </option>
									<option value="Ringtone">Ringtone </option>
								</select>					
						</td>
						
						<td width="50%" align=" left">			
								&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" class="myButton" value="View" name="view">
						</td>
					</tr>
				</tbody>
			</table>
		</form>
		<table border="0" width="100%">
				<tbody>
					<?php
						for($i=0;$i<=3;$i++){
					?>		
						<tr>
							<?php
								for($j=0;$j<=1;$j++){
							?>
								<td width="33%" align="left">					
									<div>
										<div>
											<a href=""> <img id="<?php echo "imagewall".$i?>" src="<?php echo $preview_link[$i];?>" class="index_img" > </a>
										</div>	
										<div style=" background-color:#C0540A;">
											<p class="index_name">&nbsp;&nbsp;<?php echo $name[$i];?><a href="" class="index_download">Download</a></p>
										</div>&nbsp;&nbsp;			
										<script type="text/javascript">
											var platform = WURFL.form_factor;
											var device = WURFL.complete_device_name;
											if(platform=="Smartphone"){
												document.getElementById("<?php echo "imagewall".$i?>").style.height = "150";
											}
										</script>
									</div>
								</td>
							<?php
								$i++;
								}
							$i--;
							?>	
						</tr>	
						<?php   
						}
					?>		
				</tbody>
			</table><br>
			<div>
				<?php include 'footer.php'?>	
			</div>
		</div>
	</body>
</html>