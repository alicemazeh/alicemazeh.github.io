<!DOCTYPE html>
<html>
<head>
    <title>Database Connection Example</title>
</head>
<body>

<?php
// Database connection parameters
$host = "localhost"; 
$username = "root"; // Change this to your database username
$password = "mypassword"; 
$dbname="Restaurantmenu";
$connect_database = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (mysqli_connect_errno()) {
	echo "not connected";
   exit();
} else {
    echo "Connected successfully";
}




</body>
</html>
