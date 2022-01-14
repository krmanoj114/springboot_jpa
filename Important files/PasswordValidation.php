<?php
function hex_to_base64($hex){
    $return = '';
    foreach(str_split($hex,2) as $pair){
        $return .= chr(hexdec($pair));
    }
    return base64_encode($return);
}
$passwordClear = "12345678a";
$salt = "52e5d23e49e5a0bf";
$hash = hash("sha1",$salt.".".$passwordClear);

//$passwordClear = "ZGWaC7Yy5xTZ9G4aBmP4";
//$salt = "yS";
//$hash = hash("sha256",$salt.$passwordClear);
//hashedPassword = z0xVtRFo8c2IosZHqYyPlWGS+2y51FRxS+97suduiGQ=

//$passwordClear = "testtest79";
//$salt = "Xg8ahwggx0nx2F7g2iUJZHvKJib147Lo";
//$hash = hash("md5",$salt.$passwordClear);
//hashedPassword = MxSxaLoRNQGHOTa/NX9huA==

$hashedPassword = hex_to_base64($hash);
echo PHP_EOL.$hashedPassword.PHP_EOL;
?>
