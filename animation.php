<?php
	include 'class/connection.php';
	$connection_obj=new connection();
	$connection_query=$connection_obj->fn_connection_animation();
	$preview_link=$connection_query[0];
	$name=$connection_query[1];	

?>
<html>
	<body>
		<div id="desktop">
			<?php include 'header/header.php';?>
			<div class="bar_div">
				<p class="bar_paragraph">&nbsp;&nbsp;Animation<a href="" class="bar_more"></a></p>
			</div><br>
			<script type="text/javascript" src="//wurfl.io/wurfl.js"></script>
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