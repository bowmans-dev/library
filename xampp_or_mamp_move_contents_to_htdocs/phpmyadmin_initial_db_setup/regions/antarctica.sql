CREATE TABLE IF NOT EXISTS `antarctica` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(80) NOT NULL,
    `continent` varchar(30) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;


INSERT INTO `antarctica` (`id`, `name`, `continent`) VALUES
(1, 'Antarctica', 'Antarctica'),
(2, 'Bouvet Island', 'Antarctica'),
(3, 'French Southern Territories', 'Antarctica'),
(4, 'Heard Island and Mcdonald Islands', 'Antarctica'),
(5, 'South Georgia and the South Sandwich Islands', 'Antarctica');