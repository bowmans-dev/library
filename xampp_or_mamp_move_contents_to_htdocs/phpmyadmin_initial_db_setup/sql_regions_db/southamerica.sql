CREATE TABLE IF NOT EXISTS `southamerica` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(80) NOT NULL,
    `continent` varchar(30) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `southamerica` (`id`, `name`, `continent`) VALUES
(1, 'Argentina', 'South America'),
(2, 'Bolivia', 'South America'),
(3, 'Brazil', 'South America'),
(4, 'Chile', 'South America'),
(5, 'Colombia', 'South America'),
(6, 'Ecuador', 'South America'),
(7, 'Falkland Islands (Malvinas)', 'South America'),
(8, 'French Guiana', 'South America'),
(9, 'Guyana', 'South America'),
(10, 'Paraguay', 'South America'),
(11, 'Peru', 'South America'),
(12, 'Suriname', 'South America'),
(13, 'Uruguay', 'South America'),
(14, 'Venezuela', 'South America');