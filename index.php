<?php
	include 'class/connection.php';
	$connection_obj=new connection();
	$connection_query=$connection_obj->fn_connection_index();
	$result_wal_popular=$connection_query[0];
	$result_vid_popular=$connection_query[1];
	$result_mus_popular=$connection_query[2];
	$result_anim_popular=$connection_query[3];
	$result_game_popular=$connection_query[4];
	$result_ring_popular=$connection_query[5];
	$result_wal_recent=$connection_query[6];
	$result_vid_recent=$connection_query[7];
	$result_mus_recent=$connection_query[8];
	$result_anim_recent=$connection_query[9];
	$result_game_recent=$connection_query[10];
	$result_ring_recent=$connection_query[11];
?>

<html>

	<body>
		<?php include 'header/header.php';?>
		<div id="desktop">
			<div class="bar_div">
				<p class="bar_paragraph">&nbsp;&nbsp;Most Popular<a href="topdownload.php" class="bar_more">More...</a></p>
			</div><br>
			<table border="0" width="100%">
				<tbody>
				   <tr>
						<?php 
							if ($result_vid_popular->num_rows > 0) {
								while($row = $result_vid_popular->fetch_assoc()) {
									?>
										<td width="50%" align="left">					
											<div>
												<div>
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img  id="imagev" src="<?php echo $row['preview_link'];?>" class="index_img" > </a>
												</div>	
												<div style=" background-color:#C0540A;">
													<p class="index_name">&nbsp;&nbsp;videos<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>			
												
											</div>
										</td>
									<?php
								}
							}
						?>
						<?php 
							if ($result_wal_popular->num_rows > 0) {
								while($row = $result_wal_popular->fetch_assoc()) {
									?>
										<td width="50%" align="right">
											<div>
												<div>
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagew" src="<?php echo $row['preview_link'];?>" class="index_img"> </a>		
												</div>
												<div style=" background-color:#C0540A;">
													<p class="index_name" >&nbsp;&nbsp;Wallpaper<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>
																			
											</div>		
										</td>
									<?php
								}
							}
						?>	
				   </tr>								  
				</tbody>
			 </table><br>
			 <table border="0" width="100%">
				<tbody>
				   <tr>
						<?php 
							if ($result_anim_popular->num_rows > 0) {
								while($row = $result_anim_popular->fetch_assoc()) {
									?>
										<td width="50%" align="left">					
											<div i>
												<div id="image">
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagea"  src="<?php echo $row['preview_link'];?>" class="index_img" > </a>
												</div>	
												<div style=" background-color:#C0540A;">
													<p class="index_name">&nbsp;&nbsp;Animation<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>			
												
											</div>
										</td>
									<?php
								}
							}
						?>
						<?php 
							if ($result_game_popular->num_rows > 0) {
								while($row = $result_game_popular->fetch_assoc()) {
									?>
										<td width="50%" align="right">
											<div>
												<div id="image">
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imageg" src="<?php echo $row['preview_link'];?>" class="index_img"> </a>		
												</div>
												<div style=" background-color:#C0540A;">
													<p class="index_name" >&nbsp;&nbsp;Games& Apps<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>
																			
											</div>		
										</td>
									<?php
								}
							}
						?>										
				   </tr>								  
				</tbody>
			 </table><br>
			 <table border="0" width="100%">
				<tbody>
				   <tr>
						<?php 
							if ($result_mus_popular->num_rows > 0) {
								while($row = $result_mus_popular->fetch_assoc()) {
									?>
										<td width="50%" align="left">					
											<div>
												<div>
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagem" src="<?php echo $row['preview_link'];?>" class="index_img" > </a>
												</div>	
												<div style=" background-color:#C0540A;">
													<p class="index_name">&nbsp;&nbsp;Music<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>			
												
											</div>
										</td>
									<?php
								}
							}
						?>
						<?php 
							if ($result_ring_popular->num_rows > 0) {
								while($row = $result_ring_popular->fetch_assoc()) {
									?>						
										<td width="50%" align="right">
											<div>
												<div id="image">
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imager" src="<?php echo $row['preview_link'];?>" class="index_img"> </a>		
												</div>
												<div style=" background-color:#C0540A;">
													<p class="index_name" >&nbsp;&nbsp;Ringtone<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>
																			
											</div>		
										</td>	
									<?php
								}
							}
						?>	
				   </tr>								  
				</tbody>
			 </table><br>
			 <div class="bar_div">
				<p class="bar_paragraph">&nbsp;&nbsp;Recently Added<a href="recentlyadded.php" class="bar_more">More...</a></p>
			</div><br>
			<table border="0" width="100%">
				<tbody>
				   <tr>
						<?php 
							if ($result_vid_recent->num_rows > 0) {
								while($row = $result_vid_recent->fetch_assoc()) {
									?>
										<td width="50%" align="left">					
											<div>
												<div>
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagev2" src="<?php echo $row['preview_link'];?>" class="index_img" > </a>
												</div>	
												<div style=" background-color:#C0540A;">
													<p class="index_name">&nbsp;&nbsp;videos<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>			
												
											</div>
										</td>
									<?php
								}
							}
						?>	
						<?php 
							if ($result_wal_recent->num_rows > 0) {
								while($row = $result_wal_recent->fetch_assoc()) {
									?>
										<td width="50%" align="right">
											<div>
												<div>
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagew2" src="<?php echo $row['preview_link'];?>" class="index_img"> </a>		
												</div>
												<div style=" background-color:#C0540A;">
													<p class="index_name" >&nbsp;&nbsp;Wallpaper<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>
																			
											</div>		
										</td>
									<?php
								}
							}
						?>	
				   </tr>								  
				</tbody>
			 </table><br>
			 <table border="0" width="100%">
				<tbody>
				   <tr>
						<?php 
							if ($result_anim_recent->num_rows > 0) {
								while($row = $result_anim_recent->fetch_assoc()) {
									?>
										<td width="50%" align="left">					
											<div>
												<div id="image">
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagea2"  src="<?php echo $row['preview_link'];?>" class="index_img" > </a>
												</div>	
												<div style=" background-color:#C0540A;">
													<p class="index_name">&nbsp;&nbsp;Animation<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>			
												
											</div>
										</td>
									<?php
								}
							}
						?>
						<?php 
							if ($result_game_recent->num_rows > 0) {
								while($row = $result_game_recent->fetch_assoc()) {
									?>						
										<td width="50%" align="right">
											<div>
												<div id="image">
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imageg2" src="<?php echo $row['preview_link'];?>" class="index_img"> </a>		
												</div>
												<div style=" background-color:#C0540A;">
													<p class="index_name" >&nbsp;&nbsp;Games& Apps<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>
																			
											</div>		
										</td>	
									<?php
								}
							}
						?>		
				   </tr>								  
				</tbody>
			 </table><br>
			 <table border="0" width="100%">
				<tbody>
				   <tr>
						<?php 
							if ($result_mus_recent->num_rows > 0) {
								while($row = $result_mus_recent->fetch_assoc()) {
									?>	
										<td width="50%" align="left">					
											<div>
												<div>
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imagem2" src="<?php echo $row['preview_link'];?>" class="index_img" > </a>
												</div>	
												<div style=" background-color:#C0540A;">
													<p class="index_name">&nbsp;&nbsp;Music<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>			
												
											</div>
										</td>
									<?php
								}
							}
						?>	
						<?php 
							if ($result_ring_recent->num_rows > 0) {
								while($row = $result_ring_recent->fetch_assoc()) {
									?>	
										<td width="50%" align="right">
											<div>
												<div id="image">
													<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>"> <img id="imager2" src="<?php echo $row['preview_link'];?>" class="index_img"> </a>		
												</div>
												<div style=" background-color:#C0540A;">
													<p class="index_name" >&nbsp;&nbsp;Ringtone<a href="bl_confirmation.php?content_id=<?php echo $row['content_id'];?>" class="index_download">Download</a></p>
												</div>
																			
											</div>		
										</td>	
									<?php
								}
							}
						?>			
				   </tr>								  
				</tbody>
			 </table><br>
			 <div class="bar_div">
				<p class="bar_paragraph">&nbsp;&nbsp;All category</p>
			</div><br>
			<table border="0" width="100%">
				<tbody>
				   <tr>
						<td width="50%" align="left">					
							<div>
								<div>
									<a href="video.php"> <img id="imagev3" src="img/video.jpg" class="index_img" > </a>
								</div>	
								<div style=" background-color:#C0540A;">
									<p class="index_name">&nbsp;&nbsp;videos<a href="video.php" class="index_download">Download</a></p>
								</div>			
								
							</div>
						</td>
						<td width="50%" align="right">
							<div>
								<div>
									<a href="wallpaper.php"> <img id="imagew3" src="img/wallpaper.jpg" class="index_img"> </a>		
								</div>
								<div style=" background-color:#C0540A;">
									<p class="index_name" >&nbsp;&nbsp;Wallpaper<a href="wallpaper.php" class="index_download">Download</a></p>
								</div>
															
							</div>		
						</td>								
				   </tr>								  
				</tbody>
			 </table><br>
			 <table border="0" width="100%">
				<tbody>
				   <tr>
						<td width="50%" align="left">					
							<div>
								<div id="image">
									<a href="animation.php"> <img id="imagea3"  src="img/animation.gif" class="index_img" > </a>
								</div>	
								<div style=" background-color:#C0540A;">
									<p class="index_name">&nbsp;&nbsp;Animation<a href="" class="index_download">Download</a></p>
								</div>			
								
							</div>
						</td>
						<td width="50%" align="right">
							<div>
								<div id="image">
									<a href="game&app.php"> <img id="imageg3" src="img/game.JPG" class="index_img"> </a>		
								</div>
								<div style=" background-color:#C0540A;">
									<p class="index_name" >&nbsp;&nbsp;Games& Apps<a href="game&app.php" class="index_download">Download</a></p>
								</div>
															
							</div>		
						</td>								
				   </tr>								  
				</tbody>
			 </table><br>
			 <table border="0" width="100%">
				<tbody>
				   <tr>
						<td width="50%" align="left">					
							<div>
								<div>
									<a href="music.php"> <img id="imagem3" src="img/music.JPG" class="index_img" > </a>
								</div>	
								<div style=" background-color:#C0540A;">
									<p class="index_name">&nbsp;&nbsp;Music<a href="music.php" class="index_download">Download</a></p>
								</div>			
								
							</div>
						</td>
						<td width="50%" align="right">
							<div>
								<div id="image">
									<a href="ringtone.php"> <img id="imager3" src="img/ringtone.jpg" class="index_img"> </a>		
								</div>
								<div style=" background-color:#C0540A;">
									<p class="index_name" >&nbsp;&nbsp;Ringtone<a href="ringtone.php" class="index_download">Download</a></p>
								</div>
															
							</div>		
						</td>								
				   </tr>								  
				</tbody>
			 </table><br>
			 <?php include 'footer.php'?>
		</div>
	</body>
