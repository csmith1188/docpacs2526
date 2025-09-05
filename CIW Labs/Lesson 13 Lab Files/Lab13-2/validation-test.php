<?php
header('Content-Type: text/html; charset=utf-8');

$field = $_GET['field'] ?? '';
$value = trim($_GET['query'] ?? '');

function safeEcho(string $text): void {
    echo htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

if ($field === 'username') {
    if (mb_strlen($value) < 4) {
        safeEcho('Must be 3+ letters');
    } else {
        echo '<span>Valid</span>';
    }
} elseif ($field === 'password') {
    if (mb_strlen($value) < 6) {
        safeEcho('Password too short');
    } else {
        echo '<span>Strong</span>';
    }
} elseif ($field === 'email') {
    if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
        safeEcho('Invalid email');
    } else {
        echo '<span>Valid</span>';
    }
} elseif ($field === 'website') {
    // Validate URL with scheme (http, https, ftp) or www.
    $pattern = '/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i';
    if (!preg_match($pattern, $value)) {
        safeEcho('Invalid website');
    } else {
        echo '<span>Valid</span>';
    }
} else {
    safeEcho('Invalid field');
}
?>
