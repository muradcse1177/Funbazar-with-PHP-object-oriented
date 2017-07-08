<!DOCTYPE html>
<html lang="en">
<div id="play" class="col-sm-12">
 <h4 style="color:black; text-align:center; padding-top:3px;">Natok</a></h4>
</div><br>
<style type="text/css">
	  .owl-carousel {
	  position: relative;
	  }
	  .owl-prev,
	  .owl-next {
	  position: absolute;
	  top: 35%;
	  margin-top: 0px;
	  }
	  .owl-prev {
	  left: 0;
	  }
	  .owl-next {
	  right: 0;
	  }
</style>
<body>
	<div id="demo">
		<div id="owl-demo111" class="owl-carousel">
		<?php
			//session_start();   
			include("connection.php");
			if(!isset($_GET['content'])){
				header("Location: index.php");
			}
			else if(isset($_GET['content'])){ 
			$content=$_GET['content'];
			$sql = "SELECT * FROM contents where category='natok' and (category like '%$content%' or subcategory like'%$content%' or name like'%$content%')";
			$result = mysqli_query($connection,$sql);
			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
				?>	
				<ul class="img-list">
					<li>
						<a href="preview.php?id=<?php echo $row['content_id'];?>&name=<?php echo $row['name'];?>&duration=<?php echo $row['duration'];?>&category=<?php echo $row['category'];?>&subcategory=<?php echo $row['subcategory'];?>">
							<div class="item">
								<img class="lazyOwl" data-src="<?php echo $row['preview_link'];?>" />
								<span class="text-content"><span ><?php echo substr($row['name'],0,15)."...";?></span></span>
							</div>
						</a>
					</li>
				</ul>
			<?php
				}
			}
			else{
				echo"<h4>No Such Natok are Found!!!</h4>";
			}
			}
			?>
		</div>
	</div>
	<script src="js/owl.carousel.js"></script>
	<style>
	    #owl-demo111 .item{
        margin: 2px;

    }
    #owl-demo111 .item img{
        display: block;
        width: 100%;
        height: auto;
    }
	</style>
	<script>
		$(document).ready(function() {

			if ($(window).width() > 100 && $(window).width() < 500) {
				// for Tab
				if ($("#owl-demo111 div").length + 1 > 1) {
					$("#owl-demo111").owlCarousel({
						navigation: true,
						autoPlay: true,
						lazyLoad: true,
						items: 5,
						itemsDesktop: [1199, 3],
						itemsDesktopSmall: [979, 3],
						itemsTablet: [600, 3],
						itemsMobile: [400, 2]
					});
				}
			} else

				$("#owl-demo111").owlCarousel({
					navigation: true,
					autoPlay: true,
					lazyLoad: true,
					items: 5,
					itemsDesktop: [1199, 3],
					itemsDesktopSmall: [979, 3],
					itemsTablet: [600, 3],
					itemsMobile: [400, 2]
				});

		});
	</script>
	
	<div id="play" class="col-sm-12">
	 <h4 style="color:black; text-align:center; padding-top:3px;">Movie</a></h4>
	</div><br>
	<style type="text/css">
	  .owl-carousel {
	  position: relative;
	  }
	  .owl-prev,
	  .owl-next {
	  position: absolute;
	  top: 35%;
	  margin-top: 0px;
	  }
	  .owl-prev {
	  left: 0;
	  }
	  .owl-next {
	  right: 0;
	  }
</style>
<body>
	<div id="demo">
		<div id="owl-demo114" class="owl-carousel">
		<?php
			//session_start();   
			include("connection.php");
			if(isset($_GET['content'])){ 
			$content=$_GET['content'];
			$sql = "SELECT * FROM contents where category='movie' and (category like '%$content%' or subcategory like'%$content%' or name like'%$content%')";
			$result = mysqli_query($connection,$sql);
			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
				?>	
				<ul class="img-list">
					<li>
						<a href="preview.php?id=<?php echo $row['content_id'];?>&name=<?php echo $row['name'];?>&duration=<?php echo $row['duration'];?>&category=<?php echo $row['category'];?>&subcategory=<?php echo $row['subcategory'];?>">
							<div class="item">
								<img class="lazyOwl" data-src="<?php echo $row['preview_link'];?>" />
								<span class="text-content"><span ><?php echo substr($row['name'],0,15)."...";?></span></span>
							</div>
						</a>
					</li>
				</ul>
			<?php
				}
			}
			else{
				echo"<h4>No Such Movie are Found!!!</h4>";
			}
			}
			?>
		</div>
	</div>
	<script src="js/owl.carousel.js"></script>
	<style>
	    #owl-demo114 .item{
        margin: 2px;

    }
    #owl-demo114 .item img{
        display: block;
        width: 100%;
        height: auto;
    }
	</style>
	<script>
		$(document).ready(function() {

			if ($(window).width() > 100 && $(window).width() < 500) {
				// for Tab
				if ($("#owl-demo114 div").length + 1 > 1) {
					$("#owl-demo114").owlCarousel({
						navigation: true,
						autoPlay: true,
						lazyLoad: true,
						items: 5,
						itemsDesktop: [1199, 3],
						itemsDesktopSmall: [979, 3],
						itemsTablet: [600, 3],
						itemsMobile: [400, 2]
					});
				}
			} else

				$("#owl-demo114").owlCarousel({
					navigation: true,
					autoPlay: true,
					lazyLoad: true,
					items: 5,
					itemsDesktop: [1199, 3],
					itemsDesktopSmall: [979, 3],
					itemsTablet: [600, 3],
					itemsMobile: [400, 2]
				});

		});
	</script>
	
	<div id="play" class="col-sm-12">
	 <h4 style="color:black; text-align:center; padding-top:3px;">Video Song </a></h4>
	</div><br>
	<style type="text/css">
	  .owl-carousel {
	  position: relative;
	  }
	  .owl-prev,
	  .owl-next {
	  position: absolute;
	  top: 35%;
	  margin-top: 0px;
	  }
	  .owl-prev {
	  left: 0;
	  }
	  .owl-next {
	  right: 0;
	  }
