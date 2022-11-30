-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2022 a las 13:42:40
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bddpublicidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bestbrand`
--

CREATE TABLE `bestbrand` (
  `id` int(15) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `interes` varchar(255) NOT NULL,
  `observaciones` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `bestbrand`
--

INSERT INTO `bestbrand` (`id`, `nombre`, `telefono`, `email`, `interes`, `observaciones`) VALUES
(2, 'Eduardo', '62222222', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(3, 'Marina Rodriguez', '6777777', 'edgom@gmail.com', 'Publicidad online', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(4, 'dfgdsf', '6777777', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(5, 'gato', '62222222', 'edgom@gmail.com', 'Publicidad online', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(6, 'Mike Tyson', '62222222', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(7, 'Mike Tyson', '62222222', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(8, 'Mike Tyson', '62222222', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(9, 'Eduardo', '6777777', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.'),
(10, 'Eduardo', '6777777', 'edgom@gmail.com', 'Publicidad web', 'Quisiera sasber sobre  todo lo que tiene que ver de  publicidad , logo y logotipo y el presupuesto por favor.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bestbrand`
--
ALTER TABLE `bestbrand`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bestbrand`
--
ALTER TABLE `bestbrand`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
