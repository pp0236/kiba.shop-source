<?php
if (!isset($_SESSION)) {
    session_start(array(
        'name' => 'sid'
    ));
}
