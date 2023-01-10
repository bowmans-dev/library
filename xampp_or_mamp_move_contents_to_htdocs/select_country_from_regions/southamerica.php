<?php 
  $mysqli = NEW MySQLi ('localhost', 'root', 'root', 'regions');
  $resultSet = $mysqli->query("SELECT name FROM southamerica");
?> 

<select id="selectSouthAmerica" name="southamerica" selected>
  
  <option value="" selected>South America<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>