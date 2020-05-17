USE videostar_db;

INSERT INTO User 
(name, bio, email, password, created_at, updated_at) 
VALUES
('Tomas', 'Web Developer', 'tomas@example.com', '$2a$10$yppBzHhOIf0Y1X0dd4NCVO3OrWoFb33nFkTKOxzC4YVt4tm6Do/HG',"2020-05-14","2020-05-14"),
('John Maverick', 'Rocket Science Engineer', 'john@example.com', '$2a$10$G/bcsJj41nJDmhBO/P6tzOl54zguFMg87YXsW31Cey8L/fUcD3zx.',"2020-05-14","2020-05-14"),
('Anne Berckham', 'Human Resources Manager', 'anne@example.com', '$2a$10$G/bcsJj41nJDmhBO/P6tzOl54zguFMg87YXsW31Cey8L/fUcD3zx.',"2020-05-14","2020-05-14"),
('Ben Johnson', 'Tesla CEO', 'ben@example.com', '$2a$10$G/bcsJj41nJDmhBO/P6tzOl54zguFMg87YXsW31Cey8L/fUcD3zx.',"2020-05-14","2020-05-14"),
('Barbara Wick', 'Actress', 'barbara@example.com', '$2a$10$G/bcsJj41nJDmhBO/P6tzOl54zguFMg87YXsW31Cey8L/fUcD3zx.',"2020-05-14","2020-05-14"),
('Mich Mordock', 'Politician', 'mich@example.com', '$2a$10$G/bcsJj41nJDmhBO/P6tzOl54zguFMg87YXsW31Cey8L/fUcD3zx.',"2020-05-14","2020-05-14");

SELECT * FROM User;