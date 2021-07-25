<?php
error_reporting(0);
require 'utils/includes.php';
if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['invite'])) {
    $account_query = mysqli_query($conn, "SELECT * FROM accounts WHERE username='" . $_POST['username'] . "'");
    $invite_query = mysqli_query($conn, "SELECT * FROM invites WHERE invite='" . $_POST['invite'] . "'");
    $account_data = mysqli_fetch_assoc($account_query);
    $invite_data = mysqli_fetch_assoc($invite_query);



    if (empty($_POST['username']) || empty($_POST['password']) || empty($_POST['invite'])) {
        $_SESSION["regmsg"] = "Missing fields";
        return header("Location: register.php");
    }

    if ($_POST['username'] == "API") {
        return 'forbidden_username';
    }

    if (strlen($_POST['password']) < 4) {
        return 'password_short';
    }

    if (strlen($_POST['username']) < 4) {
        return 'username_short';
    }
    
    if (mysqli_num_rows($account_query) != 0) {
        return 'user_exists';
    }
    
    if (mysqli_num_rows($invite_query) == 0) {
        return 'invite_invalid';
    }
    
    if ($invite_data['used'] == '1') {
        return 'invite_used';
    }

    if(!isset($_SESSION)){
        session_start();
    }

    mysqli_query($conn, "UPDATE `invites` SET `used` = '1' WHERE `invites`.`invite` = '". $_POST['invite'] . "'");
    mysqli_query($conn, "INSERT INTO `users`(`username`,`invitedBy`,`password`,`ip`,`uploadKey`)VALUES('" . $_POST['username'] . "', '" . $invite_data['owner'] . "', '" . password_hash($_POST['password'], PASSWORD_BCRYPT) . "', '" . api::get_ip() . "', '" . md5(api::random_string(10))  . "')");
    mysqli_query($conn, "INSERT INTO `config`(`username`)VALUES('" . $_POST['username'] . "')");
    mysqli_query($conn, "INSERT INTO `domain_config`(`username`) VALUES ('" . $_POST['username'] . "')");

    api::success('Account was successfully created, redirecting...');

    header('refresh:3; url=/login.php');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>kiba.shop - login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="kiba.shop image host">
    <meta property="og:image" content="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <meta name="twitter:image" content="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <meta property="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="282828">
    <link rel="icon" type="image/ico" href="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png">
    <link rel="stylesheet" href="/assets/style.css" />
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
                    <li><a href="/register.php" style="color: white">Register</a></li>
                    <li><a href="/login.php">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
        <h3 class="uk-text-center uk-margin-medium-bottom">Welcome to kiba.shop, please enter your credentials below.
        </h3>
        <div class="uk-child-width-1-2@s uk-grid-small uk-flex uk-flex-center" uk-grid>
            <div>
                <div class="uk-border-rounded uk-card uk-card-default uk-card-large">
                    <div class="uk-text-center uk-card-body">
                        <span uk-icon="user"></span><b> Register</b>
                        <div class="uk-container uk-margin-medium-top credentials">
                            <form method="POST">
                                <p>
                                    <input type="text" name="username" placeholder="Username" required id="usernameRegister">
                                    <input type="password" name="password" placeholder="Password" required id="passwordRegister">
                                    <input type="password" name="invite" value="<?php echo $_GET['invite'] ?>" placeholder="API Key / Invite Code" required id="inviteRegister">
                                    <input type="submit" id="submitRegister">
                                </p><br>
                                <p><span style="opacity:50%;"> Already have an account?</span> <a href="login.php">Login</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>