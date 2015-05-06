<?php
	require('connection.php');
	if(isset($_POST['username']) and isset($_POST['password']) and isset($_POST['email'])){
		$username = $_POST['username'];
		$password = $_POST['password'];
		$password_two = $_POST['password_two'];
		$email = $_POST['email'];
		$query = "SELECT * FROM logg WHERE username = '$username'";
		$result = mysql_query($query) or die(mysql_error());
		$user_count = mysql_num_rows($result);
		if ($user_count == 0) {
			if($password == $password_two){
				$query = "INSERT INTO logg (username, password, email) VALUES ('" . $_POST['username'] . "', '" . $_POST['password'] . "', '" . $_POST['email'] . "')";
				$result = mysql_query($query);
				//echo "TestTestTest";
				if($result){
					echo "Account created!<br>";
					echo"<a href='login_form.html'>Now you can login</a>";

				}
				else{
					echo"there is a problem,try again!";
				}
			}
			else{
				echo "Password not match!";
			}
		}else{
			echo"user name already exist,please choose another username!";
			echo"<a href='register_form.html'>Back to register form.</a>";
		}
	}else{
		echo("test first if statement ");
	}
	?>