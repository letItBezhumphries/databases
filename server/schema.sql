CREATE DATABASE chat;

USE chat;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(25),
  PRIMARY KEY (`id`)
);

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255),
  `roomname` VARCHAR(255),
  `message` VARCHAR(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomname` VARCHAR(25),
  PRIMARY KEY (`id`)
);

-- ALTER TABLE `friends` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (room) REFERENCES `rooms` (`id`);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

