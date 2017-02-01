<?php
$filename=$_GET['filename'];
header("Content-Disposition: attachment; filename=$filename");
readfile($filename);
?>
