-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (x86_64)
--
-- Host: localhost    Database: qr_code_service
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `qr_codes`
--

DROP TABLE IF EXISTS `qr_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qr_codes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `image` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qr_codes`
--

LOCK TABLES `qr_codes` WRITE;
/*!40000 ALTER TABLE `qr_codes` DISABLE KEYS */;
INSERT INTO `qr_codes` VALUES (1,'Eiffel Tower','iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAAAAADmswX/AAABI0lEQVR42u3aQY6DMAwFUO5/6XY5UlWn3xACjF52KJH1NlYcm+11t7URERERERERERER/U/R9nt9nPv77EchIloqqpOhEn3bDaIQEa0XlRlWZlM/ChHR3UTjDCMieqqoLIiIiG4uCnbLOv6Kio2IaNqbNr071r2yiYhm9CHHKXVFZ5SIKLtFts4qA5SVEhHRelHQZEyb8GUoIqJVon4Xpt9wJyK6UpQ+TtPUm1SxERHtF7VGRIdLKCKiVaI0CdOC6FDlT0Q0QzTnH63xbbOjW0NENEO08zUwjnL2VJSIqNGtac3xx0lIRPQYUXoDTZodERGdL0oPB/1KIqKlonQ3/W38+DSLiOigqP+mDeZJwaVCRHSa6NJFRERERERERERE9HzRGxjNq4QHbVmfAAAAAElFTkSuQmCC'),(2,'Eiffel Tower','iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAAAAADmswX/AAABHUlEQVR42u3aOQ4DIQwAwP3/p5MuFbDmsDeJhioSWjKNhQ+u17eti4iIiIiIiIiIiOg/Rdf96n6xcwoRUYGoHwyf3dav+VOIiOpFrdhohVQr4KZOISIiIiJKFgV2iYi+UhTdjeZM2RkbEdGJmnYqwkqqbCKihD7k+J+e6IwSEU3cCdE+ZPfGuLleiIhSRePEPZLoTMuJiHJFgeq2q4yiV/MjIqITFWQ3QAK9l5LoJyI6lvlHc6H5Dg4R0ZOicVdnm0VElCZa7SDeD4vqXo0REW3OjgJN+OhAlIioShSd90/F2mpNS0RUJBoXAserbCKiItFOzzEx+omIEt5oLTqIiKpE0Tda4wfk8y0bIqI00aOLiIiIiIiIiIiI6PdFb4hXz3xH0RarAAAAAElFTkSuQmCC'),(3,'Eiffel Tower','iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAAAAADmswX/AAABHElEQVR42u3bOw7DIAwA0Nz/0u3YhRA7gEmqx1Y1gdfBwh/1+DxtHURERERERERERET/KTqu1++51hupXYiISkXnwdA48/RjYBcionpRNMJah0R3ISJ6mqh17xARvV80nD0REW0SBb49zeN3ZGxERAtq2mgk1lXZREQDfcPu/js6o0REsVskGi83q1siolJR/8x+HzJAICKqF/XfC4yIUvFHRFQqujkJSmX5RESlomh6k8qjojYiomWikXK2f/rqbg0R0bQ+ZOqiGYp+IqIZonwuFK0aFk6ziIhiovzEqB+ERETvEgVuoEk1LRHRelH04X5aRURUL7o5M53eYScimiZK1bSpf/5c/GAiolWirYuIiIiIiIiIiIjo/aIv4zd5tkQmvOEAAAAASUVORK5CYII='),(4,'Eiffel Tower','iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAAAAADmswX/AAABFklEQVR42u3aOxLCMAwFwNz/0tBRMPlItqUEZt06I7ZR8JOzvZ62NiIiIiIiIiIiIqL/FG3X67jgZ3ewChFRrSj6m4HnUrtERA2ivd74qrX3cL4KEREREVGxKLBLRPRI0Q2nJyKiWlEgjaY6rCVlExEtm0OmZjktk1Eiotj5KPDvcNE+R1mBiKhVFAisgdNOXk5EVCtak2TzXiKiBtFghxX2GhHRsnd29GyfyrlT3U9ENC5KxdnAtVGgMYmIGkT5CeJ5d6amOkREtaLouSflmJ8fERGtEOVv9AO2RZmWiKjpG63mlE1EVP/OHpy1ExHdJJq+J0pVJiJqEEW/0ToPAssno0RE9fPskkVERERERERERET0+6I3aqQBWR/MCYQAAAAASUVORK5CYII=');
/*!40000 ALTER TABLE `qr_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qr_code_id` int DEFAULT NULL,
  `review` text,
  PRIMARY KEY (`id`),
  KEY `qr_code_id` (`qr_code_id`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`qr_code_id`) REFERENCES `qr_codes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qr_code_id` int DEFAULT NULL,
  `story` text,
  PRIMARY KEY (`id`),
  KEY `qr_code_id` (`qr_code_id`),
  CONSTRAINT `stories_ibfk_1` FOREIGN KEY (`qr_code_id`) REFERENCES `qr_codes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-05 13:09:53
