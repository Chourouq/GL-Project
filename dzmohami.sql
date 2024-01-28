-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2024 at 11:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dzmohami`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(11) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `avocatid` int(11) DEFAULT NULL,
  `appointmentDate` date DEFAULT NULL,
  `appointmentIndex` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `avocat`
--

CREATE TABLE `avocat` (
  `id` int(11) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `avocat`
--

INSERT INTO `avocat` (`id`, `nom`, `email`, `phone`, `website`, `description`, `password`) VALUES
(1, 'avocat', 'avocat@gmail.com', '1234567', 'estin.dz\r\n', 'hi there', '$2b$12$NcHOsMLUW.pecdVw2gznx.OPaA9RdkfZFnwLWYUwnhSpu9pWTneTa'),
(2, 'av', 'av@gmail.com', NULL, NULL, NULL, '$2b$12$QW2ad27Ixqap6aqlWwh81.yHA8EL9o87D8hfEplNG8nxuOMA6qzqG'),
(3, 'avv', 'avv@gmail.com', NULL, NULL, NULL, '$2b$12$wtv.ZuTf1idPDW6GHx6y5uBVXfYk7fhkZiinqjO64GtE..NO6QC7W'),
(4, 'ch', 'ch@gmail.com', NULL, NULL, NULL, '$2b$12$P4qEQn.AE0ZTvF4E9POJmeyxk/.CbrVHr6JgqTWx1VoTvMaAPo48C'),
(5, 'chrq', 'chrq@gmail.com', NULL, NULL, NULL, '$2b$12$f4y4EH7dsyxxe7qgyYgnE.bSx/uXDbJla9glc9SBzHZEvQwD4xXzG'),
(7, 'r', 'r@gmail.com', NULL, NULL, NULL, '$2b$12$FTMgUFsaeLPYbf.a0q.NduGqZOG9Sy1ptWDJDKiaIqQcTBU2HadwG'),
(8, 'ra', 'ra@gmail.com', NULL, NULL, NULL, '$2b$12$CPy.Phjs/w1p036bK3yRyOEGqPRoifxJMopCYvJqAaiXf4XmmW1kq'),
(9, 'ran', 'ran@gmail.com', NULL, NULL, NULL, '$2b$12$8975XZbbJwNPd7tKDrUqxO4iOdn3UjxDrIBjMkRz0A15DtoBGe8hq'),
(10, 'l', 'l@gmail.com', NULL, NULL, NULL, '$2b$12$SoBXYLJvVYIaMPCGJ2S4qOYObX8oRBGhaDtIwsjXfPjku5zYZi0SG');

-- --------------------------------------------------------

--
-- Table structure for table `avocatlangue`
--

CREATE TABLE `avocatlangue` (
  `avocatID` int(11) NOT NULL,
  `langueID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `avocatspecialite`
--

