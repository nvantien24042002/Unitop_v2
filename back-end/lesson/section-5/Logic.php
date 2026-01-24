<?php
$x = 10;
$y = 3;
if ($x > 5 and $y < 6) {
    echo "OK";
}
function check_even($x){
    if($x%2==0){
        return true;
    }return false;
}
if (!check_even(5)) {
    echo "Đây là số lẻ";
}
?>