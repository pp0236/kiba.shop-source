<?php
require 'utils/includes.php';
?>
<style>
html {
    zoom: 1.0;
    -moz-transform: scale(1.0);
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
}
</style>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>kiba.shop</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="kiba.shop image host">
    <meta name="og:site_name" content="Users: <?php echo fetch_users($conn); ?> | Uploads: <?php echo fetch_uploads($conn); ?> | Bans: <?php echo fetch_bans($conn); ?>">
    <meta property="og:image" content="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <meta name="twitter:image" content="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <meta property="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="282828">
    <link rel="icon" type="image/ico" href="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png">
    <link rel="stylesheet" href="/static/style.css" />
    <script src="/static/script.js"></script>
    <script src="/static/uikit-icons.min.js"></script>
</head>

<body>
    <div class="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <a href="/" class="uk-navbar-item uk-logo">
                    <img src="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png" alt="kiba.shop - Logo" style="height: 2em; -moz-user-select: none;" draggable="false"></a>
                <ul class="uk-navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="https://docs.kiba.shop">FAQ</a></li>
                    <li><a href="/register.php">Resgister</a></li>
                    <li><a href="/login.php">Login</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <header class="uk-block uk-block-large uk-margin-large-bottom uk-margin-large-top">
        <div class="uk-container uk-container-center">
            <section class="uk-grid uk-grid-match" data-uk-grid-margin="">
                <div class="uk-width-medium-1-1">
                    <div class="uk-panel uk-text-center">
                        <img data-src="https://media.discordapp.net/attachments/825050645261844494/850952465058496543/20210606_002108.png" width="20%" alt="kiba.shop - Logo" style="max-width: 200px; -moz-user-select: none;" draggable="false" uk-img data-cf-modified-433fae1a51dc16b212d8cee3-="">
                        <h1 class="uk-heading-medium uk-text-bold">kiba.shop</h1>
                        <p>A free image host.</p>
                    </div>
                </div>
            </section>
        </div>
    </header>

    <div class="uk-container uk-margin-small-bottom">
        <div class="uk-child-width-1-2@s uk-grid-small" uk-grid uk-height-match="target: > div > .uk-card">
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Share your media the best way.</div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Supports all platforms.</div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Trusted by <span style="font-weight:bold;">
                            <?php echo fetch_users($conn) ?>
                        </span> users</div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Using the host is free of charge for everyone.</div>
                </div>
            </div>
        </div>
        <div class="uk-inline">
        <div>
            <p class="uk-margin-medium-top">
                <a class="uk-button uk-button-primary uk-button-large uk-width-2-5" href="/login.php">Login</a>
            </p>
        </div>
        <div>
            <p class="uk-margin-medium-top">
                <a class="uk-button uk-button-primary uk-button-large uk-width-2-5" href="/register.php">Register</a>
            </p>
        </div>
        <div>
            <p class="uk-margin-medium-top">
                <a class="uk-button uk-button-primary uk-button-large uk-width-2-5" href="https://discord.gg/6QQqbCjq28">Discord</a>
            </p>
        </div>
    </div>
    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
        <h1 class="uk-heading-line uk-text-center"><span>Statistics</span></h1>
        <div class="uk-child-width-1-3@s uk-grid-small" uk-grid>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Users Registered: <span style="font-weight:bold;">
                            <?php echo fetch_users($conn) ?>
                        </span></div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Banned users: <span style="font-weight:bold;">
                            <?php echo fetch_bans($conn) ?>
                        </span></div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default uk-card-small">
                    <div class="uk-text-center uk-card-body">Files Uploaded: <span style="font-weight:bold;">
                            <?php echo fetch_uploads($conn) ?>
                        </span></div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>