<?php
require 'database/mysqlwrapper.php';
require 'database/connect.php';
require 'database/functions.php';

$c_con = get_connection();


if (isset($_POST['username']) && isset($_POST['password'])) {

    $loginreturn = login($c_con, $_POST['username'], $_POST['password']);

    $account_query = $c_con->query('SELECT * FROM users WHERE username=?', [$_POST['username']]);
    $account_data = $account_query->fetch_assoc();

    switch ($loginreturn) {
        case 'missing_username':
            error("Username missing!");
            break;
        case 'missing_password':
            error("Password missing!");
            break;
        case 'invalid_account':
            error("Invalid username!");
            break;
        case 'wrong_password':
            error("Invalid Password!");
            break;
        case 'banned':
            error("You are banned! Reason: " . $account_data["banReason"]);
            break;
        case 'banned':
            success("Logged in! Redirecting...");
            header('refresh:2; url=/dashboard/user/');
            break;


    }
    function login($c_con, $username, $password)
    {
        $account_query = $c_con->query('SELECT * FROM users WHERE username=?', [$username]);
        $account_data = $account_query->fetch_assoc();

        if (empty($username)) {
            return 'missing_username';
        }

        if (empty($password)) {
            return 'missing_password';
        }

        if ($account_query->num_rows == 0) {
            return 'invalid_account';
        }

        if (!password_verify($_POST['password'], $account_data["password"])) {
            return 'wrong_password';
        }

        if ($account_data["isBanned"] == 1) {
            return 'banned';
        }

        if (password_verify($_POST['password'], $account_data["password"])) {
            $c_con->query("UPDATE users SET IP = '" . getip() . "' WHERE username = '" . $username . "'");

            $_SESSION['username'] = $account_data['username'];
            $_SESSION['access'] = $_SESSION['username'] . getip();
            $_SESSION['invitedBy'] = $account_data['invitedBy'];
            $_SESSION['ip'] = $account_data['IP'];
            $_SESSION['uploadKey'] = $account_data['uploadKey'];
            $_SESSION['isBanned'] = $account_data['isBanned'];
            $_SESSION['ban_reason'] = $account_data['ban_reason'];

            return 'success';

        }
    }
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <title>kiba.shop - login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="kiba.shop image host">
    <meta property="og:image" content="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <meta name="twitter:image" content="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <meta property="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="282828">
    <link rel="icon" type="image/ico" href="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
    <link rel="stylesheet" href="/assets/style.css">
    <script src="/assets/script.js"></script>
    <script src="/assets/uikit-icons.min.js"></script>
</head>

<body>
    <div class="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <a href="/" class="uk-navbar-item uk-logo"><img src="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png" alt="kiba.shop - Logo" style="height: 2em; -moz-user-select: none;" draggable="false"></a>
                <ul class="uk-navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/register.php">Resgister</a></li>
                    <li><a href="/login.php" style="color: white">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
        <h3 class="uk-text-center uk-margin-medium-bottom">Welcome back, please enter your credentials below.</h3>
        <div class="uk-child-width-1-2@s uk-grid-small uk-flex uk-flex-center" uk-grid>
            <div>
                <div class="uk-border-rounded uk-card uk-card-default uk-card-large">
                    <div class="uk-text-center uk-card-body">
                        <span uk-icon="user"></span><b> Login</b>
                        <div class="uk-container uk-margin-medium-top credentials">
                            <form method="POST">
                                <p><input type="text" name="username" placeholder="Username" required id="usernameLogin">
                                    <input type="password" name="password" placeholder="Password" required id="passwordLogin">
                                    <input type="submit" id="submitLogin">
                                </p><br>
                                <p><span style="opacity:50%;"> Don't have an account?</span> <a href="register.php">Register</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>