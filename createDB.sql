DROP DATABASE IF EXISTS poputchik_ufa;
CREATE DATABASE poputchik_ufa CHARACTER SET utf8 COLLATE utf8_general_ci;
USE poputchik_ufa;

CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`login` TEXT,
	`name` TEXT,
	`pin` INT,
	`phone` VARCHAR(10)
);

CREATE TABLE `auth_users` (
<<<<<<< HEAD
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`generated_id` VARCHAR(10) UNIQUE,
=======
	`generated_id` VARCHAR(10) PRIMARY KEY,
>>>>>>> e6036f1cdc85295513c47ef8edb239faec24ec08
	`id_user` INT,
	`hash` TEXT,
	FOREIGN KEY (`id_user`) REFERENCES `users`(`id`)
);

INSERT INTO users (id, name, phone, pin) VALUES(1, "Ilnur", "9874774911", 1234);
INSERT INTO auth_users(id_user, generated_id, hash) VALUES(1, "1234567890", MD5("1234567890" + "1234"));

SELECT hash FROM auth_users;
