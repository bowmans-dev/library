<?php 
  $mysqli = NEW MySQLi ('localhost', 'root', 'root', 'regions');
  $resultSet = $mysqli->query("SELECT name FROM asia");
?> 

<select id="selectAsia" name="asia" selected>
  
  <option value="" selected>Asia<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>