</style>
<body>
	<div id="demo">
		<div id="owl-demo118" class="owl-carousel">
		<?php
			//session_start();   
			include("connection.php");
			if(isset($_GET['content'])){ 
			$content=$_GET['content'];
			$sql = "SELECT * FROM contents where category='music_video' and (category like '%$content%' or subcategory like'%$content%' or name like'%$content%')";
			$result = mysqli_query($connection,$sql);
			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
				?>	
				<ul class="img-list">
					<li>
						<a href="preview.php?id=<?php echo $row['content_id'];?>&name=<?php echo $row['name'];?>&duration=<?php echo $row['duration'];?>&category=<?php echo $row['category'];?>&subcategory=<?php echo $row['subcategory'];?>">
							<div class="item">
								<img class="lazyOwl" data-src="<?php echo $row['preview_link'];?>" />
								<span class="text-content"><span ><?php echo substr($row['name'],0,15)."...";?></span></span>
							</div>
						</a>
					</li>
				</ul>
			<?php
				}
			}
			else{
				echo"<h4>No Such Video Song are Found!!!</h4>";
			}
			}
			?>
		</div>
	</div>
	<script src="js/owl.carousel.js"></script>
	<style>
	    #owl-demo118 .item{
        margin: 2px;

    }
    #owl-demo118 .item img{
        display: block;
        width: 100%;
        height: auto;
    }
	</style>
	<script>
		$(document).ready(function() {

			if ($(window).width() > 100 && $(window).width() < 500) {
				// for Tab
				if ($("#owl-demo118 div").length + 1 > 1) {
					$("#owl-demo118").owlCarousel({
						navigation: true,
						autoPlay: true,
						lazyLoad: true,
						items: 5,
						itemsDesktop: [1199, 3],
						itemsDesktopSmall: [979, 3],
						itemsTablet: [600, 3],
						itemsMobile: [400, 2]
					});
				}
			} else

				$("#owl-demo118").owlCarousel({
					navigation: true,
					autoPlay: true,
					lazyLoad: true,
					items: 5,
					itemsDesktop: [1199, 3],
					itemsDesktopSmall: [979, 3],
					itemsTablet: [600, 3],
					itemsMobile: [400, 2]
				});

		});
	</script>
	
	<div id="play" class="col-sm-12">
	 <h4 style="color:black; text-align:center; padding-top:3px;">Movie Song</a></h4>
	</div><br>
	<style type="text/css">
	  .owl-carousel {
	  position: relative;
	  }
	  .owl-prev,
	  .owl-next {
	  position: absolute;
	  top: 35%;
	  margin-top: 0px;
	  }
	  .owl-prev {
	  left: 0;
	  }
	  .owl-next {
	  right: 0;
	  }
</style>
<body>
	<div id="demo">
		<div id="owl-demo115" class="owl-carousel">
		<?php
			//session_start();   
			include("connection.php");
			if(isset($_GET['content'])){ 
			$content=$_GET['content'];
			$sql = "SELECT * FROM contents where category='movie_song' and (category like '%$content%' or subcategory like'%$content%' or name like'%$content%')";
			$result = mysqli_query($connection,$sql);
			if ($result->num_rows > 0) {
				while($row = $result->fetch_assoc()) {
				?>	
				<ul class="img-list">
					<li>
						<a href="preview.php?id=<?php echo $row['content_id'];?>&name=<?php echo $row['name'];?>&duration=<?php echo $row['duration'];?>&category=<?php echo $row['category'];?>&subcategory=<?php echo $row['subcategory'];?>">
							<div class="item">
								<img class="lazyOwl" data-src="<?php echo $row['preview_link'];?>" />
								<span class="text-content"><span ><?php echo substr($row['name'],0,15)."...";?></span></span>
							</div>
						</a>
					</li>
				</ul>
			<?php
				}
			}
			else{
				echo"<h4>No Such Movie Song are Found!!!</h4>";
			}
			}
			?>
		</div>
	</div>
	<script src="js/owl.carousel.js"></script>
	<style>
	    #owl-demo115 .item{
        margin: 2px;

    }
    #owl-demo115 .item img{
        display: block;
        width: 100%;
        height: auto;
    }
	</style>
	<script>
		$(document).ready(function() {

			if ($(window).width() > 100 && $(window).width() < 500) {
				// for Tab
				if ($("#owl-demo115 div").length + 1 > 1) {
					$("#owl-demo115").owlCarousel({
						navigation: true,
						autoPlay: true,
						lazyLoad: true,
						items: 5,
						itemsDesktop: [1199, 3],
						itemsDesktopSmall: [979, 3],
						itemsTablet: [600, 3],
						itemsMobile: [400, 2]
					});
				}
			} else

				$("#owl-demo115").owlCarousel({
					navigation: true,
					autoPlay: true,
					lazyLoad: true,
					items: 5,
					itemsDesktop: [1199, 3],
					itemsDesktopSmall: [979, 3],
					itemsTablet: [600, 3],
					itemsMobile: [400, 2]
				});

		});
	</script>
</body>
</html>

