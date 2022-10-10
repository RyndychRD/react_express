-- Table: crud.employees

CREATE TABLE IF NOT EXISTS crud.employees
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    first_name character varying(100) COLLATE pg_catalog."default",
    last_name character varying(100) COLLATE pg_catalog."default",
    middle_name character varying(100) COLLATE pg_catalog."default",
    subdivision_id integer,
    position_id integer,
    phone_num character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT employees_pkey PRIMARY KEY (id),
    CONSTRAINT fk_position_id FOREIGN KEY (position_id)
        REFERENCES crud.positions (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_subdivision_id FOREIGN KEY (subdivision_id)
        REFERENCES crud.subdivisions (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS crud.employees
    OWNER to root;