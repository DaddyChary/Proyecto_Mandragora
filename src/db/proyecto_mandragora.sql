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

INSERT INTO MonitoreoPlanta (fecha_hora, temperatura, humedad) VALUES
('2024-11-19 08:00:00', 22.5, 60.0),
('2024-11-19 09:00:00', 23.0, 62.5),
('2024-11-19 10:00:00', 24.5, 65.0),
('2024-11-19 11:00:00', 25.0, 67.5),
('2024-11-19 12:00:00', 26.0, 70.0),
('2024-11-19 13:00:00', 27.5, 72.0),
('2024-11-19 14:00:00', 28.0, 74.5),
('2024-11-19 15:00:00', 29.0, 76.0),
('2024-11-19 16:00:00', 30.0, 78.5),
('2024-11-19 17:00:00', 31.0, 80.0);
