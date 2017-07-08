

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Home | WAP</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">	 
	<link href="http://wap.chl-bd.com/main_css4.css" rel="stylesheet" type="text/css" media="screen">
	<style>
		ul.pagination {
			display: inline-block;
		}
		div.center {text-align: center;}
	</style>
<!--	<link rel="icon" type="image/ico" href="images/favicon.ico">
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  -->
</head>

<body oncontextmenu="return false">
<style>
#txtsearch{
	border-style: solid;
	border-color: #fe1a00;
	height:25px;
	color:black;
	border-radius: 5px 0px 0px 5px;
	padding-left: 5px;
}
#btnsearch{
	border-style: solid;
	border-color: #fe1a00;
	background-color:#fe1a00;
	color:white;
	height:30px;
	border-radius: 0px 5px 5px 0px;
}
.mySlides {display:none;}
</style>

<center> <img src="/images/banner.gif" width="100%" height="100%" > </center>	
<!--Banner image
	<a href="index" > <img src="images/6feb6fc2c1a0b247d0c8550f4b8c52.gif" width="100%" height="100%" > </a>
	<iframe id="slider" width="100%" frameborder="0" height="auto" src="http://wap.chl-bd.com/slider/slide.php"> </iframe>

<center>
<div style="width:100%; height:70%">
  <img class="mySlides" src="/slider/in.jpg" style="width:100%; height:70%">
  <img class="mySlides" src="/slider/in1.jpg" style="width:100%; height:70%">
  <img class="mySlides" src="/slider/in2.jpg" style="width:100%; height:70%">
</div>
</center>
-->

<!--Menu buttons-->
<p style="margin-top:-2px;"></p>

	<table class="index_table" border="1" width="100%" style="background-color: ">
		<tbody>
		   <tr>
				<td width="33%" height="30" align="center"  bgcolor="#fe1a00">
					<a href="./index" class="myButton-group-justified">Subscription Service</a>
				</td>				
				<td width="33%" height="30" align="center" bgcolor="">
					<a href="./ondemand" class="myButton-group-justified">Pay & Download</a>
				</td>		
									<td width="33%" height="30" align="center" bgcolor="">
						<a href="./gp_myaccount" class="myButton-group-justified">My Account</a>
					</td>	
						   </tr>   
		</tbody>
	 </table>
	 
<!--Marquee text
Subscription charge TK. 2.44/day(autorenew) with daily 2 FREE downloads and after daily 2 free download charge will be Tk 2.44 for every next downloads. For Pay & Download each content price is 2.44 Tk and no daily subscription fee. To Unsubscribe send STOP WP to 16437-->
<p style="margin-top:-2px;"></p>
<table width="100%" align="center" bgcolor="#fe1a00" background="#">
    <tr>
        <td width="100%" align="center" height=32>
            <a href="#">
                <font style="font-family:Amarante;font-size:22px;font-weight:lighter;color:#ffffff;">
                    <marquee>Enjoy 2 free download with daily 2.44 TK. Click Start Service to enjoy.</marquee>
                </font>
            </a>
        </td>
    </tr>
</table>
<!--
<center><button class="myButton" style="background-color:grey; width:50%; height:35px; border:1px solid black;" onMouseOver="this.style.color='#D9ED14'"  onMouseOut="this.style.color='white'" onclick="location.href='http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com';">START Service</button></center>
-->
<!--Search box and button-->
<table width="100%">
		<tbody>
	
			<tr>
				<td width="95%">
					<input id='txtsearch' style="width:100%;" name='txtsearch' placeholder='Search' type='text'/>
				</td>
				<td width="5%">
					<button id='btnsearch' style="width:100%;" type='submit' onclick="search_content();">Search</button>
				</td>
			</tr>
		</tbody>

	</table>
	<center>
		<img id="ajax-loader" src="/images/ajax-loading.gif" style="display:none;" />
    <center>
<br/>
<!--Search results-->
 <div id="search-result"> </div>
 
 <script>
document.getElementById("txtsearch")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("btnsearch").click();
    }
});
 </script>
<script>
// var myIndex = 0;
// carousel();

// function carousel() {
    // var i;
    // var x = document.getElementsByClassName("mySlides");
    // for (i = 0; i < x.length; i++) {
       // x[i].style.display = "none";  
    // }
    // myIndex++;
    // if (myIndex > x.length) {myIndex = 1}    
    // x[myIndex-1].style.display = "block";  
    // setTimeout(carousel, 2000); // Change image every 2 seconds
// }
</script><table class="special_links" width="100%">
	<tbody>
		<tr>
			<td class="titlebar" width="100%">			
				<a href="./TopDownloads.php">Most Popular</a>
			</td>
		</tr>
	</tbody>
</table> 

