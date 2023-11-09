CREATE DATABASE  IF NOT EXISTS `astroseiza` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `astroseiza`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: astroseiza
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (2,'tesst','neonoir@dev.com','$2b$10$kp9Ja7GwYdLqB3VAr0ZQaOa2uWvpvhtNfaDpRl','mi fotito');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `foto` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (6,'tes1t','test','$2b$10$DXz2zbAAkDm1NBEA4jzFB.pqKx3.so0dSTpqvf','neonoir@hotmaiasdadl.com','mi fotito'),(5,'tes1t','test','$2b$10$emb/bWKjGwOzvwjMlkTEL.RF/h/VIVVin1Ds4K','neonoir@hotmail.com','mi fotito'),(7,'Wilberth Antony','NeoNoir','$2b$10$vmsGNdCdP1uCjbsGINxXe.0MEl.lWxFGy1pBGK','neroxartz1@gmail.com',NULL),(8,'Wilberth Antony','NeoNoir1','$2b$10$X9e9wjxO6rNuPTbyNYrCROx.FoMYMoX4dSGwLQ','asda@gmail.com',NULL),(9,'Wilberth Antony','NeoNoir','$2b$10$AW29r083pXfGPLduXAmDJOGHHiulnSyjuKGwjx','22393239@utcancun.edu.mx',NULL),(10,'tes1t','tesst','$2b$10$rGdkKpGnVvkDbnRia3KByOvJAx7KiYmrFrg/KB','neonoir@hotmaisasdadl.com','mi fotito'),(11,'tes1t','tesst','$2b$10$hi0KyCnbhIHM6YZiWN5h6unIfP4OsvYxCmVeJk','neonoir@hotmaisasdasaddl.com','mi fotito'),(12,'Wilberth Antony12312','asdadadasdasad','$2b$10$bzPL4pjRQmpndhmtIwWj/.PKgVcpEUwXhGyMsO','NeoNoir@gmaiasdadsadasdasl.com',NULL),(13,'tes1t','tesst','$2b$10$9pfu9GVSClrRf4l77PfNIuvH0Nn3pmuV1FFEm5','neonoir@test.com','mi fotito'),(14,'Wilberth Antony','NeoNoir','$2b$10$G1OR9qjtFcXdzB.3ScqhtOYCFAVvv4p9sAJ9cE','test@test.com',NULL),(15,'tes1t','tesst','$2b$10$Rbva5vS9M7v2mm5fp0ygOuQCDTJxMKLfbusG30','neonoir@dev.com','mi fotito');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08 22:21:02
