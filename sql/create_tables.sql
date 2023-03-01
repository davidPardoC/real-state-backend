CREATE TABLE IF NOT EXISTS public.users
(
    user_id serial NOT NULL,
    name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    agency_id serial,
    PRIMARY KEY (user_id),
    CONSTRAINT email UNIQUE (email),
    CONSTRAINT phone UNIQUE (phone)
);

CREATE TABLE IF NOT EXISTS public.agency
(
    agency_id serial NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    domain text,
    status text DEFAULT 'pending',
    PRIMARY KEY (agency_id),
    CONSTRAINT name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS public.properties
(
    property_id serial NOT NULL,
    user_id serial NOT NULL,
    type_id serial NOT NULL,
    description text,
    cost money NOT NULL,
    environments numeric,
    bedrooms numeric,
    bathrooms numeric,
    garage numeric,
    total_surface numeric,
    covered_surface numeric,
    land_surface numeric,
    built_year numeric,
    expenses numeric,
    credit_available boolean NOT NULL,
    latitude numeric,
    longitude numeric,
    contidion_id serial,
    operation_type serial NOT NULL,
    PRIMARY KEY (property_id)
);

CREATE TABLE IF NOT EXISTS public.property_types
(
    type_id serial NOT NULL,
    type_name text,
    PRIMARY KEY (type_id),
    CONSTRAINT type_name UNIQUE (type_name)
);

CREATE TABLE IF NOT EXISTS public.operations
(
    operation_id serial NOT NULL,
    name text,
    PRIMARY KEY (operation_id),
    CONSTRAINT operation_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS public.resources
(
    resource_id serial NOT NULL,
    url text,
    property_id serial NOT NULL,
    PRIMARY KEY (resource_id)
);

CREATE TABLE IF NOT EXISTS public.condition
(
    condition_id serial NOT NULL,
    name text NOT NULL,
    PRIMARY KEY (condition_id),
    CONSTRAINT condition_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS public.other_features
(
    feature_id serial NOT NULL,
    name text,
    PRIMARY KEY (feature_id),
    CONSTRAINT feature_name UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS public.features_properties
(
    feature serial,
    property serial
);

ALTER TABLE public.properties DROP CONSTRAINT IF EXISTS type_id;
ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT type_id FOREIGN KEY (type_id)
    REFERENCES public.property_types (type_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE public.properties DROP CONSTRAINT IF EXISTS user_id;
ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT user_id FOREIGN KEY (user_id)
    REFERENCES public.users (user_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.properties DROP CONSTRAINT IF EXISTS condition_id;
ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT condition_id FOREIGN KEY (contidion_id)
    REFERENCES public.condition (condition_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.properties DROP CONSTRAINT IF EXISTS operation_type;
ALTER TABLE IF EXISTS public.properties
    ADD CONSTRAINT operation_type FOREIGN KEY (operation_type)
    REFERENCES public.operations (operation_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.resources DROP CONSTRAINT IF EXISTS properti_id;
ALTER TABLE IF EXISTS public.resources
    ADD CONSTRAINT properti_id FOREIGN KEY (property_id)
    REFERENCES public.properties (property_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.features_properties DROP CONSTRAINT IF EXISTS property;
ALTER TABLE IF EXISTS public.features_properties
    ADD CONSTRAINT property FOREIGN KEY (property)
    REFERENCES public.properties (property_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.features_properties DROP CONSTRAINT IF EXISTS feature;
ALTER TABLE IF EXISTS public.features_properties
    ADD CONSTRAINT feature FOREIGN KEY (feature)
    REFERENCES public.other_features (feature_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;