<p class="white_spacer_divider"></p><br/>
<table border="0" width="100%">
	<tbody>
	   <tr>
			<td width="50%" align="center">
				<p>Videos</p>		
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=VIDE-ebb57f2b28579d0585bb1272d88db6"> <img src="/demo/Video/Celebrity/ebb57f2b28579d0585bb1272d88db6.jpg" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=VIDE-ebb57f2b28579d0585bb1272d88db6" class="myButton">Download</a>	
				<br/><br/>
			</td>
			
			<td width="50%" align="center">
				<p>Wallpapers</p>
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=WALL-8054a7c0950ace05df9733ceea73a7"> <img src="/demo/Wallpaper/Celebrity/8054a7c0950ace05df9733ceea73a7.jpg" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=WALL-8054a7c0950ace05df9733ceea73a7" class="myButton">Download</a>											
				<br/><br/>
			</td>
			
					
	   </tr>
	   
	   <tr>
			<td width="50%" align="center">
				<p>Animations</p>	
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=ANIM-5e294ffefd86c11b893067920aa069"> <img src="/demo/Animation/Model/5e294ffefd86c11b893067920aa069.gif" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=ANIM-5e294ffefd86c11b893067920aa069" class="myButton">Download</a>	
				<br/><br/>
			</td>	
			<td width="50%" align="center">
				<p>Games & Apps</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=GAME-c64dde9b7df203ca9b13fb77952f82"> <img src="/demo/games/Puzzle/c64dde9b7df203ca9b13fb77952f82.gif" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=GAME-c64dde9b7df203ca9b13fb77952f82" class="myButton">Download</a>	
				<br/><br/>
			</td>
	  </tr>
	  <tr>
			<td width="50%" align="center">
				<p>Music</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=MUSI-288ea99dc90802037a233c27c55fe3"> <img src="/demo/Music/Bangla Music/288ea99dc90802037a233c27c55fe3.jpg" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=MUSI-288ea99dc90802037a233c27c55fe3" class="myButton">Download</a>	
				<br/>
			</td>
			<td width="50%" align="center">
				<p>Ringtones</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=RING-dc12607ca86408682f463ee95b4f17"> <img src="/demo/Ringtone/Remix/dc12607ca86408682f463ee95b4f17.png" width="170" height="170"> </a>		
				<br/>
					<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=RING-dc12607ca86408682f463ee95b4f17" class="myButton">Download</a>	
				<br/>				
			</td>
	  </tr>
		<tr>
			<td colspan="3" align="right"> 
				<a href="./TopDownloads">  More...»</a>
			</td>
		</tr>
	  
	</tbody>
 </table><br/>
<p class="white_spacer_divider"></p>

 <table class="special_links" width="100%">
	<tbody>
		<tr>
			<td class="titlebar">			
				<a href="./RecentlyAdded.php">Recently Added</a>
			</td>
		</tr>
	</tbody>
</table> 
<br/>
<p class="white_spacer_divider"></p>
<table border="0" width="100%">
	<tbody>
	   <tr>
			<td width="50%" align="center">
				<p>Wallpapers</p>					
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=WALL-80598125cdbd966223735c7d588f61"> <img src="/demo/Wallpaper/Ramadan/80598125cdbd966223735c7d588f61.gif" width="170" height="170"> </a>		
				<br/>
					<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=WALL-80598125cdbd966223735c7d588f61" class="myButton">Download</a>	
				<br/><br/>	
			</td>
			<td width="50%" align="center">
				<p>Animations</p>	
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=ANIM-a0ad670101a35efe7fee319f8199e8"> <img src="/demo/Animation/Flower/a0ad670101a35efe7fee319f8199e8.gif" width="170" height="170"> </a>		
				<br/>
					<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=ANIM-a0ad670101a35efe7fee319f8199e8" class="myButton">Download</a>	
				<br/><br/>
			</td>
					
	   </tr>
	   <tr>
			<td width="50%" align="center">
				<p>Videos</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=VIDE-f54652420250b76ff01e19d9c184bf"> <img src="/demo/Video/Romantic Video/f54652420250b76ff01e19d9c184bf.gif" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=VIDE-f54652420250b76ff01e19d9c184bf" class="myButton">Download</a>	
				<br/><br/>	
			</td>	
			<td width="50%" align="center">
				<p>Games & Apps</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=GAME-ef372b208f83537cc47e75c545ef38"> <img src="/demo/games/Runner/ef372b208f83537cc47e75c545ef38.gif" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=GAME-ef372b208f83537cc47e75c545ef38" class="myButton">Download</a>	
				<br/><br/>
			</td>
		</tr>
		<tr>
			<td width="50%" align="center">
				<p>Music</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=MUSI-6220b7b29d2253ac1fecf7d68b7f8a"> <img src="/demo/Music/Bangla Music/6220b7b29d2253ac1fecf7d68b7f8a.JPG" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=MUSI-6220b7b29d2253ac1fecf7d68b7f8a" class="myButton">Download</a>	
				<br/><br/>			
			</td>
			<td width="50%" align="center">
				<p>Ringtones</p>				
								<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=RING-dfe7bd6df9b1ed5d1432ff77802379"> <img src="/demo/Ringtone/Bangla Rington/dfe7bd6df9b1ed5d1432ff77802379.jpg" width="170" height="170"> </a>		
				<br/>
				<a href="http://192.168.5.82:8080/SmWapSite/subscribe/serviceid/104650?CpUrl=http://wap.chl-bd.com/index.php?ct=RING-dfe7bd6df9b1ed5d1432ff77802379" class="myButton">Download</a>	
				<br/><br/>			
			</td>							
	  </tr>
		<tr>
			<td colspan="3" align="right"> 
				<a href="RecentlyAdded">  More...»</a> 
			</td>
		</tr>
	  
	</tbody>
 </table>
