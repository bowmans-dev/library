-- run this query in the psql terminal to create the table

CREATE TABLE public.auth_method
(
    username text COLLATE pg_catalog."default",
    password text COLLATE pg_catalog."default",
    salt text COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public.auth_method
    OWNER to postgres;