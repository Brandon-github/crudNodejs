-- Sintaxis SQL - MYSQL WORKBENCH 8.0.25

-- DROP DATABASE IF EXISTS app;

CREATE DATABASE IF NOT EXISTS app;

USE app;

-- Create Tables
CREATE TABLE roles(
	id INT NOT NULL,
    name_role VARCHAR(90) NOT NULL
);

ALTER TABLE roles
	MODIFY id INT NOT NULL AUTO_INCREMENT,
    ADD CONSTRAINT PK_ROLE PRIMARY KEY(id);

CREATE TABLE users(
	id INT NOT NULL,
    name_user VARCHAR(120) NOT NULL,
    email_user VARCHAR(120) NOT NULL,
    age_user INT NOT NULL,
    id_role INT NOT NULL
);

ALTER TABLE users
	MODIFY id INT NOT NULL AUTO_INCREMENT,
    ADD CONSTRAINT PK_USER PRIMARY KEY(id),
    ADD CONSTRAINT FK_ROLE FOREIGN KEY(id_role) 
		REFERENCES roles(id);
        
-- Insert Dates
INSERT INTO roles(name_role)
	VALUES
    ('Admin'),
    ('Assistant'),
    ('Guest');
    
INSERT INTO users(name_user, email_user, age_user, id_role)
	VALUES
    ('Juan', 'Juan42@gmail.com', 42, 1),
    ('Maria', 'Maria58@gmail.com', 34, 2),
    ('Pedro', 'Pedro065@gmail.com', 56, 1),
    ('Sara', 'Sara265@gmail.com', 27, 3),
    ('Fernando', 'Fern42@gmail.com', 32, 3);
        

        
