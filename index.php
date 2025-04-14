<?php
// Zachovej aktuální URL cestu v session, pokud je to potřeba
session_start();
$requestUri = $_SERVER['REQUEST_URI'];

// Pokud soubor ve skutečnosti existuje, zpracuj ho normálně
if(file_exists('.' . $requestUri) && $requestUri != '/') {
    return false;
}

// Přesměruj na index.html
include('index.html');
?> 