<?php
require 'utils/includes.php';

$allowedTypes = array('image/png', 'image/jpeg', 'image/gif', 'video/webm', 'video/mp4', 'video/mov');


if (!isset($_POST['upload_key'])) {
    header("HTTP/1.1 401 Unauthorized");
    exit;
}

if (!(filesize($_FILES['file']['name']) > 2 && in_array($_FILES['file']['type'], $allowedTypes))) {
    header("HTTP/1.1 415 Unsupported Media Type");
    exit;
}

if ($_FILES['file']['error'] > 0) {
    header("HTTP/1.1 500 Internal Server Error");
    exit;
}

$dir = $_SERVER['DOCUMENT_ROOT'] . '/files/';


addUpload($_POST['upload_key'], $_FILES['file']['type'], $_FILES['file']['tmp_name']);


    if (!empty($upload_key)) {
        $key_check = mysqli_query($conn, "SELECT * FROM accounts WHERE upload_key='" . encryption::anti_sql_string($upload_key) . "'");
        if ($key_check->num_rows != 0) {
            while ($row = $key_check->fetch_assoc()) {
                $get_domain = mysqli_query($conn, "SELECT * FROM domain_config WHERE username='" . encryption::anti_sql_string($row['username']) . "'");
                if ($get_domain->num_rows != 0) {
                    while ($domain_row = $get_domain->fetch_assoc()) {
                        global $dir;
                        $mimeTypeArray = explode('/', $mimeType);
                        $type = $mimeTypeArray[1];
                        $hash = generateNewHash($type);
                        move_uploaded_file($tempName, $dir . "$hash.$type");

                        $tmpName = $hash;

                        mysqli_query($conn, "INSERT INTO `uploads`(`uploaded_from`, `upload_name`, `upload_key`, `ip`, `upload_png_name`) VALUES ('" . encryption::anti_sql_string($row['username']) . "','" . $tmpName . "','" . $upload_key . "','" . encryption::anti_sql_string(api::get_ip()) . "', '" . $type . "')");

                        if ($domain_row['subdomain'] == null) {
                            die("http://" . $domain_row['domain'] . "/" . $tmpName);
                        } else if ($domain_row['subdomain'] != null) {
                            die("http://" . $domain_row['subdomain'] . "." . $domain_row['domain'] . "/" . $tmpName);
                        }
                        return true;
                    }
                } else if ($get_domain->num_rows == 0) {


                    mysqli_query($conn, "INSERT INTO `uploads`(`uploaded_from`, `upload_name`, `upload_key`, `ip`, `upload_png_name`) VALUES ('" . encryption::anti_sql_string($row['username']) . "','" . $tmpName . "','" . $upload_key . "','" . encryption::anti_sql_string(api::get_ip()) . "', '" . $type . "')");
                    die("http://" . $_SERVER['SERVER_NAME'] . "/" . $tmpName);
                    return true;
                }
            }
        } else {
            echo "upload_key does not exist";
            return false;
        }
    } else {
        echo "upload_key is empty";
        return false;
    }
}
