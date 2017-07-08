
<!DOCTYPE html>
<html> 
<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" > 
    <title>Camera | a free jQuery slideshow by Pixedelic</title> 
    <meta name="description" content="Camera a free jQuery slideshow with many effects, transitions, adaptive layout, easy to customize, using canvas and mobile ready"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel='stylesheet' id='camera-css'  href='http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/css/camera.css' type='text/css' media='all'> 
    <style>
		body {
			margin: 0;
			padding: 0;
		}
		a {
			color: #09f;
		}
		a:hover {
			text-decoration: none;
		}
		#back_to_camera {
			clear: both;
			display: block;
			height: 80px;
			line-height: 0px;
			padding: 20px;
		}
		.fluid_container {
			margin: 0 auto;
			max-width: 1000px;
			width: 100%;
		}
	</style>

    <!--///////////////////////////////////////////////////////////////////////////////////////////////////
    //
    //		Scripts
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////////--> 
    
    <script type='text/javascript' src='http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/scripts/jquery.min.js'></script>
    <script type='text/javascript' src='http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/scripts/jquery.mobile.customized.min.js'></script>
    <script type='text/javascript' src='http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/scripts/jquery.easing.1.3.js'></script> 
    <script type='text/javascript' src='http://www.pixedelic.com/plugins/camera/development/camera_1.0.6/scripts/camera.js'></script> 
    
    <script>
		jQuery(function(){
			
			jQuery('#camera_wrap_1').camera({
				thumbnails: true
			});

			jQuery('#camera_wrap_2').camera({
				height: '400px',
				pagination: false,
				thumbnails: true
			});
		});
	</script>
 
</head>
<body>
    
	<div class="fluid_container">
    
        <div class="camera_wrap camera_azure_skin" id="camera_wrap_1">
            <div data-thumb="ab.jpg" data-src="ab.jpg">
                <div class="camera_caption fadeFromBottom">
                    Camera is a responsive/adaptive slideshow. <em>Try to resize the browser window</em>
                </div>
            </div>
            <div data-thumb="ab.jpg" data-src="ab.jpg">
                <div class="camera_caption fadeFromBottom">
                    It uses a light version of jQuery mobile, <em>navigate the slides by swiping with your fingers</em>
                </div>
            </div>
            <div data-thumb="ab.jpg" data-src="ab.jpg">
                <div class="camera_caption fadeFromBottom">
                    <em>It's completely free</em> (even if a donation is appreciated)
                </div>
            </div>
            <div data-thumb="ab.jpg" data-src="ab.jpg">
                <div class="camera_caption fadeFromBottom">
                    Camera slideshow provides many options <em>to customize your project</em> as more as possible
                </div>
            </div>
            <div data-thumb="ab.jpg" data-src="ab.jpg">
                <div class="camera_caption fadeFromBottom">
                    It supports captions, HTML elements and videos and <em>it's validated in HTML5</em> (<a href="http://validator.w3.org/check?uri=http%3A%2F%2Fwww.pixedelic.com%2Fplugins%2Fcamera%2F&amp;charset=%28detect+automatically%29&amp;doctype=Inline&amp;group=0&amp;user-agent=W3C_Validator%2F1.2" target="_blank">have a look</a>)
                </div>
            </div>
            <div data-thumb="ab.jpg" data-src="ab.jpg">
                <div class="camera_caption fadeFromBottom">
                    Different color skins and layouts available, <em>fullscreen ready too</em>
                </div>
            </div>
        </div><!-- #camera_wrap_1 -->
    </div><!-- .fluid_container -->
    
    <div style="clear:both; display:block; height:100px"></div>
</body> 
</html>