<br/>
<p class="white_spacer_divider"></p> 

<table class="special_links" width="100%">
	<tbody>
		<tr>
			<td class="titlebar">			
				<a href="#">All Category</a>
			</td>
		</tr>
	</tbody>
</table> 
<br/>
<p class="white_spacer_divider"></p>
<table class="index_table" border="0" width="100%">
  <tbody>
   <tr>	
		<td width="50%" align="center"><a href="./wallpaper"><img src="./images/wallpaper-icon.jpg" alt="Wallpapers" width="170" height="170"><br>Wallpapers</a> <br/><br/></td>        
		<td width="50%" align="center"><a href="./animation"><img src="./images/animation-icon.gif" alt="Animations" width="170" height="170"><br>Animations</a><br/><br/></td>
   </tr>
   <tr>
		<td width="50%" align="center"><a href="./video"><img src="./images/videos-icon.jpg" alt="Videos" width="170" height="170"><br>Videos</a><br/><br/></td>	   
		<td width="50%" align="center"><a href="./games"><img src="./images/games-icon.jpg" alt="Games & Apps" width="170" height="170"><br>Games & Apps</a><br/><br/></td>        
    </tr>
	<tr>
		<td width="50%" align="center"><a href="./music"><img src="./images/music-icon.jpg" alt="Music" width="170" height="170"><br>Music</a><br/><br/></td>
		<td width="50%" align="center"><a href="./ringtone"><img src="./images/ringtone-icon.jpg" alt="Ringtones" width="170" height="170"><br>Ringtones</a><br/><br/></td>	
	</tr>
 </tbody>
 </table>
 

<!-- footer -->

<br/><br/>
<footer>
	
	<p align="center" style="font-size:17px; background-color:grey; font-weight:bold;"><a href="index" style="color:#de1a00;">Home</a> | <a href="faq" style="color:#de1a00;">FAQ</a> | <a href="tel:+8801787659321" style="color:#de1a00;">Helpline</a></p>
	
	
					<table class="index_table" border="0" width="100%">
				  <tbody>
					<tr>
						<td align="center" > 
							<button class="myButton" style="background-color:black; width:130px;" onMouseOver="this.style.color='#D9ED14'"  onMouseOut="this.style.color='white'" onclick="location.href='gp_unsub_confirm.php?back=/';">STOP Service</button>
							<button class="myButton" style="background-color:black; width:130px;" onMouseOver="this.style.color='#D9ED14'"  onMouseOut="this.style.color='white'" onclick="">My Account</button>
							
						</td>       
					</tr>
				  </tbody>
				</table>
			
					
	
	<p class="footerP"> <b>© Content House 2017 - All rights reserved.</b></p>
</footer>


<!--Detect visitor's device and save to visitor counter-->
<script type="text/javascript" src="//wurfl.io/wurfl.js"></script>
<script type="text/javascript">
function search_content() {
	document.getElementById('ajax-loader').style.display = 'block';
	var txt = document.getElementById("txtsearch").value;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById('ajax-loader').style.display = 'none';
			document.getElementById("search-result").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","ajax/search_content.php?page=/index.php&txt="+txt,true);
	xmlhttp.send();
}

if(WURFL.form_factor != "Smartphone"){
		
   document.getElementById("slider").style.height = "450px";  
 }
else if(WURFL.form_factor == "Smartphone"){
   document.getElementById("slider").style.height = "200px";  
 }

</script>	   
</body>
</html>

<script type="text/javascript">
	var device = WURFL.form_factor + " | " + WURFL.complete_device_name;
	// if(WURFL.form_factor != "Smartphone"){
		
	   // document.getElementById("slider").style.height = "450px";  
	 // }
	// else if(WURFL.form_factor == "Smartphone"){
	   // document.getElementById("slider").style.height = "200px";  
	 // }
	 
	 
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			;
			//document.getElementById("txtHint").innerHTML = this.responseText;
		}
	};
	xmlhttp.open("GET","ajax/savevisitorinfo.php?device="+device+"&msisdn=8801755680869&ip=182.160.118.50&page=/",true);
	xmlhttp.send();	
</script>
