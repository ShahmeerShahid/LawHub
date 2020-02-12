create table AppUser (
    uid SERIAL NOT NULL primary key,
    password varchar(255) NOT NULL, 
    firstName varchar(100) NOT NULL,
    lastName varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    role userType,
    country varchar(100) NOT NULL,
    stateOrProvince varchar(100) NOT NULL,
    city varchar(100) NOT NULL
);

--userType is a custom type that is ENUM('student', 'recruiter')

-- INSERT INTO AppUser(password, firstName, lastName, email, role, country, stateOrProvince, city) VALUES($1, $2, $3, $4, $5, 'student', $7, $8, $9);

-- 34.66.215.42
-- port: 5432
-- database name: 'lh_db'
-- user: 'user1'
-- password: 'Lamas123'