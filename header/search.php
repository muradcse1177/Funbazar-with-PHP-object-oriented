<?php
if(isset($_GET['content'])){
	$search=$_GET['content'];
	
}
?>

<!DOCTYPE html>
<html>
<style>
#search-box {
position: relative;
width: 100%;
}

#search-form 
{
height: 30px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border-radius: 5px;
background-color: #fff;
overflow: hidden;
}

#search-text 
{
font-size: 14px;
color: #ddd;
border-width: 0;
background: transparent;

}

#search-box input[type="text"]
{
width: 90%;
padding: 8px ;
color: #333;
outline: none;
}

#search-button {
position: absolute;
top: 0;
right: 0;
height: 30px;
width: 80px;
font-size: 14px;
color: #fff;
text-align: center;
border-width: 0;
background-color:#C0540A;
-webkit-border-radius: 0px 5px 5px 0px;
-moz-border-radius: 0px 5px 5px 0px;
border-radius: 0px 5px 5px 0px;
cursor: pointer;
}
</style>
<body>
<div id='search-box'>
<form action='search_item.php' id='search-form' method='get' target='_top'>
<input id='search-text' name='content' placeholder='Search' value="<?php if(isset($_GET['content'])) echo $search;?>" type='text'/>
<button id='search-button' type='submit'>                     
<span><img src="search.png" alt="Smiley face" height="20" width="20"></span>
</button>
</form>
</div>
</body>
</html>
<script type="text/javascript" src="//wurfl.io/wurfl.js"></script>
<script type="text/javascript">
	var platform = WURFL.form_factor;
	var device = WURFL.complete_device_name;
	if(platform=="Smartphone"){
		 document.getElementById("search-box").style.width = "auto";
		 document.getElementById("search-box").style.marginLeft = '0';		
	}		
</script>