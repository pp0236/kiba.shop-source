<?php
include("includes.php");


$result = mysqli_query($conn, "SELECT `uploaded_from` FROM `uploads` WHERE `upload_name` = '$file'");
$row = $result->fetch_array();
if ($result->num_rows < 1) {
    header("Location: /");
    exit();
}

$serverurl = "http://kiba.shop/files/$file.$type";

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


?>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="twitter:card" content="summary_large_image">
    <?php if ($type == "mp4" || $type == "webm" || $type == "mov") { ?>
        <meta name='twitter:card' content='player'>
        <meta name="twitter:player:stream" content="<?php echo "http://" . $_SERVER['SERVER_NAME'] . $serverurl ?>">
        <meta name="twitter:player" content="<?php echo "http://" . $_SERVER['SERVER_NAME'] . $serverurl ?>">
        <meta name="twitter:player:stream:content_type" content="video/mp4">
    <?php } ?>
    <?php if ($type == "png" || $type == "jpeg" || $type == "jpg" || $type == "gif") { ?>
        <meta property="og:image" content="<?php echo $serverurl; ?>">
    <?php } ?>
	
	<meta property="og:site_name" content=" <?php
    $result = mysqli_query($conn, "SELECT `uploaded_from` FROM `uploads` WHERE `upload_name` = '$file'");
    $result2 = mysqli_query($conn, "SELECT `author` FROM `config` WHERE `username`='" . $row[0] . "'");
    $result3 = mysqli_query($conn, "SELECT `uid` FROM `accounts` WHERE `username`='" . $row[0] . "'");
    $row = $result->fetch_array();
    $row2 = $result2->fetch_array();
    $row3 = $result3->fetch_array();

    $search = array("{username}", "{filename}", "{ext}", "{file}", "{size}", "{uid}", "{date}");
    $essmap = round(filesize("././files/$file.$type") / 1024, 2) . " KB";
    $replacewith = array($row[0], $file . "." . $type, $type, $file, $essmap, $row3[0], date("Y/m/d"));
    $outputtext = str_replace($search, $replacewith, $row2[0]);
    echo $outputtext;
    ?>">
	
    <meta property="og:title" content="
    <?php
    $result = mysqli_query($conn, "SELECT `uploaded_from` FROM `uploads` WHERE `upload_name` = '$file'");
    $result2 = mysqli_query($conn, "SELECT `title` FROM `config` WHERE `username`='" . $row[0] . "'");
    $result3 = mysqli_query($conn, "SELECT `uid` FROM `accounts` WHERE `username`='" . $row[0] . "'");
    $row = $result->fetch_array();
    $row2 = $result2->fetch_array();
    $row3 = $result3->fetch_array();

    $search = array("{username}", "{filename}", "{ext}", "{file}", "{size}", "{uid}", "{date}");
    $essmap = round(filesize("././files/$file.$type") / 1024, 2) . " KB";
    $replacewith = array($row[0], $file . "." . $type, $type, $file, $essmap, $row3[0], date("Y/m/d"));
    $outputtext = str_replace($search, $replacewith, $row2[0]);
    echo $outputtext;
    ?>">

    <meta property="og:description" content="
    <?php
    $result = mysqli_query($conn, "SELECT `uploaded_from` FROM `uploads` WHERE `upload_name` = '$file'");
    $result2 = mysqli_query($conn, "SELECT `description` FROM `config` WHERE `username`='" . $row[0] . "'");
    $result3 = mysqli_query($conn, "SELECT `uid` FROM `accounts` WHERE `username`='" . $row[0] . "'");
    $row = $result->fetch_array();
    $row2 = $result2->fetch_array();
    $row3 = $result3->fetch_array();

    $search = array("{username}", "{filename}", "{ext}", "{file}", "{size}", "{uid}", "{date}");
    $essmap = round(filesize("././files/$file.$type") / 1024, 2) . " KB";
    $replacewith = array($row[0], $file . "." . $type, $type, $file, $essmap, $row3[0], date("Y/m/d"));
    $outputtext = str_replace($search, $replacewith, $row2[0]);
    echo $outputtext;
    ?>">

    <meta name="theme-color" content="
    <?php
    $result = mysqli_query($conn, "SELECT `uploaded_from` FROM `uploads` WHERE `upload_name` = '$file'");
    $result2 = mysqli_query($conn, "SELECT `color` FROM `config` WHERE `username`='" . $row[0] . "'");
    $row = $result->fetch_array();
    $row2 = $result2->fetch_array();

    echo $row2[0];
    ?>">

    <title>kiba.shop @ <?php echo "$file.$type"; ?></title>
    <style>
        html {
            height: 100%
        }

        body {
            height: 100%;
            background: rgba(14, 14, 16);
            color: rgba(247, 247, 247);
            font-size: 15px;
            text-align: center;
            display: flex;
            justify-content: safe center;
            align-items: safe center;
            width: 95%;
            max-width: 100%;
            margin: 0 auto
        }

        .image {
            max-width: 100vh;
            max-height: 150vh
        }
    </style>
</head>

<body>
    <a href="<?php echo $serverurl; ?>">
        <?php if ($type == "mp4" || $type == "webm" || $type == "mov") { ?>
            <video width="500px" controls>
                <source src="<?php echo $serverurl; ?>" type="video/mp4">
                Your browser does not support HTML video.
            </video>
        <?php } ?>
        <?php if ($type == "png" || $type == "jpeg" || $type == "jpg" || $type == "gif") { ?>
            <img src="<?php echo $serverurl; ?>" class="image">
        <?php } ?>
    </a>
</body>

</html>