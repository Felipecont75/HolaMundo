-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 06:08:08
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `school`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin_escolar`
--

CREATE TABLE `admin_escolar` (
  `ID` int(15) NOT NULL,
  `Nombre_Ad` varchar(45) DEFAULT NULL,
  `Apellido_Ad` varchar(45) DEFAULT NULL,
  `Usuario` varchar(12) DEFAULT NULL,
  `Contrasenia` varchar(30) DEFAULT NULL,
  `Activo` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admin_escolar`
--

INSERT INTO `admin_escolar` (`ID`, `Nombre_Ad`, `Apellido_Ad`, `Usuario`, `Contrasenia`, `Activo`) VALUES
(5, 'Felipe', 'Lopez Ortega', 'Filip', '11122224545457ASDAaaaa', 'N'),
(7, 'Jhair', 'Solis Lopez', 'Jais', '2223333444ab', 'Y');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `ID_Alumno` int(12) NOT NULL,
  `ID_Grupo` int(12) NOT NULL,
  `Nombre_A` varchar(45) NOT NULL,
  `Apellidos_A` varchar(45) NOT NULL,
  `Materia` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`ID_Alumno`, `ID_Grupo`, `Nombre_A`, `Apellidos_A`, `Materia`) VALUES
(1, 1, 'Marcos', 'Carmona Cruz', 'CiberSegurid'),
(5, 1, 'Luis Angel', 'Sanchez', 'CiberSegurid');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listas`
--

CREATE TABLE `listas` (
  `ID_Alumno` int(12) DEFAULT NULL,
  `Fecha` date DEFAULT NULL,
  `Estatus_Asistencia` varchar(15) DEFAULT NULL,
  `ID_Grupo` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `listas`
--

INSERT INTO `listas` (`ID_Alumno`, `Fecha`, `Estatus_Asistencia`, `ID_Grupo`) VALUES
(5, '2022-12-11', 'Asistencia', 1),
(5, '2022-12-05', 'Falta', 1),
(5, '2022-12-13', 'Falta', 1),
(1, '2022-12-12', 'Asistencia', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestro`
--

CREATE TABLE `maestro` (
  `Maestro_` int(12) NOT NULL,
  `Nombre_M` varchar(45) NOT NULL,
  `Apellidos_M` varchar(45) NOT NULL,
  `Grupo_ID` int(12) DEFAULT NULL,
  `Usuario_M` varchar(12) NOT NULL,
  `Activo` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `maestro`
--

INSERT INTO `maestro` (`Maestro_`, `Nombre_M`, `Apellidos_M`, `Grupo_ID`, `Usuario_M`, `Activo`) VALUES
(5, 'Alan', 'Zarate', 3, 'Zarate2022', 'Y'),
(10, 'Jose Alberto', 'Serrano', 1, 'JoseA2022', 'Y');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin_escolar`
--
ALTER TABLE `admin_escolar`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`ID_Alumno`);

--
-- Indices de la tabla `listas`
--
ALTER TABLE `listas`
  ADD KEY `ID_Alumno` (`ID_Alumno`),
  ADD KEY `ID_Grupo` (`ID_Grupo`);

--
-- Indices de la tabla `maestro`
--
ALTER TABLE `maestro`
  ADD PRIMARY KEY (`Maestro_`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin_escolar`
--
ALTER TABLE `admin_escolar`
  MODIFY `ID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `listas`
--
ALTER TABLE `listas`
  ADD CONSTRAINT `listas_ibfk_1` FOREIGN KEY (`ID_Alumno`) REFERENCES `alumnos` (`ID_Alumno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
