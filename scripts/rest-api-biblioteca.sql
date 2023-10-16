-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2023 a las 19:26:24
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api-biblioteca`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `anio_publicación` date NOT NULL,
  `isbn` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `anio_publicación`, `isbn`) VALUES
(1, 'El corazón de la piedra', 'José María García López', 'Novela', '2013-05-10', 1578965721),
(2, 'Los hombres de piedra negra', 'Sosa Gabriel', 'Novela policial', '2023-09-14', 1214189765),
(3, 'Hasta ahora te creo', 'Godoy Catalina', 'Romance', '1993-07-14', 1648759624),
(4, 'Juan perdió el tren ayer', 'Pedro Gonzales', 'Humor', '1996-07-30', 1895426214),
(5, 'Jugando a no jugar', 'Perla Lopez', 'drama', '2012-09-18', 210054786),
(6, 'El canto de las gaviotas azule', 'Federico Alcantara', 'Poemas ', '1993-04-03', 1129864579),
(7, 'El canto de las gaviotas azule', 'Federico Alcantara', 'Poemas ', '1993-04-03', 112986459),
(8, 'La casa en el bosque', 'Sergio Guitierrez', 'terror', '1997-11-11', 136457829),
(9, 'Corazón dorado', 'Lucia Velazques', 'drama', '1989-05-04', 210058793);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
