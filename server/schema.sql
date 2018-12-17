CREATE DATABASE chat;

USE chat;

CREATE TABLE `users` (
`id` INTEGER,
  `name` VARCHAR(25),
  `messages` INTEGER(7),
  PRIMARY KEY (`id`)
);

CREATE TABLE `friends` (
  `id` INTEGER,
  `name` VARCHAR(25),
  `user` INTEGER(10),
  PRIMARY KEY (`id`)
);

CREATE TABLE `messages` (
  `id` INTEGER,
  `text` VARCHAR(255),
  `user` INTEGER(10),
  `room` INTEGER,
  PRIMARY KEY (`id`)
);

CREATE TABLE `rooms` (
  `id` INTEGER,
  `roomName` VARCHAR(25),
  `messages` INTEGER,
  PRIMARY KEY (`id`)
);

ALTER TABLE `friends` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (room) REFERENCES `rooms` (`id`);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

