<?php
$a = 15;
$b = 4;
$total = $a + $b;
echo "Tổng: {$a} + {$b} = ".$total."<br>";
echo "Hiệu: ".$a - $b ."<br>";
echo "Nhân: ".$a * $b ."<br>";
echo "Chia: ".$a / $b ."<br>";
echo "Số dư: ".$a % $b ."<br>";
echo "Luỹ Thừa: ".$a ** $b ."<br>";
$price = 100;
$tax = 10;
$total_1 = $price + $tax;
echo $total_1;

$unitPrice = 50;
$quantity = 3;
$totalCost = $unitPrice * $quantity;
echo "<br>";
echo $totalCost;

$total_product = 5;
$price = 200;
$discount_price = 50;

$result_price = $price * $total_product;

$result_discountPrice = $result_price - $discount_price;
?>