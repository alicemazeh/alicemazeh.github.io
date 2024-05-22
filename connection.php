
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<h1>Welcome to Savor Haven MENU!!</h1>

<style>
  body{
    background-color: #E3E7E8;
    font-family: system-ui;
} 
h1:hover{
    width: 600px;
    /* border: 1px solid  */
    text-align: center;
    background: lightgray;
    color: #fff;
    border-radius: 0 0.5rem 0 0.5rem;
    padding: 20px;
    font-style:italic;
    color:#d3131d;
  background: linear-gradient(red, white);
  filter: blur(0.01rem);
    
    
}
    
img{
    width: 50px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #d3131d;
  color: black;
}
</style>


<table id="customers">
  <tr>
    <th>Image</th>
    <th>ID</th>
    <th>Title</th>
    <th>Price</th>
  </tr>

<?php

    $con=mysqli_connect("localhost","root","","product");
// Check connection
    if (mysqli_connect_errno())
    {
        echo "FailedtoconnecttoMySQL: ".mysqli_connect_error();
    }


    $table = mysqli_query($con, "select * from produc");
    
    while( $row = mysqli_fetch_array($table) )
    {
    ?>
    
    <tr>
        <td><img  src=<?=$row["image"]?> alt=""></td>
        <td><?=$row["id"]?></td>
        <td><?=$row["name"]?></td>
        <td><?=$row["price"]?></td>
    </tr>


        <?php 
        // end of loop
            }
        ?>
    
</table>




</body>
</html>


 

 