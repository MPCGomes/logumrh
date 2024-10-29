-- Create Database
CREATE DATABASE logum_rh;

-- Connect to the Database
\c logum_rh;

-- Genders
CREATE TABLE genders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Disabilities
CREATE TABLE disabilities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Roles
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Education Levels
CREATE TABLE education_levels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Marital Statuses
CREATE TABLE marital_statuses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Ethnicities
CREATE TABLE ethnicities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Nationalities
CREATE TABLE nationalities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

-- Drivers Licenses
CREATE TABLE drivers_licenses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    gender_id INT REFERENCES genders(id) NOT NULL,
    disability_id INT REFERENCES disabilities(id) NOT NULL,
    marital_status_id INT REFERENCES marital_statuses(id) NOT NULL,
    ethnicity_id INT REFERENCES ethnicities(id) NOT NULL,
    nationality_id INT REFERENCES nationalities(id) NOT NULL,
    photo BYTEA,
    birth_date DATE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    social_name VARCHAR(255),
    role_id INT REFERENCES roles(id) NOT NULL,
    education_level_id INT REFERENCES education_levels(id) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by INT REFERENCES users(id) NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- Addresses
CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL,
    complement VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by INT REFERENCES users(id) NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- User Drivers Licenses (Join Table)
CREATE TABLE user_drivers_licenses (
    user_id INT REFERENCES users(id) NOT NULL,
    drivers_license_id INT REFERENCES drivers_licenses(id) NOT NULL,
    PRIMARY KEY (user_id, drivers_license_id)
);

-- Companies
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    legal_name VARCHAR(255) NOT NULL,
    national_id VARCHAR(20) UNIQUE NOT NULL,
    industry VARCHAR(255) NOT NULL,
    address_id INT REFERENCES addresses(id) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by INT REFERENCES users(id) NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- Modalities
CREATE TABLE modalities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Contract Types
CREATE TABLE contract_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- Job Vacancies
CREATE TABLE job_vacancies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    code VARCHAR(10) UNIQUE NOT NULL,
    modality_id INT REFERENCES modalities(id) NOT NULL,
    contract_type_id INT REFERENCES contract_types(id) NOT NULL,
    description TEXT NOT NULL,
    schedule VARCHAR(255) NOT NULL,
    requirements TEXT[],
    benefits TEXT[],
    address_id INT REFERENCES addresses(id) NOT NULL,
    company_id INT REFERENCES companies(id) NOT NULL,
    observations TEXT,
    salary DECIMAL(10, 2),
    tags TEXT[],
    close_date TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by INT REFERENCES users(id) NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- Resumes
CREATE TABLE resumes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    area_of_expertise VARCHAR(255) NOT NULL,
    file BYTEA NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by INT REFERENCES users(id) NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- Applications
CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    job_vacancy_id INT REFERENCES job_vacancies(id) NOT NULL,
    resume_id INT REFERENCES resumes(id) NOT NULL,
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_by INT REFERENCES users(id) NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_national_id ON users(national_id);
CREATE INDEX idx_applications_user_id ON applications(user_id);
CREATE INDEX idx_applications_job_vacancy_id ON applications(job_vacancy_id);
CREATE INDEX idx_resumes_user_id ON resumes(user_id);
CREATE INDEX idx_job_vacancies_company_id ON job_vacancies(company_id);
CREATE INDEX idx_job_vacancies_address_id ON job_vacancies(address_id);
CREATE INDEX idx_companies_address_id ON companies(address_id);
