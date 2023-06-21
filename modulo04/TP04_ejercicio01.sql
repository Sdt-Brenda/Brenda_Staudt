CREATE TABLE alumno
(
  cod_matricula INT NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  dni INT NOT NULL,
  fecha_nac INT NOT NULL,
  email varchar(255) DEFAULT NULL,
  PRIMARY KEY (cod_matricula),
  UNIQUE (dni),
  UNIQUE (email)
);

insert into alumno (cod_matricula,nombre,dni,fecha_nac,email) VALUES 
(1,'Vilma',39879623,1992,'vilma_92@gmail.com'),
(2,'Marco',41278655,1994,'marco_94@gmail.com'),
(3,'Ludmila',40558978,1996,'ludmila_96@gmail.com');

CREATE TABLE curso
(
  cod_curso INT NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  PRIMARY KEY (cod_curso)
);

insert into curso (cod_curso,nombre) VALUES 
(01,'Lengua'),
(02,'Matemáticas'),
(03,'Sociales');

CREATE TABLE profesor
(
  profesor_id INT NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  especialidad varchar(45) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  PRIMARY KEY (profesor_id),
  UNIQUE (email)
);

insert into profesor (profesor_id,nombre,especialidad,email) VALUES 
(001,'Roberto','Sociales','roberto_so@gmail.com'),
(002,'Susana','Matemáticas','susana_ma@gmail.com'),
(003,'Edgard','Lengua','edgard_len@gmail.com');

CREATE TABLE Relationship
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES curso(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES profesor(profesor_id)
);