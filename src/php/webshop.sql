drop database if EXISTS webshop;

CREATE DATABASE webshop;

USE webshop;

/* ASIAKAS */

CREATE TABLE asiakas (
astunnus CHAR(18),
etunimi CHAR(20) NOT NULL,
sukunimi CHAR(20) NOT NULL,
email CHAR(50) NOT NULL,
osoite CHAR(30),
postinro CHAR(5), 
postitmp CHAR(10), 
Id int(11),
salasana VARCHAR(255),
created_at DATETIME,
CONSTRAINT asiakas_pk PRIMARY KEY (astunnus)
) ;


/* TUOTERYHMÄ */
CREATE TABLE tuoteryhma (
trnro SMALLINT,
trnimi CHAR(40),
CONSTRAINT tuoteryhma_pk PRIMARY KEY (trnro)
) ;
INSERT INTO tuoteryhma VALUES (1,'Lautapelit');
INSERT INTO tuoteryhma VALUES (2,'Konsolipelit');
INSERT INTO tuoteryhma VALUES (3,'Tietokonepelit');
INSERT INTO tuoteryhma VALUES (4,'Tarvikkeet');
INSERT INTO tuoteryhma VALUES (5,'Uutuudet');

/* TUOTE */

CREATE TABLE tuote (
tuoteid SMALLINT,
tuotenimi CHAR(40) NOT NULL,
hinta DECIMAL(5,2),
saldo SMALLINT(5),
trnro SMALLINT NOT NULL,
tuotekuvaus TEXT,
CONSTRAINT tuote_pk PRIMARY KEY (tuoteid),
CONSTRAINT tuotenimi_un UNIQUE (tuotenimi),
CONSTRAINT tuote_ryhma_fk FOREIGN KEY (trnro) 
           REFERENCES tuoteryhma (trnro)
) ;
INSERT INTO tuote VALUES (1,'Afrikan tähti',13.99,250,1,'Pelaajien lukumäärä:2 - 6 pelaajaa, Ikäsuositus: 5+, Pelin kesto n. 15-60 min, Kielet: Suomi, ruotsi, viro, englanti') ;
INSERT INTO tuote VALUES (2,'Kimble',14.95,250,1,'Pelaajien lukumäärä: 2 - 4 pelaajaa, Pelityyppi: Lasten peli, Tyyppi: Klassisia pelejä');
INSERT INTO tuote VALUES (3,'Monopoli',32.90,150,1,'Pelaajien lukumäärä: 2 - 8 pelaajaa, Ikäsuositus: 8 - 99 vuotta, Pelityyppi: Vuoroihin perustuva, Perhepeli, Survival');
INSERT INTO tuote VALUES (4, 'Trivial Pursuit',39.95,150,1,'Pelaajien lukumäärä: 2 - 6 pelaajaa, Ikäsuositus: 16 - 99 vuotta, Pelityyppi: Vuoroihin perustuva, Perhepeli, Juhlapelit, Tietokilpailu, Lasten peli');
INSERT INTO tuote VALUES (5, 'Tammi',17.90,100,1,'Klassinen Tammi peli puisena, taitettavana pelinä. Näppärä koko, n 20x20cm.');
INSERT INTO tuote VALUES (16,'Scart-johto',6.95,100,4,'Uusi scart-johto vanhan tilalle. Sopii kaikiin laitteisiin joissa käytetään tavallista scart-liitintiä.');
INSERT INTO tuote VALUES (17,'Super Nintendo peliohjain', 12.90,15,4,'Uusi ohjain super nintendo pelikonsolille.');


/* TILAUS */

CREATE TABLE tilaus (
tilausnro INTEGER NOT NULL,
astunnus CHAR(6) NOT NULL, 
CONSTRAINT tilaus_pk PRIMARY KEY (tilausnro),
CONSTRAINT tilaus_asiakas_fk FOREIGN KEY (astunnus) 
           REFERENCES asiakas (astunnus)
) ; 



/* TILAUSRIVI */

CREATE TABLE tilausrivi (
tilausnro INTEGER NOT NULL,
rivinro SMALLINT NOT NULL,
tuoteid SMALLINT, 
kpl INTEGER,
CONSTRAINT tilausrivi_pk PRIMARY KEY (tilausnro, rivinro),
CONSTRAINT tilausrivi_tuote_fk FOREIGN KEY (tuoteid) 
           REFERENCES tuote (tuoteid)
);

INSERT INTO tilausrivi VALUES (1,1,1,3);


/* Palaute */
CREATE TABLE palaute(
palauteid INTEGER NOT NULL AUTO_INCREMENT,
name CHAR(20) NOT NULL,
email CHAR(50) NOT NULL, 
timestamp TIMESTAMP,
message CHAR (255) NOT NULL,
CONSTRAINT tilausrivi_pk PRIMARY KEY (palauteid)
);