CREATE TABLE `avocatspecialite` (
  `specialiteID` int(11) NOT NULL,
  `avocatID` int(11) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `avocatspecialite`
--

INSERT INTO `avocatspecialite` (`specialiteID`, `avocatID`, `description`) VALUES
(1, 3, NULL),
(1, 7, NULL),
(2, 7, NULL),
(2, 8, NULL),
(3, 8, NULL),
(4, 8, NULL),
(6, 9, NULL),
(9, 9, NULL),
(12, 9, NULL),
(14, 9, NULL),
(2, 10, NULL),
(3, 10, NULL),
(4, 10, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `ratingid` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `evaluation`
--

CREATE TABLE `evaluation` (
  `evaluationID` int(11) NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `commentaire` text DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `evaluation`
--

INSERT INTO `evaluation` (`evaluationID`, `rate`, `commentaire`, `name`, `email`) VALUES
(1, 5, 'commentaire', 'rania', 'r@gmail.com'),
(2, 3, 'com', 'salwa', 's@gmail.com'),
(3, 3, 'nice', 'lyne benoudjit', '@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `langue`
--

CREATE TABLE `langue` (
  `langueID` int(11) NOT NULL,
  `nomLangue` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lawyer`
--

CREATE TABLE `lawyer` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `specialty` varchar(50) DEFAULT NULL,
  `phone_number` int(11) DEFAULT NULL,
  `office_address` varchar(50) DEFAULT NULL,
  `website` varchar(50) DEFAULT NULL,
  `linkedin_profile` varchar(50) DEFAULT NULL,
  `wilaya` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `categories` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`categories`)),
  `description` varchar(50) DEFAULT NULL,
  `rate` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `locationID` int(11) NOT NULL,
  `avocatID` int(11) DEFAULT NULL,
  `lat` decimal(9,6) DEFAULT NULL,
  `lng` decimal(9,6) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`locationID`, `avocatID`, `lat`, `lng`, `address`) VALUES
(1, 1, NULL, NULL, 'Jijel');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE `rating` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `lawyerId` int(11) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `commentaire` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rendez_vous`
--

CREATE TABLE `rendez_vous` (
  `date` date DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `periode` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rendez_vous`
--

INSERT INTO `rendez_vous` (`date`, `email`, `periode`, `phone`, `description`, `id`) VALUES
('0000-00-00', 'r@gmail.com', '10:00-11:00', NULL, 'description', 1),
('2024-02-01', 'example@gmail.com', '10:00-11:00', '07', 'divorce', 2),
('2024-02-01', '@gmail.com', '10:00-11:00', '07', 'divorse', 3);

-- --------------------------------------------------------

--
-- Table structure for table `specialite`
--

CREATE TABLE `specialite` (
  `specialiteID` int(11) NOT NULL,
  `nomSpecialite` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `specialite`
--

INSERT INTO `specialite` (`specialiteID`, `nomSpecialite`) VALUES
(1, 'Droit administratif'),
(2, 'Droit bancaire'),
(3, 'Droit civil'),
(4, 'Droit commercial'),
(5, 'Droit de l\'environnement'),
(6, 'Droit de l\'immobilier'),
(7, 'Droit de la consommation'),
(8, 'Droit de la santé'),
(9, 'Droit des assurances'),
(10, 'Droit des entreprises'),
(11, 'Droit des transports'),
(12, 'Droit du sport'),
(13, 'Droit du travail'),
(14, 'Droit familial'),
(15, 'Droit pénal'),
(16, 'Droit routier'),
(17, 'Droit administratif'),
(18, 'Droit bancaire'),
(19, 'Droit civil'),
(20, 'Droit commercial'),
(21, 'Droit de l\'immobilier'),
(22, 'Droit de la consommation'),
(23, 'Droit de la santé'),
(24, 'Droit des assurances'),
(25, 'Droit des entreprises'),
(26, 'Droit des transports'),
(27, 'Droit du sport'),
(28, 'Droit du travail'),
(29, 'Droit familial'),
(30, 'Droit pénal'),
(31, 'Droit routier'),
(32, 'Droit administratif'),
(33, 'Droit bancaire'),
(34, 'Droit civil'),
(35, 'Droit commercial'),
(36, 'Droit de l\'environnement'),
(37, 'Droit de l\'immobilier'),
(38, 'Droit de la consommation'),
(39, 'Droit de la santé'),
(40, 'Droit des assurances'),
(41, 'Droit des entreprises'),
(42, 'Droit des transports'),
(43, 'Droit du sport'),
(44, 'Droit du travail'),
(45, 'Droit familial'),
(46, 'Droit pénal'),
(47, 'Droit routier'),
(48, 'Droit pénal'),
(49, 'Droit routier');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(31) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userid` (`userid`),
  ADD KEY `avocatid` (`avocatid`),
  ADD KEY `ix_appointment_id` (`id`);

--
-- Indexes for table `avocat`
--
ALTER TABLE `avocat`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `avocatlangue`
--
ALTER TABLE `avocatlangue`
  ADD PRIMARY KEY (`avocatID`,`langueID`),
  ADD KEY `langueID` (`langueID`);

--
-- Indexes for table `avocatspecialite`
--
ALTER TABLE `avocatspecialite`
  ADD PRIMARY KEY (`avocatID`,`specialiteID`),
  ADD KEY `specialiteID` (`specialiteID`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ratingid` (`ratingid`),
  ADD KEY `ix_comment_id` (`id`);

--
-- Indexes for table `evaluation`
--
ALTER TABLE `evaluation`
  ADD PRIMARY KEY (`evaluationID`);

--
-- Indexes for table `langue`
--
ALTER TABLE `langue`
  ADD PRIMARY KEY (`langueID`);

--
-- Indexes for table `lawyer`
--
ALTER TABLE `lawyer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `ix_lawyer_name` (`name`),
  ADD KEY `ix_lawyer_id` (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`locationID`),
  ADD KEY `avocatID` (`avocatID`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `lawyerId` (`lawyerId`),
  ADD KEY `ix_rating_id` (`id`);

--
-- Indexes for table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specialite`
--
ALTER TABLE `specialite`
  ADD PRIMARY KEY (`specialiteID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `ix_user_id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `avocat`
--
ALTER TABLE `avocat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `evaluation`
--
ALTER TABLE `evaluation`
  MODIFY `evaluationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `langue`
--
ALTER TABLE `langue`
  MODIFY `langueID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lawyer`
--
ALTER TABLE `lawyer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `locationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `specialite`
--
ALTER TABLE `specialite`
  MODIFY `specialiteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `appointment_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `appointment_ibfk_2` FOREIGN KEY (`avocatid`) REFERENCES `lawyer` (`id`);

--
-- Constraints for table `avocatlangue`
--
ALTER TABLE `avocatlangue`
  ADD CONSTRAINT `avocatlangue_ibfk_1` FOREIGN KEY (`avocatID`) REFERENCES `avocat` (`id`),
  ADD CONSTRAINT `avocatlangue_ibfk_2` FOREIGN KEY (`langueID`) REFERENCES `langue` (`langueID`);

--
-- Constraints for table `avocatspecialite`
--
ALTER TABLE `avocatspecialite`
  ADD CONSTRAINT `avocatspecialite_ibfk_1` FOREIGN KEY (`specialiteID`) REFERENCES `specialite` (`specialiteID`),
  ADD CONSTRAINT `avocatspecialite_ibfk_2` FOREIGN KEY (`avocatID`) REFERENCES `avocat` (`id`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`ratingid`) REFERENCES `rating` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`avocatID`) REFERENCES `avocat` (`id`);

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
  ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`lawyerId`) REFERENCES `lawyer` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
