<?php

class session {

    static function check($conn, $username) {
        $account_query = mysqli_query($conn, "SELECT * FROM accounts WHERE username='" . $username . "'");
        $account_data = $account_query->fetch_assoc();

        if ($account_query->num_rows == 0) {
            header("Location: /");
            session_unset();
            session_destroy();
            exit();
        }
        else if ($account_query->num_rows != 0) {
        
        }
    }
}
