<?php
if (!isset($_GET['file'])) {
    include_once __DIR__ . '/index.php';
    die();
}

require 'database/mysqlwrapper.php';
require 'database/connect.php';

$c_con = get_connection();


$types = array('png' => 'image/png', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif', 'mp4' => 'video/mp4');

$file = $_GET['file'];


$result =$c_con->query("SELECT * FROM uploads WHERE UploadName='$file'");
$row = $result->fetch_array();

$type = $row['MimeType'];


$filelocation = __DIR__ . "/files/$file.$type";

if (!file_exists(realpath($filelocation)) || !array_key_exists($type, $types)) {
}

require_once __DIR__ . '/utils/viewer.php';

?>