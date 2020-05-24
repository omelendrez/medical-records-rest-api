-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: us-cdbr-east-06.cleardb.net    Database: heroku_b3627cd1b200890
-- ------------------------------------------------------
-- Server version	5.5.62-log

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
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
  `diagnosis` varchar(255) DEFAULT NULL,
  `treatment` varchar(5000) DEFAULT NULL,
  `treatmentStage` varchar(45) DEFAULT NULL,
  `vaccination` varchar(500) DEFAULT NULL,
  `deworming` varchar(500) DEFAULT NULL,
  `nextAppointment` datetime DEFAULT NULL,
  `observations` varchar(5000) DEFAULT '',
  `amount` decimal(10,2) DEFAULT '0.00',
  `paymentMethod` varchar(255) DEFAULT '',
  `paid` decimal(10,2) DEFAULT '0.00',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1081 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultations`
--

LOCK TABLES `consultations` WRITE;
/*!40000 ALTER TABLE `consultations` DISABLE KEYS */;
INSERT INTO `consultations` VALUES (1,1,1,'2019-12-22 00:00:00',NULL,NULL,'Traumatismo bilateral? ','Aumento de tamaño del globo ocular izq, con opacidad corneal blanquecina y manchas marrones oscuras en iris, pobre respuesta pupilar, a media apertura, fluoresceína positivo para úlcera córnea en ese mismo ojo. Ojo derecho de menor tamaño q el izq, con menos opacidad corneal, iris se ve normal, buena respuesta pupilar a la luz, fluoresceína positivo para erosión corneal. Resto del examen clínico normal. Traumatismo bilateral? Raro. Por ahora Softal cada 8 horas y control mañana.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:23:47','2020-05-03 18:23:47'),(11,1,1,'2019-12-24 00:00:00',NULL,NULL,'.','No mejora, indico Cicatrizante ocular cada 12 hs.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:26:26','2020-05-03 18:26:26'),(21,1,1,'2020-01-03 00:00:00',NULL,NULL,'.','Mucho mejor, Fluoresceína negativo en ambos ojos. Sigue igual hasta terminar cicatrizante y control.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:27:18','2020-05-15 23:52:20'),(31,11,11,'2020-05-02 00:00:00',NULL,NULL,'Prolapso rectal','.',NULL,NULL,NULL,NULL,'',234.00,'1',234.00,1,'2020-05-03 18:30:04','2020-05-15 23:47:23'),(41,21,21,'2019-11-20 00:00:00',NULL,NULL,'.','PV 1 kg. Desparasitación.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:30:40','2020-05-03 18:30:40'),(51,31,31,'2019-11-01 00:00:00',NULL,NULL,'Alopecía  en MP caudal, sin prurito, sin eritema. Palpación abdominal a caudal inflamación intestinal o ganglios. DP sarna notoédrica. DD enf. metabólica, hormonal. ','Rp/ 0,3 IVM. ',NULL,NULL,NULL,'2019-11-08 21:00:00','',0.00,'',0.00,1,'2020-05-03 18:34:10','2020-05-10 16:38:50'),(61,51,41,'2020-05-01 00:00:00',NULL,NULL,'Tenesmo rectal','MF pastosa con gotas de sangre, tenesmo rectal. Sacos anales bien, buen animo, T 38,6, palpación abd gas. PE mas Dexa y Meltra comp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:34:49','2020-05-03 18:34:49'),(71,31,31,'2019-11-08 00:00:00',NULL,NULL,'.','0,3 ml IVM SC. Bañar con jabón Fauna cada 4 días, dejar actuar 5 min.',NULL,NULL,NULL,'2019-11-19 21:00:00','',0.00,'',0.00,1,'2020-05-03 18:34:53','2020-05-10 16:38:52'),(81,61,61,'2020-02-20 00:00:00',NULL,NULL,'.','1er dosis Quíntuple. La trajeron a desparasitar la semana pasada, pero no está cargada. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:35:02','2020-05-03 18:35:02'),(91,71,71,'2020-04-30 00:00:00',NULL,NULL,'.','Leve claudicación mpi, tumefacción blanda sin crepitación ni dolor. DP edema por picadura. Dexa. Control WA.',NULL,NULL,NULL,NULL,'',100.00,'1',100.00,1,'2020-05-03 18:39:53','2020-05-15 23:52:22'),(101,41,51,'2020-04-14 00:00:00',NULL,NULL,'Hace un mes le salió el primer bulto blando en pectoral izq, luego en brazo izq (apariencia lipoma y mastocitoma) y hace 4 días se le hinchó lado izq de la cara, región cigomática, tumefacción dura y drena algo de pus.',' DP Fístula PM. Penicilina E + Dexa y sigue en la casa con Enzimol + Enro. Control WA.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:40:11','2020-05-03 18:40:11'),(111,41,51,'2020-04-19 00:00:00',NULL,NULL,'Control WA de diez, ha desinflamado casi por completo. ','.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:41:23','2020-05-03 18:50:37'),(121,81,81,'2020-04-30 00:00:00',NULL,NULL,'.','2da quint y desp con meltra comp. Recomendé cirugía colocación puntos correctivos de párpados provisorios.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:42:30','2020-05-03 18:42:30'),(131,31,31,'2019-11-20 00:00:00',NULL,NULL,'.','0,3 ml IVM sc.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:42:57','2020-05-03 18:42:57'),(141,31,31,'2019-12-12 00:00:00',NULL,NULL,'.','0,3 ml IVM SC. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:43:17','2020-05-03 18:43:17'),(151,101,91,'2020-04-30 00:00:00',NULL,NULL,'Vacunacion','1er quintuple. Ya fue desp 3 veces por la dueña. Dar un refuerzo junto con ar y nada más porq tiene más de 4 meses.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:46:05','2020-05-03 18:46:05'),(161,111,101,'2020-03-02 00:00:00',NULL,NULL,'.','PV 4 kg, Basken susp, Quíntuple Vanguard.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:46:25','2020-05-03 18:46:25'),(171,111,101,'2020-04-01 00:00:00',NULL,NULL,'.','PV 7 kg, meltra comp. Quíntuple Viratec.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:46:51','2020-05-03 18:46:51'),(181,91,111,'2020-04-13 00:00:00',NULL,NULL,'.','Toltrazol\n',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:48:03','2020-05-03 18:48:03'),(191,91,111,'2020-04-17 00:00:00',NULL,NULL,'.','Quintuple viratec.\n',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:48:31','2020-05-03 18:48:31'),(201,91,111,'2020-04-27 00:00:00',NULL,NULL,'.','Desparasitación meltra comprimidos',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:49:03','2020-05-03 18:49:03'),(211,121,121,'2020-04-20 00:00:00',NULL,NULL,'Vacunacion','2da dosis quintuple y desp Meltra comp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:49:12','2020-05-03 18:49:12'),(221,111,101,'2020-04-25 00:00:00',NULL,NULL,'.','Quíntuple Viratec + AR. Ya tiene 3 desparasitaciones.',NULL,NULL,NULL,NULL,'La próx en Julio y vacunas próx año.',0.00,'',0.00,1,'2020-05-03 18:49:31','2020-05-03 18:49:31'),(231,131,131,'2020-04-28 00:00:00',NULL,NULL,'Vacunacion','Hoy 2da quíntuple Viratec y última desp de cachorro con Alfa C comp. ',NULL,NULL,NULL,NULL,'Tiene una primera quíntuple Vanguard y dos desparasitaciones con Toltrazol Plus susp anteriores.',0.00,'',0.00,1,'2020-05-03 18:53:09','2020-05-03 18:53:09'),(241,171,161,'2020-02-17 00:00:00',NULL,NULL,'Vacunacion','1er quíntuple. Meltra comp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:54:21','2020-05-03 18:54:21'),(251,151,151,'2019-11-11 00:00:00',NULL,NULL,'.','Reacción alérgica en zona del hocico, alrededor de la nariz. Prurito. Rp/ Dexametasona SC y sigue con Prednisolona 40 mg cada 24 hs por 4 días y después 20 mg cada 24 hs.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:55:07','2020-05-03 18:55:07'),(261,161,171,'2020-04-17 00:00:00',NULL,NULL,'.','PV aprox 2 kg, Toltrazol plus susp, quíntuple Viratec.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:55:18','2020-05-03 18:55:18'),(271,141,141,'2019-12-19 00:00:00',NULL,NULL,'Consulta por manqueo (claudicación leve MAD), además le cuesta levantarse cuando está echado y le cuesta recuperarse de sus caminatas al parque. Está en sobrepeso CC 4,5/5 (debe pesar cerca de 50 kg), tumefacción de ambos garrones, a la palpación líquido.','DP Osteoartritis por sobrecarga de peso, además de la raza y edad. Rp/ 8 mg Dexametasona + 60 mg Tramadol SC. Indico 20 mg Prednisolona cada 24 hs por cuatro días y luego a días alternos + 1 comp Artrin cada 24 hs por 2 meses. Control en 48 hs para evaluar respuesta al AI.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:55:50','2020-05-03 18:55:50'),(281,141,141,'2019-12-22 00:00:00',NULL,NULL,'.','Mucho mejor, continúa con Artrin por lo menos por un mes y vemos.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:56:21','2020-05-03 18:56:21'),(291,141,141,'2020-04-29 00:00:00',NULL,NULL,'.','Antirrabica mas desparasitacion con meltra comp para 50 kg.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 18:56:39','2020-05-03 18:56:39'),(301,151,191,'2020-03-06 00:00:00',NULL,NULL,'Vacunación','quintuple + Antirrábica peso 27kg.',NULL,NULL,NULL,NULL,'',800.00,'1',800.00,1,'2020-05-03 18:57:24','2020-05-15 23:45:54'),(311,181,181,'2020-04-24 00:00:00',NULL,NULL,'Vacunacion','2da dosis quíntuple Viratec, y desparasitación con Meltra comp. ',NULL,NULL,NULL,NULL,'Tiene la primer vacuna viratec colocada en otra vete el 1/4 y la primer desparasitación con Basken susp.',0.00,'',0.00,1,'2020-05-03 18:57:33','2020-05-03 18:57:33'),(321,201,201,'2019-12-17 00:00:00',NULL,NULL,'El viernes comió asado y el sábado empezó con vómitos en vacío líquidos marrón claro, anorexia y decaimiento, sin diarrea. Toma agua y le han dado Reliverán en gotas. Al examen clínico mucosas rosadas, T 37,7, abdomen en tabla no me deja palpar en profund','Rp/ Metoclopramida, Ranitidina, Tramadol y Hepatone. Se indica dieta de arroz con pollo en peq cant. Control en 24 hs. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:00:28','2020-05-03 19:00:28'),(331,211,211,'2020-04-21 00:00:00',NULL,NULL,'Herida desgarrada','Acedan VO + Keta + ace IM. SF con Diazepam porq es muy loca. Herida desgarrada, abierta en MAI, q abarca desde la art tarso hasta falange proximal, con exposición de capas musculares, tendones, ligamentos y metacarpiano lateral. La herida se ve limpia, alguien la debe haber estado curando. Desinfección con clorhexidina, aplicó nitrofurazona y azúcar + vendaje. Penicilina Estrepto + Dexa SC. Queda internada para las curaciones y antibióticoterapia.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:00:29','2020-05-03 19:00:29'),(341,231,221,'2019-11-28 00:00:00',NULL,NULL,'Piodermia profunda (comedones duros) con depilación y descamaciones verdosas húmedas, piel eritematosa y caliente al tacto.','No se dejó tricotomía con la máquina, muy dolorida, corte un poco alrededor con tijera. Desinfección con agua oxigenada para retirar descamación, secado, clorhexidina y crema Dermomax. 3 ml P E + 0,5 ml Dexa SC. Continúa en la casa con desinfección con iodopovidona en agua ana ana, crema Dermomax y 500 mg Cefalexina cada 12 horas PO. Control en 5 días cuando termine la Cefa para ver si sigue con atb o solo tratamiento local, tricotomía si es necesario.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:03:31','2020-05-03 19:03:31'),(351,241,231,'2020-04-21 00:00:00',NULL,NULL,'Parasitos','Triple fel cultivac. Desparasitación en la casa.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:03:40','2020-05-03 19:03:40'),(361,191,251,'2020-04-08 00:00:00',NULL,NULL,'.','Quíntuple Viratec. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:04:06','2020-05-03 19:04:06'),(371,231,221,'2020-03-17 00:00:00',NULL,NULL,'Igual q la vez pasada pero abajo de la oreja derecha y en región escapular izq. ','Desinfección con clorhexidina + dermotal + bactrovet plata. PE + Dexa. Sigue en la casa con Pyoderm x 15 días + lavar con agua y jabón blanco, secar + dermotal + curabichera. Control en 15 días, check ojos y vacunar. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:04:09','2020-05-03 19:04:09'),(381,221,241,'2020-01-17 00:00:00',NULL,NULL,'.','Hace unos meses le salió una masa en el pecho, lado der. Desde siempre q cuando come apurada vomita. Hace una semana está durmiendo mucho, y hoy notaron q quería maullar y no le sale y no ha comido y le salieron lagañas en los ojos. A veces estornuda y últimamente más de lo normal. No tiene vacunas, está castrada. Sale a hacer sus necesidades al patio donde vienen muchos gatos de los vecinos y callejeros.\nExamen clínico: Es re arisca, no se deja hacer nada. Mucosas normales, ojos a la inspección normal, no hay protrusión del tercer párpado, está hidratada, palpación abdominal s/p. Refl tusígeno neg, sin descarga nasal, leve descarga ocular color verdosa en canto medial de los ojos, refl pupilar normal. No pude auscultar bien. Rp/ Enro + Dexa, alim sobre cat chow con jeringa, q quede adentro para obs mf, orina, vómitos. Control en 24 hs. \nPreg por alimentación: alimento suelto? vencido? abierto hace más de 1 mes? qué alim? Gata de esa edad debería mejorar alimentación.. lo mejor de lo mejor Royal Canin Senior Consult Stage 2.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:05:12','2020-05-03 19:05:12'),(391,251,261,'2020-04-09 00:00:00',NULL,NULL,'.','Dificultad resp, intolerancia al ejercicio, último análisis de sangre en Enero: Riñones, hígado bien, glucemia borderline alta. Predn + Enro y derivo para cardióloga Andrea Montiel.',NULL,NULL,NULL,NULL,'Historia de tos',0.00,'',0.00,1,'2020-05-03 19:05:23','2020-05-03 19:05:23'),(401,261,271,'2020-02-08 00:00:00',NULL,NULL,'.','Segunda dosis Quíntuple Vanguard. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:05:35','2020-05-03 19:05:35'),(411,261,271,'2020-03-06 00:00:00',NULL,NULL,'.','Última dosis quintuple Viratec. Desparasitación meltra comp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:05:52','2020-05-03 19:05:52'),(421,221,241,'2020-01-18 00:00:00',NULL,NULL,'.','Telf hace 3 años comen Excellent adulto bolsa de 7,5 kg ella y otro gato q les dura varios meses (el otro gato ha estado bajando de peso y perdiendo pelo). Además hace poco ingresó un nuevo gato en la casa. Anoche comió sobre con ganas y esta mañana también. \nControl: está mucho mejor, hasta comió el balanceado q le compraron, sin secreción ocular, animada. Repito Enro + Dexa y desparasito a ella y a los convivientes con Alfa C. Disfonía persiste, no palpo nada, pulmones s/p, boca y laringe normal.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:05:59','2020-05-03 19:09:37'),(431,251,261,'2020-04-13 00:00:00',NULL,NULL,'Cardiomiopatía dilatada izq','PV 46 kg, pero calculo medicación para 40 kg como recomendó Andrea. Rp/ 0,25 mg/kg Pimoden bid (10 mg cada 12 hs), 2 mg/kg Furosemida bid (80 mg cada 12 hs).',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:06:36','2020-05-13 21:28:24'),(441,221,241,'2020-01-19 00:00:00',NULL,NULL,'.','Mucho mejor, animada, comiendo, sin descarga ocular y su voz volvió. 0,4 ml Enro + 0,1 ml Dexa SC y continúa con Enro VO cada 24 hs hasta completar 7 días de atb. Luego programar mastectomía.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:06:37','2020-05-03 19:06:37'),(451,281,291,'2019-11-27 00:00:00',NULL,NULL,'.','Vanguard 5 + Ascaricida John Martin.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:07:10','2020-05-03 19:07:10'),(461,271,281,'2020-04-08 00:00:00',NULL,NULL,'Úlcera corneal, mucho dolor','Meloxi SC + Cicatrizante ocular. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:07:14','2020-05-03 19:07:14'),(471,251,261,'2020-04-18 00:00:00',NULL,NULL,'Menor tumefacción abdominal.','Agregamos Cardio 3 (Benzacepril + Espironolactona) 10 mg sid y alimento RC Maxi ageing + 8 para red sodio.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:07:23','2020-05-03 19:07:23'),(481,281,291,'2019-12-14 00:00:00',NULL,NULL,'.','PV 1,85 kg. Desparasitación con Toltrazol Susp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:07:27','2020-05-03 19:07:27'),(491,281,291,'2019-12-27 00:00:00',NULL,NULL,'.','Quíntuple Viratec.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:07:42','2020-05-03 19:07:42'),(501,281,291,'2020-01-02 00:00:00',NULL,NULL,'.','PV 3,5 kg. Desparasitación con Toltrazol plus susp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:07:56','2020-05-03 19:07:56'),(511,271,281,'2020-04-13 00:00:00',NULL,NULL,'Mucho mejor, sigue igual.','.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:08:01','2020-05-03 19:08:01'),(521,281,291,'2020-01-21 00:00:00',NULL,NULL,'.','PV 4,9 kg. Quíntuple Viratec.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:08:08','2020-05-03 19:08:08'),(531,301,301,'2020-03-02 00:00:00',NULL,NULL,'.','1er Quíntuple Vanguard. La desparasitaron ellos la sem pasada con comp. la llevaron a monte.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:09:20','2020-05-03 19:09:20'),(541,251,261,'2020-04-20 00:00:00',NULL,NULL,'.','Anoche vomitó dos veces. Ayuno sólido 24 hs, luego 3 días de arroz pasado con el alimento. Pimoden dárselo en ayunas, Furosemida bajar a 1 mg/kg y Cardio mantengo igual.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:09:44','2020-05-03 19:09:44'),(551,311,311,'2019-12-03 00:00:00',NULL,NULL,'.','PV 1,8 kg. Desparasitación con Ascaricida John Martin + Quíntuple.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:10:39','2020-05-03 19:10:39'),(561,291,321,'2020-04-09 00:00:00',NULL,NULL,'.','.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:10:50','2020-05-03 19:10:50'),(571,311,311,'2019-12-18 00:00:00',NULL,NULL,'.','PV 4 kg. Desparasitación con Toltrazol Plus susp.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:10:52','2020-05-03 19:10:52'),(581,221,241,'2020-01-27 00:00:00',NULL,NULL,'.',' Mastectomía. P E + Dexa por 3 días iny.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:10:58','2020-05-03 19:10:58'),(591,221,241,'2020-01-28 00:00:00',NULL,NULL,'.',' Re bien, animada, comiendo mucho y sin nada de inflamación. PE y Dexa, mañana última P E y retirar puntos en 10 días. Muestra la envían a patología.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:11:49','2020-05-03 19:11:49'),(601,221,241,'2020-02-05 00:00:00',NULL,NULL,'.','Retiramos los puntos.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:12:28','2020-05-03 19:12:28'),(611,321,331,'2020-04-12 00:00:00',NULL,NULL,'Gastroenteritis.',' Internación con fluidoter + gastrine + hematover + PE.\n',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:14:33','2020-05-03 19:14:33'),(621,321,331,'2020-04-17 00:00:00',NULL,NULL,'Gastroenteritis.','Dado de alta',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:14:57','2020-05-13 21:28:22'),(631,331,341,'2019-11-26 00:00:00',NULL,NULL,'Se lamió pipeta para gatos, comenzó con convulsiones, le dieron Paracetamol con leche VO y azufre con leche VO, después gotas de canabis.  Tto. ','Fluidoterapia con Dextrosa 5%, atropina , Diazepam y Ketamina EV. Atropinización. Orina con sangre. 17 hs cambio por SF, con Diaz + Keta.',NULL,NULL,NULL,NULL,'Continúa orina con sangre y convulsiones.',0.00,'',0.00,1,'2020-05-03 19:15:08','2020-05-03 19:15:08'),(641,351,361,'2019-11-29 00:00:00',NULL,NULL,'.','Quíntuple + Desparasitación. PV 3 kg. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:15:39','2020-05-03 19:15:39'),(651,331,341,'2019-11-27 00:00:00',NULL,NULL,'.','Dextrosa 5%, Atropina, Keta + Diaz EV. Orina sin sangre. Por la tarde última dosis de anestésico + atropina y cambio sachet por SF.',NULL,NULL,NULL,NULL,'Sigue orinando sin sangre.',0.00,'',0.00,1,'2020-05-03 19:15:45','2020-05-03 19:15:45'),(661,351,361,'2019-12-20 00:00:00',NULL,NULL,'.','Quintuple',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:16:25','2020-05-15 23:52:19'),(671,331,341,'2019-11-28 00:00:00',NULL,NULL,'.','Levantada, sin convulsionar, pupilas en midriasis con pobre respuesta pupilar a la luz (por atropina?), con apetito, comió sobre cat chow. 60 ml SF SC + 0,25 ml Atropina 1%o. ',NULL,NULL,NULL,NULL,'Control mañana por la mañana y lavar cuello con detergente. ',0.00,'',0.00,1,'2020-05-03 19:16:26','2020-05-03 19:16:26'),(681,341,351,'2020-04-06 00:00:00',NULL,NULL,'Miasis en región occipital.','Extracción de gusanos, PE + Dexa + IVM. Se indica colocación de crema cicatrizante con antibiótico y azúcar + curabichera y cefalexina cada 12 hs por 10 días. \n',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:16:48','2020-05-03 19:18:08'),(691,351,361,'2019-12-21 00:00:00',NULL,NULL,'.','Desparasitación con Ascaricida.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:16:49','2020-05-03 19:16:49'),(701,331,341,'2019-11-29 00:00:00',NULL,NULL,'.','Perfecta, alta médica.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:17:49','2020-05-03 19:17:49'),(711,361,371,'2020-04-05 00:00:00',NULL,NULL,'Tromboembolismo','Desde ayer con paresia del tren posterior y anisocoria. Propiocepción disminuida en ambos MP, cola flácida, iris bombé ojo derecho, aumento PIO ojo der, T 38,4. 1 ml Dexa + Algen SC + 0,5 ml Kualcovit IM. En la casa una única aspirineta repartida en dos veces (cada 12 hs). ',NULL,NULL,NULL,'2020-04-06 00:00:00','Control en 24 hs.',0.00,'',0.00,1,'2020-05-03 19:18:20','2020-05-10 16:33:25'),(721,371,381,'2020-01-21 00:00:00',NULL,NULL,'La agarraron unos perros, no veo heridas pero MAI muy dolorido, claudicación grado IV. No puedo flexionar bien articulación del codo, mucho dolor en articulación escápulohumeral.','1 ml Dexa + 0,6 ml Algen 60. Control en 12 hs y si sigue así derivación para placa.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:20:23','2020-05-03 19:20:23'),(731,371,381,'2020-01-23 00:00:00',NULL,NULL,'.','Muy bien. 0,1 mg kg Meloxicam VO c 24 hs por 4 días. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:20:39','2020-05-03 19:20:39'),(741,351,361,'2020-01-11 00:00:00',NULL,NULL,'.','3 ra quíntuple peso 7,3 kg ',NULL,NULL,NULL,NULL,'prox quíntuple 11/01/21\nantirrábica 11/02/20',0.00,'',0.00,1,'2020-05-03 19:21:10','2020-05-03 19:21:10'),(751,361,371,'2020-04-07 00:00:00',NULL,NULL,'.','Ojo peor q ayer, con midriasis más grande y de mayor tamaño q el otro. Propiocepción en MP mejoría leve. T 37,9. Auscultación abd borborigmos normales. 1 ml Dexa SC + 0,5 ml Kualcovit IM. Dorlamida cada 8 hs en la casa. Control en 24 hs. \nCheck pulso femoral, pulso digital. Check coloración almohadillas plantares y temp de MP. T rectal mayor a 37 grados, mejor pronóstico. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:21:30','2020-05-03 19:21:30'),(761,361,371,'2020-04-08 00:00:00',NULL,NULL,'.',' T 38, almohadillas coloración normal, temp miembros normal, pulso femoral bien. Repito med, agrego Karsivan 3 mg/kg cada 12 hs y q siga en la casa con Vit complejo B y prednisolona 2 mg/kg cada 24, desp a días alternos.',NULL,NULL,NULL,'2020-04-13 00:00:00',' Control el Lunes 13. ',0.00,'',0.00,1,'2020-05-03 19:22:26','2020-05-10 16:33:12'),(771,381,391,'2019-11-26 00:00:00',NULL,NULL,'Atropellado ayer por su dueña.  ','Rp/ Dexa y Algen cada 12 horas por dos días SC y control.Decaído, postrado, en decúbito lateral, anorexia, normotermia. Examen neurológico demuestra parálisis flácida de ambos MP y cola. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:23:04','2020-05-12 19:50:21'),(781,361,371,'2020-04-13 00:00:00',NULL,NULL,'.','Peor, sin propiocep en MP, ojo igual, pulso femoral suave, almohadillas plantares pálidas, temp MP menor q en MAs. T rectal 38,3. Dexa SC y continúa igual con medicación oral + 1 aspirineta repartida en dos dosis cada 72 hs. ',NULL,NULL,NULL,'2020-04-17 00:00:00','Control viernes 17.',0.00,'',0.00,1,'2020-05-03 19:23:32','2020-05-10 16:32:56'),(791,391,411,'2020-01-10 00:00:00',NULL,NULL,'.','PV 2,1 kg. Desparasitación con Toltrazol Plus suspensión.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:23:57','2020-05-03 19:23:57'),(801,361,371,'2020-04-22 00:00:00',NULL,NULL,'Falleció.','.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:24:01','2020-05-03 19:24:01'),(811,391,411,'2020-04-04 00:00:00',NULL,NULL,'.','Vómitos en vacío, diarrea color dulce de leche y con sangre fresca, decaimiento, anorexia. T 38,6, mucosas bien. Supuestamente tiene 2 vacunas y varias desparasitaciones pero no está cargado. Rp/ 1 ml gastrine + 1,2 ml Sulfa loperamida. Dieta arroz con pollo peq can y agua poca cant. Control mañana.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:24:53','2020-05-03 19:24:53'),(821,391,411,'2020-04-05 00:00:00',NULL,NULL,'.','Sin diarrea ni vómitos, repito med.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:25:19','2020-05-03 19:25:19'),(831,381,391,'2019-11-30 00:00:00',NULL,NULL,'Trauma medular agudo.','Animado, se arrastra para moverse, come, pero continúa con parálisis y con arreflexia. Dexa y Algen y recomendamos placa de columna',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:25:30','2020-05-03 19:27:47'),(841,401,401,'2020-01-31 00:00:00',NULL,NULL,'Enfermedad dermatológica crónica, prurito ++++, viene siendo tratada por otros vets desde hace 2 años, sin mejoría (antibióticos, prednisolona y a veces alim hipoalerg). Cara, vientre, axilas, pecho, flancos (partes con acantosis nigricans, partes con hip','Para empezar Rp/ Otovier classic cada 12 hs + baños con Osspret Ketoconazol cada 2 días. Control a la semana.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:25:31','2020-05-03 19:25:31'),(851,391,411,'2020-04-06 00:00:00',NULL,NULL,'.','Sin diarrea ni vómitos, doy Enterosept para dar VO cada 6 hs por 4 días y después ver.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:25:39','2020-05-03 19:25:39'),(861,381,391,'2019-12-08 00:00:00',NULL,NULL,'.','Fallecio.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:26:10','2020-05-10 17:06:09'),(871,391,411,'2020-04-14 00:00:00',NULL,NULL,'.','Quíntuple viratec. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:26:12','2020-05-03 19:26:12'),(881,361,421,'2020-04-24 00:00:00',NULL,NULL,'.','Obstrucción lagrimal izq desde siempre, anisocromia desde siempre. Sin desparasitar hace años, ni vacunas, con secreción nasal serosa, sibilancias y estornudos (tiene momentos en q aparece el cuadro y desp desaparece). Además masa de 0,3 mm diámetro, alopécica, rosada, pedunculada, sin adhesión a tejidos profundos, en región de la cruz. Por ahora puff Budesonide y Enro VO cada 24 hs por 8 días. ',NULL,NULL,NULL,NULL,'Si el Lunes continúa con secreción add Dexa inyectable. ',0.00,'',0.00,1,'2020-05-03 19:26:22','2020-05-03 19:26:22'),(891,411,431,'2019-12-21 00:00:00',NULL,NULL,'Garrapatas, CC ⅖, cataratas en ambos ojos desde hace años, secreción mucosa por narinas, hiperqueratosis plano nasal, mucosas levemente pálidas, T 39,3. ','Por ahora pipeta, antiparasitario VO y Kualcovit VO y mejorar alimentación (a Sieger). Lunes ver T y si sigue normal extraer sangre.\n',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:29:23','2020-05-03 19:29:23'),(901,441,441,'2020-04-04 00:00:00',NULL,NULL,'.','Hace dos días se cayó de cabeza y creen q desde entonces no ve, además no come ni toma agua, ayer orinó en las piedritas y defecó muy duro (siempre tiene probl de constipación). Vive adentro. Globos oculares parecen aumentados de tamaño, pupilas midriáticas q responden algo a la luz, T 38,6, FC 220 pero está muy asustada, vejiga llena q costó vaciar (obstrucción) y luego defeca duro en la camilla. Canalización y fluidoter con 20 ml dextrosa 5% y resto SF. Dexa 1 ml EV + Enro 0,3 ml y 2 ml Vaselina VO. Tramadol EV y Diaz EV como estimulante apetito. Receto Dorlamida de farmacia, 1 gota/ojo cada 8 hs hasta ver mañana. Indico vaselina VO 1 ml cada 8h.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:29:34','2020-05-03 19:29:34'),(911,411,431,'2019-12-23 00:00:00',NULL,NULL,'Está igual. T 39,8… Enf transmitida por garrapatas? ','Enro y Dexa SC. Sigue con 10 mg/kg Doxiciclina cada 24 hs y 10 mg totales Prednisolona VO por 4 días y después a días alternos. Si el 26/12 sigue igual extraer sangre para Rutina Básica + PT y frotis. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:30:17','2020-05-03 19:30:17'),(921,431,461,'2020-01-06 00:00:00',NULL,NULL,'.','Tiene una vacuna previa. Ahora Quíntuple + Desparasitación. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:30:22','2020-05-03 19:30:22'),(931,441,441,'2020-04-05 00:00:00',NULL,NULL,'Diabetes???','Está igual, pero ha comido, tomado agua, orinado y defecado dos veces. Igual está muy quieta en su camita, pupilas midriáticas q responden a la luz, reflejo amenaza negativo en ambos ojos. Enro + Dexa, sigue con Vaselina VO cada 8 hs y Dorzolamida cada 12 hs. Mañana ayuno 8-12 hs para extracción de sangre para rutina básica. debe iny 150',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:30:25','2020-05-03 19:30:25'),(941,411,431,'2019-12-24 00:00:00',NULL,NULL,'.','Según la dueña está mejor.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:30:54','2020-05-03 19:30:54'),(951,441,441,'2020-04-06 00:00:00',NULL,NULL,'.','Igual, ha orinado y tomado agua, pero no come. Extr sangre y repetimos med. ',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:30:56','2020-05-03 19:30:56'),(961,421,451,'2020-02-15 00:00:00',NULL,NULL,'.','Igual q ayer. Hoy temp 39,1, mucosas pálidas, hidratada, abdomen abultado, decaída. Hepaton + Kualcovit + Ascaricida.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:30:57','2020-05-03 19:30:57'),(971,441,441,'2020-04-08 00:00:00',NULL,NULL,'.','Eutanasia porq había empezado con probl neurológico, paresia espástica MP y parálisis flácida MAD',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:31:19','2020-05-03 19:31:19'),(981,421,451,'2020-02-19 00:00:00',NULL,NULL,'.','Igual. T 39,3. Hematover. Habría q hacer eco, pero no tienen plata.',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:31:25','2020-05-03 19:31:25'),(991,411,481,'2019-12-30 00:00:00',NULL,NULL,'Aparentemente gastritis, vómitos en vacío e inapetencia. Normotermia, sin diarrea. ','Gastine + Algen. Ayuno 24 hs y agua peq cant varias veces al día. Control hoy por la tarde.\n',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-03 19:33:07','2020-05-03 19:33:07'),(1001,1,1,'2020-05-10 00:00:00',NULL,NULL,'Diabetes','Análisis de sangre y luego vemos',NULL,NULL,NULL,'2020-06-10 00:00:00','Está tranquila',1500.00,'',0.00,1,'2020-05-10 16:21:31','2020-05-17 00:41:33'),(1011,461,491,'2020-05-10 00:00:00',NULL,NULL,'Vacunación','Triple',NULL,NULL,NULL,NULL,'',1500.00,'1',1500.00,1,'2020-05-10 16:30:09','2020-05-12 19:47:52'),(1021,461,491,'2020-05-13 00:00:00',NULL,NULL,'Fiaca','Ejercicio y medicación, además de alimentación con vitaminas',NULL,NULL,NULL,'2020-06-13 00:00:00','No quiere comer',1500.00,'2',1500.00,1,'2020-05-10 16:31:12','2020-05-12 19:48:43'),(1031,11,11,'2020-05-14 00:00:00',NULL,NULL,'','',NULL,NULL,NULL,'2020-05-29 00:00:00','',2000.00,'1',2000.00,1,'2020-05-13 21:21:54','2020-05-15 23:47:59'),(1041,11,11,'2020-05-09 00:00:00',NULL,NULL,'Nada','',NULL,NULL,NULL,NULL,'',0.00,'',0.00,1,'2020-05-13 21:22:52','2020-05-15 23:47:04'),(1051,501,501,'2020-05-15 00:00:00',NULL,NULL,'Chequeo','Peso, toma de presión arterial, vacunas',NULL,NULL,NULL,'2020-05-20 00:00:00','',1500.00,'2',1500.00,1,'2020-05-15 23:38:41','2020-05-15 23:44:31'),(1061,501,501,'2020-05-20 00:00:00',NULL,NULL,'','Alimento reforzado con hierro',NULL,NULL,NULL,NULL,'Un poco decaída - Paga mañana',1500.00,'3',1500.00,1,'2020-05-15 23:41:15','2020-05-15 23:42:47'),(1071,501,501,'2020-05-25 00:00:00',NULL,NULL,'Revisión general','Está perfecta',NULL,NULL,NULL,NULL,'',800.00,'1',800.00,1,'2020-05-15 23:43:27','2020-05-15 23:44:38');
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
  `observations` varchar(5000) DEFAULT '',
  `balance` decimal(10,2) DEFAULT '0.00',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=511 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'MORENO MAXIMILIANO','Vicente López 2370, dto 4','2914045308','','',0.00,1,'2020-05-03 18:16:18','2020-05-15 23:51:41'),(11,'PUENTES LUIS','Facundo Quiroga 32','2914427207 / 2914382042 / 2915119453 ','','2915119453, ella va a pagar.',1500.00,1,'2020-05-03 18:18:31','2020-05-03 18:18:31'),(21,'MOYANO VALERIA','Posta Rolando 3427','2914311577','','',0.00,1,'2020-05-03 18:28:10','2020-05-03 18:28:10'),(31,'GARCÍA CINTIA','Pablo Acosta 551','.','','',0.00,1,'2020-05-03 18:29:36','2020-05-03 18:29:36'),(41,'DI PRETORO MACARENA','Estomba 3648','2915242404','','',0.00,11,'2020-05-03 18:30:34','2020-05-13 21:46:07'),(51,'BAROLO ROMINA','17 de Mayo 245','29154700668','','',0.00,11,'2020-05-03 18:30:48','2020-05-13 21:48:30'),(61,'NORIEGA VIVIANA','Eduardo Guitierrez 45','2914053611','','',0.00,1,'2020-05-03 18:31:47','2020-05-03 18:31:47'),(71,'LÓPEZ LUZ','Vieytes 2641','2916453919','','',0.00,1,'2020-05-03 18:37:08','2020-05-03 18:37:08'),(81,'SANDOVAL ROMAN','Guemes 3696','2914661682','','',0.00,11,'2020-05-03 18:40:24','2020-05-13 21:43:34'),(91,'CAMARGO MATIAS','Nicaragua 3167','2915228717','','',0.00,1,'2020-05-03 18:42:15','2020-05-03 18:42:15'),(101,'SAN LUIS PATRICIA','Piedra Buena 1117','2915055985','patricia@gmail.com','',0.00,1,'2020-05-03 18:42:48','2020-05-13 21:16:55'),(111,'GARCÍA LEANDRO','Francisca Hernandez 2330','2915010118','','',0.00,1,'2020-05-03 18:44:02','2020-05-03 18:44:02'),(121,'BELIZ MARTÍN','Biggio 232','2914752297','','',0.00,1,'2020-05-03 18:48:11','2020-05-03 18:48:11'),(131,'CERDA SAMUEL','Vieytes 3360','2914238375','','',0.00,1,'2020-05-03 18:50:05','2020-05-03 18:50:05'),(141,'GARCÍA RUBÉN','Vicente López 2642','2914193477','','',0.00,1,'2020-05-03 18:52:46','2020-05-03 18:52:46'),(151,'NUÑEZ SEBASTIÁN','Esquiu 94','2914423482','','',0.00,11,'2020-05-03 18:52:54','2020-05-13 21:49:17'),(161,'HERRERO ROCÍO','Güemes 2880','2914225251','','',0.00,1,'2020-05-03 18:53:03','2020-05-03 18:53:03'),(171,'SANTA PAZ MELISA','El ceibo 56','2914163350','','',0.00,1,'2020-05-03 18:53:31','2020-05-03 18:53:31'),(181,'SALINAS CLAUDIA','Mitre 3050','2914492269','','',0.00,1,'2020-05-03 18:55:09','2020-05-03 18:55:09'),(191,'AGITANA SONIA','La Arcada 757','2914754037','','',0.00,1,'2020-05-03 18:55:55','2020-05-03 18:55:55'),(201,'GARRIDO NICOLE','Estomba 2831','2915061604','','',0.00,1,'2020-05-03 18:57:29','2020-05-03 18:57:29'),(211,'MIRANDA LAURA','Felipe Varela 920','2914067585','','',0.00,1,'2020-05-03 18:58:41','2020-05-03 18:58:41'),(221,'OJEDA SILVIA','Guiraldes 55','2914367646','','',0.00,1,'2020-05-03 19:00:13','2020-05-03 19:00:13'),(231,'GASTELU GLADYS','Leopoldo Lugones 72','2914768410','','',0.00,1,'2020-05-03 19:01:48','2020-05-03 19:01:48'),(241,'DOMINGUEZ DAIANA','Zelarrayán 2696','2915054989','','',0.00,1,'2020-05-03 19:02:46','2020-05-03 19:02:46'),(251,'FERNANDEZ CARLOS','Fabián Gonzales y Castelli (Monoblocks)','2914077565','','',0.00,1,'2020-05-03 19:04:02','2020-05-03 19:04:02'),(261,'GATIUS HERNÁN ','P. Rolando 324','2916427211','','',0.00,1,'2020-05-03 19:04:42','2020-05-03 19:04:42'),(271,'CHEUQUECOY PABLO','Calle 4 1825','2914762538','','',0.00,1,'2020-05-03 19:05:05','2020-05-03 19:05:05'),(281,'GODOY VANESA','Ayacucho 2968','2974370533','','',0.00,1,'2020-05-03 19:06:14','2020-05-03 19:06:14'),(291,'BECKER CELESTE','Esquiú 59','2915117429','','',0.00,1,'2020-05-03 19:08:29','2020-05-03 19:08:29'),(301,'GONZALEZ LEANDRO','Vicente López 4000 casa 154','2914383828','','',0.00,1,'2020-05-03 19:08:35','2020-05-03 19:08:35'),(311,'GRIMALT CÉSAR','Plazia Pernice 630','2915092106','','',0.00,1,'2020-05-03 19:09:47','2020-05-03 19:09:47'),(321,'REILE FABIÁN','Biggio 85','2914447827','','',0.00,1,'2020-05-03 19:10:24','2020-05-03 19:10:24'),(331,'GUIÑAZU RODRIGO','Vieytes 2721','2914372032 o 4884445','','',0.00,1,'2020-05-03 19:11:14','2020-05-03 19:11:14'),(341,'BEROISA NICOLÁS','Güemes 2877','2915016793 / fijo 5171521','','',0.00,1,'2020-05-03 19:11:23','2020-05-03 19:11:23'),(351,'PALACIO MARIA ROSA','Di Sarli 270','4885118','','',0.00,1,'2020-05-03 19:14:39','2020-05-03 19:14:39'),(361,'FRIEDRICH PABLO','Entre Ríos 146','2916434735','','',0.00,1,'2020-05-03 19:15:37','2020-05-03 19:15:37'),(371,'GUTIERREZ PAMELA','Biggio 354','2915223126','','',0.00,1,'2020-05-03 19:18:07','2020-05-03 19:18:07'),(381,'HECHT LAURA ','Vieytes 3360','2915231519','','',0.00,1,'2020-05-03 19:20:54','2020-05-03 19:20:54'),(391,'PANIS MILAGROS','Vieytes 3045','2915052921','','',0.00,1,'2020-05-03 19:21:58','2020-05-03 19:21:58'),(401,'BARA NATALIA','Posta Rolando 2905','2914741674','','',0.00,1,'2020-05-03 19:21:59','2020-05-03 19:21:59'),(411,'BARRAZA LAURA ','Dr. Monteiro 2901','2915114236','','',0.00,1,'2020-05-03 19:26:04','2020-05-03 19:26:04'),(421,'PASTOR ANA','9 de Julio 2856','2914391147','','',0.00,1,'2020-05-03 19:26:40','2020-05-03 19:26:40'),(431,'HERNANDEZ SOLEDAD','.','.','','',0.00,1,'2020-05-03 19:28:31','2020-05-03 19:28:31'),(441,'BARCIA GUILLERMO','Argentinos del Sur 76','2914276703','','',0.00,1,'2020-05-03 19:28:32','2020-05-03 19:28:32'),(451,'HERNANDEZ PAMELA','Vicente López 2630','2915118444','','',0.00,1,'2020-05-03 19:30:39','2020-05-03 19:30:39'),(461,'MELENDREZ OMAR HUGO','Alberdi 2678','2915754922','omar.melendrez@gmail.com','Mi papá',0.00,1,'2020-05-10 16:28:30','2020-05-12 19:45:18'),(471,'PUENTES LUIS','blah','123321','luis@gmail.com','no',0.00,1,'2020-05-13 21:17:59','2020-05-13 21:31:28'),(481,'PUENTES FER','Lainez 270','02','flor@cxkd','wqewq',0.00,1,'2020-05-13 21:19:05','2020-05-13 21:31:25'),(491,'sda','','2331','','',0.00,1,'2020-05-13 21:30:19','2020-05-13 21:31:27'),(501,'Jose Perez','Chiclana 234','2915556666','','',0.00,1,'2020-05-15 23:33:00','2020-05-15 23:33:00');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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
  `observations` varchar(5000) DEFAULT '',
  `statusId` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=511 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (1,1,'LUBA ','Can','Shitzu','H','','2011-12-01 00:00:00','',1,'2020-05-03 18:21:12','2020-05-15 23:51:41'),(11,11,'BONITA','Fel','Mza','H','','2018-01-01 00:00:00','',1,'2020-05-03 18:28:48','2020-05-03 18:28:48'),(21,21,'BOTAS ','Fel','Mzo','M','','2019-09-20 00:00:00','',1,'2020-05-03 18:29:51','2020-05-17 22:05:59'),(31,31,'MISHA','Fel ','.','H ','.','2007-01-01 00:00:00','',1,'2020-05-03 18:30:52','2020-05-03 18:30:52'),(41,51,'MIA','Can','Shitzu','H','','2010-01-01 00:00:00','',1,'2020-05-03 18:31:47','2020-05-03 18:31:47'),(51,41,'MALENA','Can','Labrador Retriever','H','','2008-01-01 00:00:00','',1,'2020-05-03 18:32:17','2020-05-13 21:25:59'),(61,61,'LOLO','Can','Mza negra pelo corto','He','','2019-12-10 00:00:00','',1,'2020-05-03 18:33:16','2020-05-13 21:25:58'),(71,71,'RUBI','Fel','Mza','H','',NULL,'',1,'2020-05-03 18:38:04','2020-05-13 21:25:57'),(81,81,'BRUCE','Can','Shar Pei','M','','2020-02-17 00:00:00','',11,'2020-05-03 18:41:47','2020-05-13 21:43:39'),(91,101,'LOLA','Can','Mza','H','','2019-12-15 00:00:00','',1,'2020-05-03 18:43:43','2020-05-03 18:46:52'),(101,111,'MANCHI','Can','Pitbull plata','H','222','2020-01-21 00:00:00','',1,'2020-05-03 18:45:51','2020-05-13 21:25:29'),(111,91,'MARSHALL','Can','Mestizo','M','','2020-01-01 00:00:00','',1,'2020-05-03 18:46:56','2020-05-03 18:46:56'),(121,121,'ROCO','Can','Boxer bayo','M','',NULL,'',1,'2020-05-03 18:48:51','2020-05-03 18:48:51'),(131,131,'APOLO','Can','Mzo','M','','2020-02-17 00:00:00','',1,'2020-05-03 18:50:36','2020-05-03 18:50:36'),(141,141,'REX','Can ','Labrador negro','M ','','2019-08-12 00:00:00','',1,'2020-05-03 18:53:36','2020-05-03 18:53:36'),(151,151,'OSO','Can','Rottweiler','M','','2013-01-01 00:00:00','',1,'2020-05-03 18:53:37','2020-05-10 16:31:40'),(161,171,'MYLO','Can','Mzo','M','',NULL,'',1,'2020-05-03 18:53:55','2020-05-03 18:53:55'),(171,161,'LULÚ','Can ','Labrador','H','','2020-01-01 00:00:00','',1,'2020-05-03 18:54:45','2020-05-03 18:54:45'),(181,181,'DOCKY','Can','Mzo','M','','2019-08-17 00:00:00','',1,'2020-05-03 18:56:05','2020-05-03 18:56:05'),(191,151,'FLOR','Can','Labrador','H','','2014-01-01 00:00:00','',1,'2020-05-03 18:56:16','2020-05-03 18:56:16'),(201,201,'TRUMAN','Can ','Caniche','M ','','2016-06-01 00:00:00','',1,'2020-05-03 18:58:58','2020-05-03 18:58:58'),(211,211,'FRIDA','Can','Mza','H','','2019-04-20 00:00:00','',1,'2020-05-03 18:59:12','2020-05-03 18:59:12'),(221,231,'BELLA','Can ','Labrador negro','H ','','2018-05-01 00:00:00','',1,'2020-05-03 19:02:24','2020-05-03 19:02:24'),(231,241,'MICHI','Fel','Mza','H','','2018-07-01 00:00:00','',1,'2020-05-03 19:03:17','2020-05-03 19:03:17'),(241,221,'MICA','Fel','Mza','H','','2011-01-01 00:00:00','',1,'2020-05-03 19:03:27','2020-05-03 19:03:27'),(251,191,'NINO','Can ','Caniche','M','','2020-01-01 00:00:00','',1,'2020-05-03 19:03:33','2020-05-03 19:03:33'),(261,251,'TOTO','Can','Lab retr','M','','2010-01-01 00:00:00','Malo, mejor sin bozal.',1,'2020-05-03 19:04:34','2020-05-03 19:04:34'),(271,261,'LOLA ','Can ','Boxer atigrada','H','','2019-11-10 00:00:00','',1,'2020-05-03 19:05:15','2020-05-03 19:05:15'),(281,271,'MILO','Can ','Mestizo','M','','2020-01-01 00:00:00','',1,'2020-05-03 19:05:50','2020-05-03 19:05:50'),(291,281,'COPITO','Can ','Mzo','M ','','2019-10-11 00:00:00','',1,'2020-05-03 19:06:47','2020-05-03 19:06:47'),(301,301,'UMA','Can ','Mza','H','','2019-11-25 00:00:00','',1,'2020-05-03 19:09:04','2020-05-03 19:09:04'),(311,311,'RUFINA','Can ','Pitbull','H ','','2019-10-15 00:00:00','',1,'2020-05-03 19:10:18','2020-05-03 19:10:18'),(321,291,'SIMÓN','Can ','Mestizo','M','','2015-01-01 00:00:00','',1,'2020-05-03 19:10:31','2020-05-03 19:10:31'),(331,321,'KATTY','Can ','Mza','H','','2019-12-01 00:00:00','',1,'2020-05-03 19:10:50','2020-05-03 19:10:50'),(341,331,'TITA','Fel ','Mza','H ','','2016-11-01 00:00:00','',1,'2020-05-03 19:11:43','2020-05-03 19:11:43'),(351,341,'MANCHI','Can ','Mestizo','M','','2010-01-01 00:00:00','',1,'2020-05-03 19:14:50','2020-05-03 19:14:50'),(361,351,'NEGRITA','Can','Mza','H','','2019-10-01 00:00:00','',1,'2020-05-03 19:15:11','2020-05-03 19:15:11'),(371,361,'MICHITA','Fel ','Mza','H','','2005-01-01 00:00:00','',1,'2020-05-03 19:16:32','2020-05-10 16:31:41'),(381,371,'SQUISHY','Can ','Mza','H ','','2019-07-28 00:00:00','',1,'2020-05-03 19:19:36','2020-05-03 19:19:36'),(391,381,'YOKO','Can ','Labrador dorado','M','','2013-11-01 00:00:00','',1,'2020-05-03 19:21:26','2020-05-12 00:27:59'),(401,401,'PRINCESA','Can ','Mestiza','H','','2008-01-01 00:00:00','',1,'2020-05-03 19:22:37','2020-05-03 19:22:37'),(411,391,'REINA','Can','Mza','H','','2019-12-01 00:00:00','',1,'2020-05-03 19:23:24','2020-05-03 19:23:24'),(421,361,'GATA BLANCA','Fel','Mza','H','','2010-01-01 00:00:00','',1,'2020-05-03 19:25:40','2020-05-03 19:25:40'),(431,411,'COCKI','Can','Cocker Spaniel negra','H','','2009-01-01 00:00:00','',1,'2020-05-03 19:26:44','2020-05-03 19:26:44'),(441,441,'EMILY','Fel','Mza','H','','2005-01-01 00:00:00','',1,'2020-05-03 19:28:55','2020-05-03 19:28:55'),(451,421,'YANKIE','Can','Mza','H','','2019-12-17 00:00:00','',1,'2020-05-03 19:29:20','2020-05-03 19:29:20'),(461,431,'LOCKY ','Can ','Caniche toy negro','M','','2019-09-02 00:00:00','',1,'2020-05-03 19:29:41','2020-05-03 19:29:41'),(471,451,'CHIMUELO','Can ','Mzo','M ','','2019-10-18 00:00:00','',1,'2020-05-03 19:31:13','2020-05-03 19:31:13'),(481,411,'TITO ','Can ','Caniche','M','','2015-01-01 00:00:00','',1,'2020-05-03 19:32:32','2020-05-03 19:32:32'),(491,461,'FOSTER','Can','Ovejero Belga','M','45kg','1996-01-01 00:00:00','',1,'2020-05-10 16:29:20','2020-05-14 17:26:53'),(501,501,'Pelusa','Can','Mestiza','H','','2020-01-01 00:00:00','Es buenita',1,'2020-05-15 23:35:11','2020-05-15 23:35:11');
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statuses`
--

LOCK TABLES `statuses` WRITE;
/*!40000 ALTER TABLE `statuses` DISABLE KEYS */;
INSERT INTO `statuses` VALUES (1,'Activo','0000-00-00 00:00:00','0000-00-00 00:00:00'),(11,'Inactivo','0000-00-00 00:00:00','0000-00-00 00:00:00');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinations`
--

LOCK TABLES `vaccinations` WRITE;
/*!40000 ALTER TABLE `vaccinations` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaccinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'heroku_b3627cd1b200890'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-24 17:12:05
