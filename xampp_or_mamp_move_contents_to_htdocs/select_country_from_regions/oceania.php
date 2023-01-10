<?php 
  $mysqli = NEW MySQLi ('localhost', 'root', 'root', 'regions');
  $resultSet = $mysqli->query("SELECT name FROM oceania");
?> 

<select id="selectOceania" name="oceania" selected>

  <option value="" selected >Oceania<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>