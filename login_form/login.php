<?php
	//session_start();
	require('connection.php');
	// echo "gggg";
	if(isset($_POST['username']) and isset($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$query = "SELECT * FROM 'logg' WHERE username = '$username' and password = '$password' ";

		$result = mysql_query($query) or die(mysql_error());
		$_SESSION['username']= $username;
		echo "login successful!";
	}
	else{
		echo "invalid user!";
	}
	if(isset($_SESSION['username'])){
		$username = $_SESSION['username'];
		echo "hello".$username." ";
	}

?>