DROP DATABASE IF EXISTS poputchik_ufa;
CREATE DATABASE poputchik_ufa CHARACTER SET utf8 COLLATE utf8_general_ci;
USE poputchik_ufa;

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` TEXT,
	`phone` VARCHAR(10),
	`pin` VARCHAR(4)
);

CREATE TABLE `auth_users` (
	`generated_id` VARCHAR(10) PRIMARY KEY,
	`id_user` INT,
	`hash` TEXT,
	FOREIGN KEY (`id_user`) REFERENCES `users`(`id`)
);

INSERT INTO users (id, name, phone, pin) VALUES(1, "Ilnur", "9874774911", "1234");
INSERT INTO auth_users(id_user, generated_id, hash) VALUES(1, "1234567890", MD5("1234567890" + "1234"));

SELECT hash FROM auth_users;