</html>
<script type="text/javascript" src="//wurfl.io/wurfl.js"></script>
	<script type="text/javascript">
		var platform = WURFL.form_factor;
		var device = WURFL.complete_device_name;
		if(platform=="Smartphone"){
			 document.getElementById("imagev").style.height = "150";
			 document.getElementById("imagew").style.height = "150";
			 document.getElementById("imagea").style.height = "150";
			 document.getElementById("imageg").style.height = "150";
			 document.getElementById("imagem").style.height = "150";
			 document.getElementById("imager").style.height = "150";
			 document.getElementById("imagev2").style.height = "150";
			 document.getElementById("imagew2").style.height = "150";
			 document.getElementById("imagea2").style.height = "150";
			 document.getElementById("imageg2").style.height = "150";
			 document.getElementById("imagem2").style.height = "150";
			 document.getElementById("imager2").style.height = "150";
			 document.getElementById("imagev3").style.height = "150";
			 document.getElementById("imagew3").style.height = "150";
			 document.getElementById("imagea3").style.height = "150";
			 document.getElementById("imageg3").style.height = "150";
			 document.getElementById("imagem3").style.height = "150";
			 document.getElementById("imager3").style.height = "150";		 
		}
	</script>

	<script>
		$(document).ready(function () {

			var value = 0;
			$("#cssmenu").hide();

			$(".searchicone").click(function () {
					$("#cssmenu").hide();
					$(".input-group").toggle();

			});
			$(".headerimg").click(function () {
				$(".input-group").hide();
					$("#cssmenu").animate({
						width: "toggle"
					});
				});
		});
	</script>