USE videostar_db;

INSERT INTO User 
(name, bio, email, password, created_at, updated_at) 
VALUES
('John Maverick', 'Rocket Science Engineer', 'john@example.com', 'password',"2020-05-14","2020-05-14"),
('Anne Berckham', 'Human Resources Manager', 'anne@example.com', 'password',"2020-05-14","2020-05-14"),
('Ben Johnson', 'Tesla CEO', 'ben@example.com', 'password',"2020-05-14","2020-05-14"),
('Barbara Wick', 'Actress', 'barbara@example.com', 'password',"2020-05-14","2020-05-14"),
('Mich Mordock', 'Politician', 'mich@example.com', 'password',"2020-05-14","2020-05-14");

SELECT * FROM User;