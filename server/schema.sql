DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` TEXT NULL DEFAULT NULL,
  `chatroom_id` INTEGER NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY (`user_id`)
);


/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `friendsRelationship`;

CREATE TABLE `friendsRelationship` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `friend` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `chatroom`;

CREATE TABLE `chatroom` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomname` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `messages` ADD FOREIGN KEY (chatroom_id) REFERENCES `chatroom` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `friendsRelationship` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);


/*  Execute this file from the command line by typing:
 *   for ubuntu/linux: sudo mysql -u root < server/schema.sql
 *   for mac: mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

