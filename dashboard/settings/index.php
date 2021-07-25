<?php
require '../../utils/includes.php';

session::check($conn, $_SESSION['username']);

$result = mysqli_query($conn, "SELECT * FROM `accounts` WHERE `username`='" . $_SESSION['username'] . "'");
$rows = mysqli_fetch_array($result);

$cfgresult = mysqli_query($conn, "SELECT * FROM `config` WHERE `username`='" . $_SESSION['username'] . "'");
$cfgrows = mysqli_fetch_array($cfgresult);

if (isset($_POST['resettoken'])) {
    $_SESSION['upload_key'] = $rows['upload_key'];
    $str = md5(api::random_string(10));
    mysqli_query($conn, "UPDATE `accounts` SET `upload_key` = '$str' WHERE `username` = '" . $_SESSION['username'] . "'");

    api::success("Successfully resetted the Key!");
}

if (isset($_POST['configSave'])) {
    if (isset($_POST['random-color'])) {
        mysqli_query($conn, "UPDATE `config` SET `random_color` = 'on' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
    } else {
        if (isset($_POST['colorCode'])) {
            mysqli_query($conn, "UPDATE `config` SET `random_color` = 'off' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `color` = '" . $_POST['colorCode'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `title` = '" . $_POST['configTitle'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `author` = '" . $_POST['configAuthor'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `description` = '" . $_POST['configDescription'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
        } else {
            mysqli_query($conn, "UPDATE `config` SET `random_color` = 'off' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `title` = '" . $_POST['configTitle'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `author` = '" . $_POST['configAuthor'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
            mysqli_query($conn, "UPDATE `config` SET `description` = '" . $_POST['configDescription'] . "' WHERE `config`.`username` = '" . $_SESSION['username'] . "'");
        }
    }

    api::success("Successfully Updated!");
    header('refresh:0;');
}

if (isset($_POST['unlink'])) {

    $headers = array(
        'Content-Type: application/json',
        'Authorization: Bot ODUzNzMyODI4OTk1MTI1MjY4.YMZqqA.RZ94lO8jh0gBb8DJ8OwJTgKmwTM'
    );
    $data = array("nick" => "");
    $data_string = json_encode($data);

    $ch = curl_init("https://discord.com/api/guilds/852941849152716830/members/" . $rows['discord_id']);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PATCH");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_exec($ch);
    curl_close($ch);

    $ch = curl_init("https://discord.com/api/guilds/852941849152716830/members/" . $rows['discord_id'] . "/roles/854052495026159638");
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
    curl_exec($ch);
    curl_close($ch);

    mysqli_query($conn, "UPDATE `accounts` SET `discord` = '' WHERE `accounts`.`username` = '" . $_SESSION['username'] . "'");
    mysqli_query($conn, "UPDATE `accounts` SET `discord_id` = NULL WHERE `accounts`.`username` = '" . $_SESSION['username'] . "'");

    api::success("Successfully unlinked your Discord Account");
    header('refresh:2;');
}

function random_color_part()
{
    return str_pad(dechex(mt_rand(0, 255)), 2, '0', STR_PAD_LEFT);
}

function random_color()
{
    return random_color_part() . random_color_part() . random_color_part();
}

if (isset($_POST['config']))
{
    echo "
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
        <title>kiba.shop</title>
    </head>
    <script>
    var fileContent = '{\"Version\": \"2.0.0\",\"Name\": \"kiba.shop\",\"DestinationType\": \"ImageUploader, FileUploader\",\"RequestMethod\": \"POST\",\"RequestURL\": \"https://" . $_SERVER['SERVER_NAME'] . "/upload.php\",\"Body\": \"MultipartFormData\",\"Arguments\": {\"upload_key\": \"" . $_SESSION['upload_key'] . "\"},\"FileFormName\": \"file\",\"URL\": \"\$response$\",\"ErrorMessage\": \"\$response$\"      }';
    var fileName = 'config.sxcu';
    
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const a = document.createElement('a');
    a.setAttribute('download', fileName);
    a.setAttribute('href', window.URL.createObjectURL(blob));
    a.click();
    </script>";
}
else
{

}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>kiba.shop - settings</title>
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
    <script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5" type="text/javascript"></script>
</head>

<body>
    <div class="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                <a href="/" class="uk-navbar-item uk-logo"><img src="https://media.discordapp.net/attachments/825050645261844494/850951773475700756/Untitled169_20210606001819.png" alt="kiba.shop - Logo" style="height: 2em; -moz-user-select: none;" draggable="false"></a>
                <ul class="uk-navbar-nav">
                    <li><a href="/dashboard/user">Dashboard</a></li>
                    <li><a href="/dashboard/gallery">Gallery</a></li>
                    <li><a href="/dashboard/invites">Invites</a></li>
                    <li><a href="/dashboard/upload">Upload</a></li>
                    <li><a href="/dashboard/settings" style="color: white">Settings</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
        <h2 class="uk-margin-medium-bottom">Settings</h2>
        <div class="uk-child-width-1-2@s uk-grid-small uk-flex" uk-grid>
            <div>
                <div class="uk-border-rounded uk-card uk-card-default uk-card-small">
                    <div class="uk-card-body">
                        <h3>Images</h3>
						<center>Variables: {file} {username} {uid} {filename} {size} {ext} {date}</center>
                        <form method="POST">
                            <!--<div>
                                <label class="uk-form-label" for="linkType">Select the link type:</label>
                                <select class="uk-select" id="linkType">
                                    <option>Short Link</option>
                                    <option>Long Link</option>
                                    <option>Invisible Link</option>
                                </select>
                            </div>-->
                            <div class="uk-text-center ">
                                <label class="uk-form-label" for="configAuthor">Embed Author</label>
                                <input class="uk-input" type="text" name="configAuthor" value="<?php echo $cfgrows['author'] ?>" onkeyup="updateAuthor(this.value)" onkeydown="updateAuthor(this.value)" onchange="updateAuthor(this.value)" onpaste="updateAuthor(this.value)" oninput="updateAuthor(this.value)">
                            </div>
                            <div class="uk-text-center ">
                                <label class="uk-form-label" for="configTitle">Embed Title</label>
                                <input class="uk-input" type="text" name="configTitle" value="<?php echo $cfgrows['title'] ?>" onkeyup="updateTitle(this.value)" onkeydown="updateTitle(this.value)" onchange="updateTitle(this.value)" onpaste="updateTitle(this.value)" oninput="updateTitle(this.value)">
                            </div>
                            <div class="uk-text-center ">
                                <label class="uk-form-label" for="configDescription">Embed Description</label>
                                <input class="uk-input" type="text" name="configDescription" value="<?php echo $cfgrows['description'] ?>" onkeyup="updateDescription(this.value)" onkeydown="updateDescription(this.value)" onchange="updateDescription(this.value)" onpaste="updateDescription(this.value)" oninput="updateDescription(this.value)">
                            </div>
                            <div class="uk-text-center uk-inline">
                                <label class="uk-form-label" for="colorCode">Embed Color:</label><br />
                                <input class="uk-checkbox" type="checkbox" name="random-color" <?php $search = array("on", "off");
                                                                                                $replacewith = array("checked", "");
                                                                                                $outputtext = str_replace($search, $replacewith, $cfgrows['random_color']);
                                                                                                echo $outputtext; ?>> Random Color </input><br />
                                <input class="uk-input" type="color" name="colorCode" style="width: 50em;" <?php
                                                                                                            $search = array("on", "off");
                                                                                                            $replacewith = array("disabled value=\"" . $cfgrows['color'] . "\"", "value=\"" . $cfgrows['color'] . "\"");
                                                                                                            $outputtext = str_replace($search, $replacewith, $cfgrows['random_color']);
                                                                                                            echo $outputtext; ?>  oninput="updateColor(this.value)">
                            </div>
                            <div class="uk-text-center uk-margin-medium-top">
                                <label class="uk-form-label" for="configSave"></label>
                                <button class="uk-button uk-button-primary" name="configSave" type="submit"><span uk-icon="check"></span> save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-border-rounded uk-card uk-card-default uk-card-small">
                    <div class="uk-card-body">
                        <div>
                            <form method="POST" class="uk-text-center">
                                <h3>User</h3>
                                <div class="uk-text-large">
                                    <p><?php echo $_SESSION['username'] ?></p>
                                    <p>Upload Key: <br><b class="blur"><?php echo $_SESSION['upload_key'] ?></b>
                                        <?php if ($rows['discord'] != "") { ?>
                                    <p>Discord: <br><b><?php echo $rows['discord'] ?></b>
                                    <?php } ?>
                                </div>

                                <button class="uk-button uk-button-default uk-button-small" name="config" id="config" type="submit"><span uk-icon="download"></span>download sxcu</button>
                                <button class="uk-button uk-button-default uk-button-small" name="resettoken" id="resettoken" type="submit"><span uk-icon="refresh"></span>regenerate key</button>
                                <?php if ($rows['discord'] == "") { ?>
                                    <a href="JavaScript:discord1337();" class="uk-button uk-button-default uk-button-small"><span uk-icon="discord"></span>Link Discord</a>
                                <?php } ?>

                                <?php if ($rows['discord'] != "") { ?>
                                    <button type="submit" name="unlink" id="unlink" class="uk-button uk-button-default uk-button-small" uk-tooltip="This will remove your Role and Nickname from our Discord Server."><span uk-icon="discord"></span>Unlink Discord</button>
                                <?php } ?>
                            </form>
                            <br>
                            <br>
                            <br>
                            <div>
                                <div>
                                    <div class="embed-body" id="e-color" style="border-left: 5px solid <?php
                                                                                                        $search = array("on", "off");
                                                                                                        $replacewith = array("#" . random_color(), $cfgrows['color']);
                                                                                                        $outputtext = str_replace($search, $replacewith, $cfgrows['random_color']);
                                                                                                        echo $outputtext; ?>;">
                                        <span class="embed-author" id="e-author"><?php echo $cfgrows['author'] ?></span>
                                        <span class="embed-title" id="e-title"><?php echo $cfgrows['title'] ?></span>
                                        <span class="embed-desc" id="e-description"><?php echo $cfgrows['description'] ?></span>
                                        <img src="https://imgur.com/yLIXHjk.png" class="embed-img" alt="Preview image">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</body>
<script>
    function discord1337() {
        popupWindow = window.open(
            'https://discord.com/api/oauth2/authorize?client_id=847200247750066187&redirect_uri=https%3A%2F%2Fkiba.shop%2Fdashboard%2Fdiscord.php&response_type=code&scope=guilds.join%20identify',
            'popUpWindow',
            `menubar=no,width=500,height=777,resizable=no,scrollbars=yes,status=no,top=` + (screen.height - 777) / 2 + ',left=' + (screen.width - 500) / 2);
        popupWindow.focus();
    }

    function repl(s) {
        return s.replace(/{file}/g, '1337.png').replace(/{username}/g, "<?php echo $_SESSION['username'] ?>").replace(/{uid}/g, "<?php echo $rows['uid'] ?>").replace(/{filename}/g, '1337').replace(/{size}/g, '13.37 KB').replace(/{ext}/g, 'png').replace(/{date}/g, '<?php echo date('m/d/Y') ?>')
    }

    function updateAuthor(value) {
        document.getElementById("e-author").innerHTML = repl(value);
    }

    function updateTitle(value) {
        document.getElementById('e-title').innerHTML = repl(value);
    }

    function updateDescription(value) {
        document.getElementById("e-description").innerHTML = repl(value);
    }

    function updateColor(value) {
        document.getElementById("e-color").style.borderLeft = "5px solid " + value;
    }

    updateAuthor(document.getElementById('e-author').innerHTML);
    updateTitle(document.getElementById('e-title').innerHTML);
    updateDescription(document.getElementById('e-description').innerHTML);
    updateColor(document.getElementById('e-color').innerHTML);
</script>

</html>