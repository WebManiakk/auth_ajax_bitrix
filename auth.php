<?
include($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

global $USER;
if (!is_object($USER)) $USER = new CUser;
$arAuthResult = $USER->Login($_REQUEST['login'], $_REQUEST['pass'], "Y");
$APPLICATION->arAuthResult = $arAuthResult;
exit(json_encode($arAuthResult));
