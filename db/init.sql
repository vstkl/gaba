CREATE USER 'sammy'@'localhost' IDENTIFIED WITH mysql_native_password BY 'heslo';
CREATE DATABASE qr_code_service;

GRANT PRIVILEGE ON qr_code_service.*  TO 'sammy'@'localhost';

USE qr_code_service;

CREATE TABLE qr_codes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  location VARCHAR(255),
  image TEXT
);

CREATE TABLE stories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qr_code_id INT,
  story TEXT,
  FOREIGN KEY (qr_code_id) REFERENCES qr_codes(id)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  qr_code_id INT,
  review TEXT,
  FOREIGN KEY (qr_code_id) REFERENCES qr_codes(id)
);
