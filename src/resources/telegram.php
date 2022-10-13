<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$guests = $_POST['guests'];
$zone = $_POST['zone'];
$token = "5728801940:AAHA16SVayz6WdeNMCL9X1zskbAdZ_Qb_5A";
$chat_id = "-837008055";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Кол-во гостей' => $guests,
  'Зона посадки:' => $zone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram && $sendToTelegram2) {
//   header('Location: thanks.html');
// } else {
//   echo "Error";
// }
?>
