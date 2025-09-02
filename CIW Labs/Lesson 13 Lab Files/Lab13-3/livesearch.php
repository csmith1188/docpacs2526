<?php
$array = [
    "Javascript", "Php", "React", "Dot NET", "ASP", "MySQL",
    "Node", "Mongo DB", "Angular", "JSP", "JAVA", "C",
    "C#", "C++", "Python", "Ruby"
];

function array_search_partial(array $arr, string $keyword): void {
    $keyword = strtolower($keyword);
    foreach ($arr as $str) {
        if (stripos($str, $keyword) !== false) {
            echo htmlspecialchars($str, ENT_QUOTES, 'UTF-8') . "<br>";
        }
    }
}

if (isset($_GET['q'])) {
    array_search_partial($array, $_GET['q']);
}
?>
