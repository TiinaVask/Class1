-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 21, 2018 at 11:24 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `icd0007_lab_db`
--
CREATE DATABASE IF NOT EXISTS `icd0007_lab_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `icd0007_lab_db`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(8) UNSIGNED ZEROFILL NOT NULL,
  `name` varchar(256) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL,
  `address` varchar(256) NOT NULL,
  `student_id` varchar(64) NOT NULL,
  `faculty` varchar(64) NOT NULL,
  `department` varchar(64) NOT NULL,
  `city` char(32) NOT NULL,
  `postal_code` char(10) NOT NULL,
  `phone` char(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='ICD0007 Students';

--
-- Indexes for table `users`
--
ALTER TABLE `users` ADD PRIMARY KEY (`id`);