CREATE TABLE IF NOT EXISTS `oceania` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(80) NOT NULL,
    `continent` varchar(30) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

INSERT INTO `oceania` (`id`, `name`, `continent`) VALUES
(1, 'American Samoa', 'Oceania'),
(2, 'Australia', 'Oceania'),
(3, 'Cook Islands', 'Oceania'),
(4, 'Fiji', 'Oceania'),
(5, 'French Polynesia', 'Oceania'),
(6, 'Guam', 'Oceania'),
(7, 'Kiribati', 'Oceania'),
(8, 'Marshall Islands', 'Oceania'),
(9, 'Micronesia, Federated States of', 'Oceania'),
(10, 'Nauru', 'Oceania'),
(11, 'New Caledonia', 'Oceania'),
(12, 'New Zealand', 'Oceania'),
(13, 'Niue', 'Oceania'),
(14, 'Norfolk Island', 'Oceania'),
(15, 'Northern Mariana Islands', 'Oceania'),
(16, 'Palau', 'Oceania'),
(17, 'Papua New Guinea', 'Oceania'),
(18, 'Pitcairn', 'Oceania'),
(19, 'Samoa', 'Oceania'),
(20, 'Solomon Islands', 'Oceania'),
(21, 'Tokelau', 'Oceania'),
(22, 'Tonga', 'Oceania'),
(23, 'Tuvalu', 'Oceania'),
(24, 'Vanuatu', 'Oceania'),
(25, 'Wallis and Futuna', 'Oceania');