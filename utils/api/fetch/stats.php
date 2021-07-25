<?php

function fetch_users($conn) {
    $query = mysqli_query($conn, "SELECT COUNT(1) FROM accounts");
    $row = $query->fetch_array()[0] ?? '';

    return $row;
}

function fetch_uploads($conn) {
    $query = mysqli_query($conn, "SELECT COUNT(1) FROM uploads");
    $row = $query->fetch_array()[0] ?? '';

    return $row;
}

function fetch_bans($conn){
    $query = mysqli_query($conn, "SELECT COUNT(1) FROM accounts WHERE banned=1");
    $row = $query->fetch_array()[0] ?? '';

    return $row;
}

function fetch_domains($conn){
    $query = mysqli_query($conn, "SELECT COUNT(1) FROM domains");
    $row = $query->fetch_array()[0] ?? '';

    return $row;
}
?>