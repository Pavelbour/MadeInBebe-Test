<?php
    try {
        $db = new PDO('mysql:host=localhost;dbname=made_in_bebe;charset=utf8', 'root', '');
        $db->query('CREATE TABLE IF NOT EXISTS zip_codes(code_commune_insse INT NOT NULL, libell_d_acheminement VARCHAR(100) NOT NULL, nom_de_la_commune VARCHAR(100) NOT NULL, code_postal INT NOT NULL, ligne_5 VARCHAR(100)) ENGINE=InnoDB');
        echo 'La nouvelle table a été créée.';
        $db = null;
    } catch (PDOException $e) {
        echo 'Il est impossible de créer une table.';
        die();
    }