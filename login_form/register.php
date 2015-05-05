<?php
	require('connection.php');
	if(isset($_POST['username']) and isset($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$passwordTwo = $_POST['passwordTwo'];
		$email = $_POST['email'];

		if($password == $passwordTwo){
			$query = "INSERT INTO logg (username, password, passwordTwo, email) VALUES ('" . $_POST['username'] . "', '" . $_POST['password'] . "', '" . $_POST['passwordTwo'] . "', '" . $_POST['email'] . "'')";
			$result = mysql_query($query);
			echo "TestTestTest";
			if($result){
				echo "Account created!";
			}
			else{
				echo("Account not created!");
			}
		}
		else{
			echo "Password not match!";
		}
	}else{
		echo("test first if statement");
	}
	?>