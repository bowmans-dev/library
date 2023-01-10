<?php 
  $mysqli = NEW MySQLi ('localhost', 'root', 'root', 'regions');
  $resultSet = $mysqli->query("SELECT name FROM antarctica");
?> 

<select id="selectAntarctica" name="antarctica" selected>
  
  <option value="" selected>Antarctica<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>