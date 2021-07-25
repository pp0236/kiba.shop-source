<?php
require '../../utils/includes.php';
session::check($conn, $_SESSION['username']);

$result = mysqli_query($conn, "SELECT COUNT(*) FROM `uploads` WHERE `uploaded_from`='" . $_SESSION['username'] . "'");
$rows = mysqli_fetch_array($result);


function minify_output($buffer)
{   
    $search = array(
        '/\>[^\S ]+/s',
        '/[^\S ]+\</s',
        '/(\s)+/s'
    );
    $replace = array(
        '>',
        '<',
        '\\1'
    );
    if (preg_match("/\<html/i", $buffer) == 1 && preg_match("/\<\/html\>/i", $buffer) == 1) {
        $buffer = preg_replace($search, $replace, $buffer);
    }
    return $buffer;
}
ob_start("minify_output");

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>kiba.shop - dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="kiba.shop image host">
    <meta property="og:image" content="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png">
    <meta name="twitter:image" content="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png">
    <meta property="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="282828">
    <link rel="icon" type="image/ico" href="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png">
    <link rel="stylesheet" href="/assets/style.css" />
    <script src="/assets/script.js"></script>
    <script src="/assets/uikit-icons.min.js"></script>
</head>

<body onload="window.history.pushState(null,null,'/dashboard/user/')">
    <div class="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <a href="/" class="uk-navbar-item uk-logo"><img src="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png" alt="kiba.shop - Logo" style="height: 2em; -moz-user-select: none;" draggable="false"></a>
                <ul class="uk-navbar-nav">
                    <li><a href="/dashboard/user" style="color: white">Dashboard</a></li>
                    <li><a href="/dashboard/gallery">Gallery</a></li>
                    <li><a href="/dashboard/invites">Invites</a></li>
                    <li><a href="/dashboard/upload">Upload</a></li>
                    <li><a href="/dashboard/settings">Settings</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <header class="uk-block uk-block-large uk-margin-large-bottom uk-margin-large-top">
        <div class="uk-container uk-container-center">
            <section class="uk-grid uk-grid-match" data-uk-grid-margin="">
                <div class="uk-width-medium-1-1">
                    <div class="uk-panel uk-text-left">
                        <h1 class="uk-heading-small uk-text-bold">Welcome, <?php echo $_SESSION['username'] ?>
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    </header>
    <div class="uk-container uk-container-center">
        <section class="uk-grid uk-grid-match" data-uk-grid-margin="">
            <div class="uk-width-medium-1-1">
                <div class="uk-panel uk-text-center">
                    <h3 class="uk-heading-line uk-text-center"><span>MOTD</span></h3>
                    <p id="motd"></p>
                </div>
            </div>
        </section>
    </div><br>
    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
        <h3 class="uk-text-center uk-margin-medium-bottom">We are glad to see you here &#x2764; </h3>
        <div class="uk-child-width-1-3@s uk-grid-small uk-flex uk-flex-center" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Files uploaded: <span style="font-weight:bold;">
                            <?php echo $rows[0] ?>
                        </span></div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var MOTD = [
            'epic poggers motd',
            'sussy amongus!1!1! (peak comedy)',
            'motd is motd', '[insert funni haha here]',
            '!! THIS IS AN EXTREMELY RARE MOTD !! (no its not lol L)',
            'bro why tf u wasting ur time reading this??', ':flushed:',
            'https://kiba.shop/gift/premium',
            'sex',
            'pays.host is trash',
            'me when when me when me me when ur mom HAHAHAHAHHA!!!!',
            'ian\'s internet is bad',
            'omgomg guys the motd changes every time u reload thepage!111!!',
            'help idk what to put here'
        ];
        var randMOTD = MOTD[Math.floor(Math.random() * MOTD.length)];
        document.getElementById('motd').innerHTML = randMOTD
    </script>
</body>

</html>