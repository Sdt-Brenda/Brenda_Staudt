CREATE TABLE pais
(
  nombre_pais varchar(45) DEFAULT NULL,
  pais_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (pais_id)
);

insert into pais (nombre_pais) VALUES 
('Argentina'),
('Brasil'),
('Paraguay');

CREATE TABLE provincia
(
  provincia_id INT NOT NULL AUTO_INCREMENT,
  nombre_provincia varchar(45) DEFAULT NULL,
  PRIMARY KEY (provincia_id)
);

insert into provincia (nombre_provincia) VALUES
('Misiones'),
('Corrientes'),
('Chaco');

CREATE TABLE localidad
(
  codigo_localidad INT NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  codigo_postal INT NOT NULL,
  PRIMARY KEY (codigo_localidad)
);

insert into localidad (nombre,codigo_postal) VALUES
('Oberá', 3360),
('Posadas', 3300),
('Iguazú', 3370);

CREATE TABLE empleado
(
  empleado_id INT NOT NULL AUTO_INCREMENT,
  dni INT NOT NULL,
  nombre varchar(45) DEFAULT NULL,
  telefono INT NOT NULL,
  email varchar(45) DEFAULT NULL,
  fecha_alta INT NOT NULL,
  PRIMARY KEY (empleado_id),
  UNIQUE (dni)
);

insert into empleado (nombre,dni,telefono,email,fecha_alta) VALUES
('Roberto', 40887563, 15879650, 'roberto_ig@gmail.com', 120623),
('Marlene', 43687245, 15796541, 'marlene_ob@gmail.com', 050123),
('Ingrid', 38669725, 15321452, 'ingrid_po@gmail.com', 040323);