<?php 
$conn = mysqli_connect("localhost", "root", "", "kibashop");
if ($conn === false) {
    die(mysqli_connect_error());
}
