<?php
class connection{
	public function fn_connection_index(){
		$conn = new mysqli("localhost", "root", "", "content");
		$sql_wal="select * from contents where category ='Wallpaper' and portal='funhouse' order by downloaded desc limit 1";
		$result_wal_popular = mysqli_query($conn,$sql_wal);
		$sql_vid="select * from contents where category ='Video' and portal='funhouse' order by downloaded desc limit 1";
		$result_vid_popular = mysqli_query($conn,$sql_vid);
		$sql_mus="select * from contents where category ='Music' and portal='funhouse' order by downloaded desc limit 1";
		$result_mus_popular = mysqli_query($conn,$sql_mus);
		$sql_anim="select * from contents where category ='Animation' and portal='funhouse' order by downloaded desc limit 1";
		$result_anim_popular = mysqli_query($conn,$sql_anim);
		$sql_game="select * from contents where category ='Games' and portal='funhouse' order by downloaded desc limit 1";
		$result_game_popular = mysqli_query($conn,$sql_game);
		$sql_ring="select * from contents where category ='Ringtone' and portal='funhouse' order by downloaded desc limit 1";
		$result_ring_popular = mysqli_query($conn,$sql_ring);
		$sql_wal="select * from contents where category ='Wallpaper' and portal='funhouse'  order by time desc limit 1";
		$result_wal_recent = mysqli_query($conn,$sql_wal);
		$sql_vid="select * from contents where category ='Video' and portal='funhouse' order by time desc limit 1";
		$result_vid_recent = mysqli_query($conn,$sql_vid);
		$sql_mus="select * from contents where category ='Music' and portal='funhouse' order by time desc limit 1";
		$result_mus_recent = mysqli_query($conn,$sql_mus);
		$sql_anim="select * from contents where category ='Animation' and portal='funhouse' order by time desc limit 1";
		$result_anim_recent = mysqli_query($conn,$sql_anim);
		$sql_game="select * from contents where category ='Games' and portal='funhouse' order by time desc limit 1";
		$result_game_recent = mysqli_query($conn,$sql_game);
		$sql_ring="select * from contents where category ='Ringtone' and portal='funhouse' order by time desc limit 1";
		$result_ring_recent = mysqli_query($conn,$sql_ring);
		return array($result_wal_popular,$result_vid_popular,$result_mus_popular,$result_anim_popular,$result_game_popular,$result_ring_popular,
					$result_wal_recent,$result_vid_recent,$result_mus_recent,$result_anim_recent,$result_game_recent,$result_ring_recent);
	}
	public function fn_connection_wallpaper(){
		$preview_link=[];
		$name=[];
		$category="Wallpaper";
		$conn = new mysqli("localhost", "root", "", "content");
		$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by downloaded desc limit 6";
		$result_category = mysqli_query($conn,$sql);
		if ($result_category->num_rows > 0) {
		   while($row = $result_category->fetch_assoc()) {
				$preview_link[]=$row['preview_link'];
				$name[]=$row['name'];
			}
		}
		return array($preview_link,$name);
	}
	public function fn_connection_video(){
		$preview_link=[];
		$name=[];
		$category="Video";
		$conn = new mysqli("localhost", "root", "", "content");
		$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by downloaded desc limit 6";
		$result_category = mysqli_query($conn,$sql);
		if ($result_category->num_rows > 0) {
		   while($row = $result_category->fetch_assoc()) {
				$preview_link[]=$row['preview_link'];
				$name[]=$row['name'];
			}
		}
		return array($preview_link,$name);
	}
	public function fn_connection_ringtone(){
		$preview_link=[];
		$name=[];
		$category="Ringtone";
		$conn = new mysqli("localhost", "root", "", "content");
		$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by downloaded desc limit 6";
		$result_category = mysqli_query($conn,$sql);
		if ($result_category->num_rows > 0) {
		   while($row = $result_category->fetch_assoc()) {
				$preview_link[]=$row['preview_link'];
				$name[]=$row['name'];
			}
		}
		return array($preview_link,$name);
	}
	public function fn_connection_music(){
		$preview_link=[];
		$name=[];
		$category="Music";
		$conn = new mysqli("localhost", "root", "", "content");
		$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by downloaded desc limit 6";
		$result_category = mysqli_query($conn,$sql);
		if ($result_category->num_rows > 0) {
		   while($row = $result_category->fetch_assoc()) {
				$preview_link[]=$row['preview_link'];
				$name[]=$row['name'];
			}
		}
		return array($preview_link,$name);
	}
	public function fn_connection_animation(){
		$preview_link=[];
		$name=[];
		$category="Animation";
		$conn = new mysqli("localhost", "root", "", "content");
		$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by downloaded desc limit 6";
		$result_category = mysqli_query($conn,$sql);
		if ($result_category->num_rows > 0) {
		   while($row = $result_category->fetch_assoc()) {
				$preview_link[]=$row['preview_link'];
				$name[]=$row['name'];
			}
		}
		return array($preview_link,$name);
	}
	public function fn_connection_game(){
		$preview_link=[];
		$name=[];
		$category="Games";
		$conn = new mysqli("localhost", "root", "", "content");
		$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by downloaded desc limit 6";
		$result_category = mysqli_query($conn,$sql);
		if ($result_category->num_rows > 0) {
		   while($row = $result_category->fetch_assoc()) {
				$preview_link[]=$row['preview_link'];
				$name[]=$row['name'];
			}
		}
		return array($preview_link,$name);
	}
	public function fn_connection_recentlyadded(){
		$preview_link=[];
		$name=[];
		if(isset($_GET['view']) and isset($_GET['category'])){
			$category=$_GET['category'];
			$conn = new mysqli("localhost", "root", "", "content");
			$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by time desc limit 6";
			$result_category = mysqli_query($conn,$sql);
			if ($result_category->num_rows > 0) {
			   while($row = $result_category->fetch_assoc()) {
					$preview_link[]=$row['preview_link'];
					$name[]=$row['name'];
				} 
			}
		}
		else{
			$category="Wallpaper";
			$conn = new mysqli("localhost", "root", "", "content");
			$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by time desc limit 6";
			$result_category = mysqli_query($conn,$sql);
			if ($result_category->num_rows > 0) {
			   while($row = $result_category->fetch_assoc()) {
					$preview_link[]=$row['preview_link'];
					$name[]=$row['name'];
				}
			} 
		}
		return array($preview_link,$name);
	}
	public function fn_connection_topdownload(){
		$preview_link=[];
		$name=[];
		if(isset($_GET['view']) and isset($_GET['category'])){
			$category=$_GET['category'];
			$conn = new mysqli("localhost", "root", "", "content");
			$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by time desc limit 6";
			$result_category = mysqli_query($conn,$sql);
			if ($result_category->num_rows > 0) {
			   while($row = $result_category->fetch_assoc()) {
					$preview_link[]=$row['preview_link'];
					$name[]=$row['name'];
				} 
			}
		}
		else{
			$category="Wallpaper";
			$conn = new mysqli("localhost", "root", "", "content");
			$sql="select preview_link,name from contents where category ='$category' and portal='funhouse' order by time desc limit 6";
			$result_category = mysqli_query($conn,$sql);
			if ($result_category->num_rows > 0) {
			   while($row = $result_category->fetch_assoc()) {
					$preview_link[]=$row['preview_link'];
					$name[]=$row['name'];
				}
			} 
		}
		return array($preview_link,$name);
	}
}
?>