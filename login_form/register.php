<?php
	require('connection.php');
	if(isset($_POST['username']) and isset($_POST['password'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$password_two = $_POST['password_two'];
		$email = $_POST['email'];

		if($password == $password_two){
			$query = "INSERT INTO logg (username, password, password_two, email) VALUES ('" . $_POST['username'] . "', '" . $_POST['password'] . "', '" . $_POST['password_two'] . "', '" . $_POST['email'] . "')";
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