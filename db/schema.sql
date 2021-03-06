DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- Creating burger database:
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);
