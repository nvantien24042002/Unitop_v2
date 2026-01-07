<?php

// === KIỂU DỮ LIỆU MẢNG ===
# Mảng 1 chiều
#Mảng số chẵn từ 0 đến 10
$listEven = [0,2,4,6,8];
echo "<pre>";
print_r($listEven);
echo "</pre>";
#Mảng nhiều chiều
/*
  ID
  Tên 
  Tuổi

*/
$list_user = array(
    1 => array(
        'id'=>1,
        'fullname'=>'Nguyễn Văn Tiến',
        'age'=>30
    ),
    2 =>array(
        'id'=>2,
        'fullname'=>'Nguyễn Văn A',
        'age'=>20
    ),
);

echo "<pre>";
print_r($list_user);
echo "</pre>";