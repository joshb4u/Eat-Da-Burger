DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR (200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


-- USED THE FOLLOWING CODE FOR DEPLOYING TO HEROKU
-- ---------------------------------------------------

-- CREATE TABLE burgers (
--     id int NOT NULL AUTO_INCREMENT,
--     burgerName VARCHAR (200) NOT NULL,
--     devoured BOOLEAN DEFAULT false,
--     createdAt TIMESTAMP NOT NULL, // Need to set this to DEFAULT CURRENT TIMESTAMP
--     PRIMARY KEY (id)
--     );