DROP DATABASE IF EXISTS ProyectoMandragora;

CREATE DATABASE IF NOT EXISTS ProyectoMandragora;

USE DATABASE IF EXISTS ProyectoMandragora;

CREATE TABLE MonitoreoPlanta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha_hora DATETIME NOT NULL,
    temperatura FLOAT NOT NULL,
    humedad FLOAT NOT NULL
);


