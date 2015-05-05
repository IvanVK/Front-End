<?php
	require('connection.php');
	if(isset($_POST['username']) && isset($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$email = $_POST['email'];

		$query = "INSERT INTO 'logg' (username,password,email) VALUES ('$username', '$password', '$email')";
		$result = mysql_query($query);
		echo "TestTestTest";
		if($result){
			$created = "Account created!";
			echo $created;
		}
	}
	?>