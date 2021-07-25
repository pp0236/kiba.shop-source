<?php

class api
{

    static function error($msg)
    {
        echo '
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link href="/assets/vanillatoasts.css" rel="stylesheet">
        <script src="/assets/vanillatoasts.js"></script>
        <script>
        $(document).ready(function() {
                VanillaToasts.create({
                title: "",
                text: "' . $msg . '",
                type: "error",
                timeout: 1750
            });
        });
        </script>';

    }

    static function success($msg)
    {

        echo '
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link href="/assets/vanillatoasts.css" rel="stylesheet">
        <script src="/assets/vanillatoasts.js"></script>
        <script>
        $(document).ready(function() {
            VanillaToasts.create({
                title: "",
                text: "' . $msg . '",
                type: "success",
                timeout: 1750
            });
        });
        </script>';
    }



    public static function random_string($length = 10, $keyspace = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'): string
    {
        $out = '';

        for ($i = 0; $i < $length; $i++) {
            $rand_index = random_int(0, strlen($keyspace) - 1);

            $out .= $keyspace[$rand_index];
        }

        return $out;
    }

    static function get_ip()
    {
        if (isset($_SERVER['HTTP_X_REAL_IP']))
            return $_SERVER['HTTP_X_REAL_IP'];
        else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            return $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if (isset($_SERVER['REMOTE_ADDR']))
            return $_SERVER['REMOTE_ADDR'];
        else
            return 'unknown';
    }

    public static function display_pr_tabs(): void
    {
        $tabs = array(
            ['Users', 'users.php', 'icon-contacts-app'],
            ['Tokens', 'tokens.php', 'icon-editors'],
            ['Vars', 'vars.php', 'icon-forms-basic'],
            ['Files', 'files.php', 'icon-addnew'],
            ['Logs', 'logs.php', 'icon-editor-code'],
            ['Settings', 'settings.php', 'icon-profilepage']
        );
        foreach ($tabs as $tab) { ?>
            <li class="dt-side-nav__item">
                <a href="<?= $tab[1] ?>" class="dt-side-nav__link">
                    <i class="icon <?= $tab[2] ?> icon-fw icon-lg"></i>
                    <span class="dt-side-nav__text"><?= $tab[0] ?></span>
                </a>
            </li>
<?php }
    }
}

class encryption
{
    static function encrypt($str)
    {
        return base64_encode(encryption::caesar(base64_encode($str), 8));
    }

    static function decrypt($str)
    {
        return base64_decode(encryption::decaesar(base64_decode($str), 8));
    }

    static function caesar($str, $n)
    {
        $ret = "";
        for ($i = 0, $l = strlen($str); $i < $l; ++$i) {
            $c = ord($str[$i]);
            if (97 <= $c && $c < 123) {
                $ret .= chr(($c + $n + 7) % 26 + 97);
            } else if (65 <= $c && $c < 91) {
                $ret .= chr(($c + $n + 13) % 26 + 65);
            } else {
                $ret .= $str[$i];
            }
        }
        return $ret;
    }

    static function decaesar($str, $n)
    {
        return encryption::caesar($str, 26 - $n);
    }

    static function openssl_crypto($string, $key = "predefined_key", $iv = "predefined_iv")
    {
        return openssl_encrypt($string, "AES-256-CFB", md5($key), 0, substr(md5($iv), OPENSSL_ZERO_PADDING, 16));
    }

    static function openssl_decrypto($string, $key = "predefined_key", $iv = "predefined_iv")
    {
        return openssl_decrypt($string, "AES-256-CFB", md5($key), 0, substr(md5($iv), OPENSSL_ZERO_PADDING, 16));
    }

    static function anti_sql_string($string)
    {
        $string = str_replace(array("'", 'Â´', '"', 'SELECT FROM', 'SELECT * FROM', 'ONION', 'union', 'UNION', 'UDPATE users SET', 'WHERE username', 'DROP TABLE', '0x50', 'mid((select', 'union(((((((', 'concat(0x', 'concat(', 'OR boolean', 'or HAVING', "OR '1", '0x3c62723e3c62723e3c62723e', '0x3c696d67207372633d22', '+#1q%0AuNiOn all#qa%0A#%0AsEleCt', 'unhex(hex(Concat(', 'Table_schema,0x3e,', '0x00', '0x08', '0x09', '0x0a', '0x0d', '0x1a', '0x22', '0x25', '0x27', '0x5c', '0x5f',), "", $string);
        $string = str_replace(array('<img', 'img>', '<image', 'document.cookie', 'onerror()', 'script>', '<script', 'alert(', 'window.', 'String.fromCharCode(', 'javascript:', 'onmouseover="', '<BODY onload', '<style', 'svg onload'), "", $string);
        $string = str_replace(array("script", "java", "applet", "iframe", "meta", "object", "html", "<", ">", ";", "'", "%", "&"), "", $string);
        $string = str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $string);
        $string = htmlspecialchars($string);
        $string = stripslashes($string);
        $string = htmlentities($string);
        $string = strip_tags($string);
        return $string;
    }
}
?>