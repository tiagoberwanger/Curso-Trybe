CREATE DATABASE zoo;

USE zoo;
CREATE TABLE animals (
id INT(11) PRIMARY KEY NOT NULL auto_increment,
name VARCHAR(50) NOT NULL,
specie VARCHAR(50) NOT NULL,
sex VARCHAR(10) NOT NULL,
age INT NOT NULL,
location VARCHAR(100) NOT NULL,
caregiver_id INT NOT NULL,
FOREIGN KEY (caregiver_id) references caregivers (id)
);

USE zoo;
CREATE TABLE caregivers (
id INT(11) PRIMARY KEY NOT NULL auto_increment,
name VARCHAR(50) NOT NULL,
manager_id INT NOT NULL,
FOREIGN KEY (manager_id) references managers (id)
);

USE zoo;
CREATE TABLE managers (
id INT(11) PRIMARY KEY NOT NULL auto_increment,
name VARCHAR(50) NOT NULL
); 