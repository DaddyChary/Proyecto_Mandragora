-- Eliminar la base de datos si existe
DROP DATABASE IF EXISTS ProyectoMandragora;

-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS ProyectoMandragora;

-- Seleccionar la base de datos
USE ProyectoMandragora;

-- Crear la tabla Riego (con fecha y hora separados)
CREATE TABLE Riego (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,     -- Para almacenar solo la fecha
    hora TIME NOT NULL       -- Para almacenar solo la hora
);

-- Insertar algunos eventos de riego de ejemplo
INSERT INTO Riego (fecha, hora) VALUES
('2024-11-19', '08:00:00'),
('2024-11-19', '09:00:00'),
('2024-11-19', '10:00:00'),
('2024-11-19', '11:00:00'),
('2024-11-19', '12:00:00'),
('2024-11-19', '13:00:00'),
('2024-11-19', '14:00:00'),
('2024-11-19', '15:00:00'),
('2024-11-19', '16:00:00'),
('2024-11-19', '17:00:00');
