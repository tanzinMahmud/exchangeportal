-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2018 at 09:26 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exchange_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(50) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `first_name`, `email`, `password`) VALUES
(2, 'Tanzin', 'tangin31@gmail.com', 'fadf1b8198a868f5c6bbabb0d3b87e1d');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(50) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `forgot_pass_code` varchar(20) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `verification_code` varchar(20) DEFAULT NULL,
  `balance` varchar(20) DEFAULT NULL,
  `address` varchar(80) DEFAULT NULL,
  `profile_picture` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `first_name`, `last_name`, `email`, `password`, `forgot_pass_code`, `phone_number`, `verification_code`, `balance`, `address`, `profile_picture`) VALUES
(1, 'Tanzin', NULL, 'tanzin@gmail.com', '25f9e794323b453885f5181f1b624d0b', NULL, NULL, NULL, '0', NULL, NULL),
(2, 'abc', NULL, 'abc@gmail.com', '25f9e794323b453885f5181f1b624d0b', NULL, NULL, NULL, '0', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `old_product`
--

CREATE TABLE `old_product` (
  `product_id` int(40) NOT NULL,
  `customer_id` int(50) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `estimated_price` float NOT NULL,
  `time` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `old_product`
--

INSERT INTO `old_product` (`product_id`, `customer_id`, `name`, `estimated_price`, `time`, `date`) VALUES
(7, 101, 'mobile phone', 3000, '14:26:55', '29-04-2018'),
(8, 101, 'tshirt', 100, '15:20:41', '29-04-2018'),
(9, 101, 'tshirt', 100, '15:34:00', '29-04-2018'),
(10, 101, 'tshirt', 100, '15:43:17', '29-04-2018'),
(11, 101, 'mobile phone', 3000, '15:44:20', '29-04-2018'),
(12, 101, 'tshirt', 100, '15:45:32', '29-04-2018'),
(13, 101, 'tshirt', 100, '15:45:50', '29-04-2018'),
(14, 101, 'tshirt', 100, '23:24:20', '29-04-2018'),
(15, 101, 'tshirt', 100, '23:31:10', '29-04-2018'),
(16, 101, 'tshirt', 100, '23:31:50', '29-04-2018'),
(17, 101, 'tshirt', 100, '23:37:58', '29-04-2018'),
(18, 101, 'tshirt', 100, '23:38:13', '29-04-2018'),
(19, 2, 'tshirt', 100, '03:35:11', '30-04-2018');

-- --------------------------------------------------------

--
-- Table structure for table `posted_ad`
--

CREATE TABLE `posted_ad` (
  `product_id` int(40) NOT NULL,
  `customer_id` int(50) NOT NULL,
  `product_name` varchar(30) DEFAULT NULL,
  `product_brand` varchar(20) DEFAULT NULL,
  `product_category` varchar(20) NOT NULL,
  `product_description` varchar(80) DEFAULT NULL,
  `product_picture` varchar(80) DEFAULT NULL,
  `ex_product_name` varchar(30) NOT NULL,
  `ex_product_brand` varchar(30) NOT NULL,
  `ex_product_category` varchar(20) NOT NULL,
  `additional_money` float DEFAULT NULL,
  `area` varchar(30) NOT NULL,
  `location` varchar(50) NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `posted_time` varchar(20) NOT NULL,
  `posted_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posted_ad`
--

INSERT INTO `posted_ad` (`product_id`, `customer_id`, `product_name`, `product_brand`, `product_category`, `product_description`, `product_picture`, `ex_product_name`, `ex_product_brand`, `ex_product_category`, `additional_money`, `area`, `location`, `phone_no`, `posted_time`, `posted_date`) VALUES
(17, 101, 'Redmi 5x', 'Xiomi', 'Electronics', 'dsfdsfdsfdfdsf', 'uploads/n82611822-71769030.jpg', 'dsfdsfdsfd', 'dsfdfdfds', 'Electronics', 54, 'Mirpur', 'Dhaka, Bangladesh', '01768586203', '01:12:26', '30-04-2018'),
(18, 1, 'Tanzin', 'Xiomi', 'Electronics', 'Full fresh. only one months used', 'uploads/fdfdf.PNG', 'Note 4x', 'Xiomi', 'Electronics', 500, 'Mirpur', 'Dhaka, Bangladesh', '01768586203', '01:31:01', '05-05-2018');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `old_product`
--
ALTER TABLE `old_product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `posted_ad`
--
ALTER TABLE `posted_ad`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `old_product`
--
ALTER TABLE `old_product`
  MODIFY `product_id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT for table `posted_ad`
--
ALTER TABLE `posted_ad`
  MODIFY `product_id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
