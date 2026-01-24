<?php
$x = 10;
$y = 3;
echo "x = {$x}";
echo "<br>";
echo "y = {$y}";
echo "<br>";
if ($x > $y) {
    echo "{$x} > {$y}";
}elseif($x === $y){
    echo "{$x} = {$y}";
}elseif($x <= $y){
    echo "{$x} <= {$y}";
}elseif($x != $y){
    echo "{$x} != {$y}";
}elseif($x >= $y){
    echo "{$x} >= {$y}";
}
elseif($x === $y){
    echo "{$x} === {$y}";
}

?>