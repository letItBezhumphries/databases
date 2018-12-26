CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text VARCHAR(150) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) UNIQUE,
  PRIMARY KEY(id)
);


-- ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);

/* Create other tables and define schemas for them here! *

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

