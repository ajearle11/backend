DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
    name VARCHAR(30),
    number INT NOT NULL,
    PRIMARY KEY (number)
);

INSERT INTO pokemon (name, number)
VALUES ('Bulbasaur', 1), ('Ivysaur', 2), ('Venusaur', 3);
