-- Eliminar la base de datos si existe
DROP DATABASE IF EXISTS ProyectoMandragora;

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS ProyectoMandragora;

-- Seleccionar la base de datos
USE ProyectoMandragora;

-- Crear la tabla MonitoreoPlanta
CREATE TABLE MonitoreoPlanta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha_hora DATETIME NOT NULL,
    temperatura FLOAT NOT NULL,
    humedad FLOAT NOT NULL
);