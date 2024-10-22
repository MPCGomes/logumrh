CREATE TABLE genders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE disabilities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE education_levels (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL,
    complement VARCHAR(100)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    gender_id INT REFERENCES genders(id),
    disability_id INT REFERENCES disabilities(id),
    address_id INT REFERENCES addresses(id) ON DELETE SET NULL,
    photo BYTEA,
    birth_date DATE NOT NULL,
    marital_status VARCHAR(50),
    ethnicity VARCHAR(50),
    phone VARCHAR(20),
    social_name VARCHAR(255),
    nationality VARCHAR(50) NOT NULL,
    national_id VARCHAR(11) UNIQUE NOT NULL,
    role_id INT REFERENCES roles(id),
    education_level_id INT REFERENCES education_levels(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT REFERENCES users(id),
    updated_by INT REFERENCES users(id)
);

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    legal_name VARCHAR(255) NOT NULL,
    national_id VARCHAR(20) UNIQUE NOT NULL,
    industry VARCHAR(255) NOT NULL,
    address_id INT REFERENCES addresses(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT REFERENCES users(id),
    updated_by INT REFERENCES users(id)
);

CREATE TABLE resumes (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    area_of_expertise VARCHAR(255) NOT NULL,
    file BYTEA NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT REFERENCES users(id),
    updated_by INT REFERENCES users(id)
);

CREATE TABLE job_vacancies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    code VARCHAR(10) UNIQUE NOT NULL,
    modality VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255),
    address_id INT REFERENCES addresses(id) NOT NULL,
    company_id INT REFERENCES companies(id) ON DELETE CASCADE,
    category_id INT REFERENCES categories(id),
    objective_requirements TEXT,
    subjective_requirements TEXT,
    benefits TEXT,
    schedule VARCHAR(255),
    salary DECIMAL(10, 2),
    tags TEXT[],
    contract_type VARCHAR(50),
    close_date TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT REFERENCES users(id),
    updated_by INT REFERENCES users(id)
);

CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    job_vacancy_id INT REFERENCES job_vacancies(id) ON DELETE CASCADE,
    resume_id INT REFERENCES resumes(id),
    application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT REFERENCES users(id),
    updated_by INT REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_applications_user_id ON applications(user_id);
CREATE INDEX idx_applications_job_vacancy_id ON applications(job_vacancy_id);
CREATE INDEX idx_resumes_user_id ON resumes(user_id);
CREATE INDEX idx_job_vacancies_company ON job_vacancies(company_id);
CREATE INDEX idx_job_vacancies_address ON job_vacancies(address_id);
CREATE INDEX idx_companies_address ON companies(address_id);

-- Roles
INSERT INTO roles (id, name) VALUES (1, 'USER');
INSERT INTO roles (id, name) VALUES (2, 'ADMIN');
