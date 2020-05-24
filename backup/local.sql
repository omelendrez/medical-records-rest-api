-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vmr
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `credit` decimal(10,2) DEFAULT '0.00',
  `debit` decimal(10,2) DEFAULT '0.00',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,1,'2020-04-18 00:00:00',0.00,0.00,'2020-05-24 18:32:12','2020-05-24 18:32:12'),(2,1,'2020-05-02 00:00:00',0.00,0.00,'2020-05-24 18:32:31','2020-05-24 18:32:31'),(3,1,'2020-05-11 00:00:00',0.00,0.00,'2020-05-24 18:32:48','2020-05-24 18:32:48'),(4,2,'2020-05-06 00:00:00',0.00,0.00,'2020-05-24 18:35:33','2020-05-24 18:35:33'),(5,2,'2020-05-11 00:00:00',0.00,0.00,'2020-05-24 18:35:58','2020-05-24 18:35:58'),(6,3,'2020-05-09 00:00:00',0.00,0.00,'2020-05-24 18:38:12','2020-05-24 18:38:12'),(7,3,'2020-05-10 00:00:00',0.00,0.00,'2020-05-24 18:38:41','2020-05-24 18:38:41'),(8,4,'2020-05-09 00:00:00',0.00,0.00,'2020-05-24 18:40:13','2020-05-24 18:40:13'),(9,4,'2020-05-09 00:00:00',0.00,0.00,'2020-05-24 18:41:06','2020-05-24 18:41:06');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultations`
--

DROP TABLE IF EXISTS `consultations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `consultations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerId` int(11) DEFAULT NULL,
  `petId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `anamnesis` varchar(500) DEFAULT NULL,
  `clinicalExamination` varchar(500) DEFAULT NULL,
  `diagnosis` varchar(500) DEFAULT NULL,
  `treatment` varchar(500) DEFAULT NULL,
  `treatmentStage` varchar(255) DEFAULT NULL,
  `nextAppointment` datetime DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT '0.00',
  `paymentMethod` varchar(255) DEFAULT '',
  `paid` decimal(10,2) DEFAULT '0.00',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultations`
--

LOCK TABLES `consultations` WRITE;
/*!40000 ALTER TABLE `consultations` DISABLE KEYS */;
INSERT INTO `consultations` VALUES
(1,1,1,'2020-04-18 00:00:00','','','','Quintuple viratec y meltra susp.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:32:12','2020-05-24 18:32:12'),
(2,1,1,'2020-05-02 00:00:00','','','','meltra susp.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:32:31','2020-05-24 18:32:31'),
(3,1,1,'2020-05-11 00:00:00','','','','Quintuple viratec y desp en la casa con pastilla.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:32:48','2020-05-24 18:32:48'),
(4,2,2,'2020-05-06 00:00:00','sin vómitos','mf normal, t 38,2','Distensión abd','Quintuple viratec. ',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:35:33','2020-05-24 18:35:33'),
(5,2,2,'2020-05-11 00:00:00','','','','Desp Meltra comp ⅜ para 3,5 kg.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:35:58','2020-05-24 18:35:58'),
(6,3,3,'2020-05-09 00:00:00','2 diarreas pastosa y luego liquida con sangre, vomito un pedazo de hueso','Examen s/p. ','','Sin vacunas, desp con gotas, . PE + Dexa + Gastrine + Hepaton. Dieta arroz y pollo.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:38:12','2020-05-24 18:38:12'),
(7,3,3,'2020-05-10 00:00:00','','','','Muy bien, no ha defecado. PE y desp con meltra comp para 20 kg. Dieta x tres días más. Control WA.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:38:41','2020-05-24 18:38:41'),
(8,4,4,'2020-05-09 00:00:00','','','','Quintuple y antirrabica mas meltra comp.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:40:13','2020-05-24 18:40:13'),
(9,4,5,'2020-05-09 00:00:00','','','','quintuple y antirrabica más meltra comp.',NULL,NULL,0.00,'',0.00,1,'2020-05-24 18:41:06','2020-05-24 18:41:06');
/*!40000 ALTER TABLE `consultations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT '',
  `phone` varchar(255) DEFAULT '',
  `email` varchar(255) DEFAULT '',
  `observations` varchar(500) DEFAULT '',
  `balance` decimal(10,2) DEFAULT '0.00',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'OTTAVIANELLI AGUSTIN','Tte. Farias 1558 Monobl. 24 Dto 5','2915273551','','',0.00,1,'2020-05-24 18:30:35','2020-05-24 18:30:35'),(2,'PANELO JONATHAN','Posta Rolando 2885','2914353216','','',0.00,1,'2020-05-24 18:33:31','2020-05-24 18:33:31'),(3,'DIMES LIONELA','Bo. Cooperación II, Mza 6 casa 48','2915662123','','',0.00,1,'2020-05-24 18:36:40','2020-05-24 18:36:40'),(4,'RAMÍREZ EDGARDO','Azucena Villa Flor 3163','2915328163','','',0.00,1,'2020-05-24 18:39:19','2020-05-24 18:39:19');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dewormings`
--

DROP TABLE IF EXISTS `dewormings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dewormings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerId` int(11) DEFAULT NULL,
  `petId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `deworming` varchar(500) DEFAULT NULL,
  `nextAppointment` datetime DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT '0.00',
  `paymentMethod` varchar(255) DEFAULT '',
  `paid` decimal(10,2) DEFAULT '0.00',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dewormings`
--

LOCK TABLES `dewormings` WRITE;
/*!40000 ALTER TABLE `dewormings` DISABLE KEYS */;
/*!40000 ALTER TABLE `dewormings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `breed` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `weight` varchar(255) DEFAULT '',
  `birthDate` datetime DEFAULT NULL,
  `observations` varchar(500) DEFAULT '',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (1,1,'CUKI','Can','Shitzu','He','','2020-03-03 00:00:00','',1,'2020-05-24 18:31:22','2020-05-24 18:31:22'),(2,2,'LOKY','Can','Pitbull','Me','','2020-03-22 00:00:00','',1,'2020-05-24 18:34:08','2020-05-24 18:34:08'),(3,3,'LION','Can','Pitbull','Me','','2016-09-22 00:00:00','',1,'2020-05-24 18:37:12','2020-05-24 18:37:12'),(4,4,'TEO','Can ','Mzo','Mc','','2017-01-01 00:00:00','',1,'2020-05-24 18:39:50','2020-05-24 18:39:50'),(5,4,'MIA','Can','Boxer albina','Hc','','2020-01-01 00:00:00','',1,'2020-05-24 18:40:48','2020-05-24 18:40:48');
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20191029223040-create-pet.js'),('20191029223506-create-status.js'),('20191029223541-create-consultation.js'),('20191029223850-create-customer.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statuses`
--

DROP TABLE IF EXISTS `statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `statuses_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccinations`
--

DROP TABLE IF EXISTS `vaccinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vaccinations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customerId` int(11) DEFAULT NULL,
  `petId` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `vaccination` varchar(500) DEFAULT NULL,
  `nextAppointment` datetime DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT '0.00',
  `paymentMethod` varchar(255) DEFAULT '',
  `paid` decimal(10,2) DEFAULT '0.00',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinations`
--

LOCK TABLES `vaccinations` WRITE;
/*!40000 ALTER TABLE `vaccinations` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaccinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'vmr'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-24 15:46:15
