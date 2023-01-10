<link rel="stylesheet" href="style.css">

<?php 
  $mysqli = NEW MySQLi ('localhost', 'root', 'root', 'regions');
  $resultSet = $mysqli->query("SELECT name FROM africa");
?> 

<select id="selectAfrica" name="africa" selected>
  
  <option value="" selected>Africa<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>


<?php 
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


<?php 
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


<?php 
  $resultSet = $mysqli->query("SELECT name FROM europe");
?> 

<select id="selectEurope" name="europe" selected>

  <option value="" selected>Europe<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>


<?php 
  $resultSet = $mysqli->query("SELECT name FROM northamerica");
?> 

<select id="selectNorthAmerica" name="northamerica" selected>

  <option value="" selected>North America<option>
  <?php
    while($rows = $resultSet->fetch_assoc())
    {
      $name = $rows['name'];
      echo "<option>$name</option>";
    }
  ?>
</select>


<?php 
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


<?php 
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