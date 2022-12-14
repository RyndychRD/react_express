PGDMP     #        
        	    z            db #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1) #   14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)     ;           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            <           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            =           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            >           1262    16386    db    DATABASE     W   CREATE DATABASE db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
    DROP DATABASE db;
                postgres    false            ?           0    0    DATABASE db    ACL     "   GRANT ALL ON DATABASE db TO root;
                   postgres    false    3390                        2615    16388    crud    SCHEMA        CREATE SCHEMA crud;
    DROP SCHEMA crud;
                root    false            ?            1259    16538 	   employees    TABLE       CREATE TABLE crud.employees (
    id integer NOT NULL,
    first_name character varying(100),
    last_name character varying(100),
    middle_name character varying(100),
    subdivision_id integer,
    position_id integer,
    phone_num character varying(30)
);
    DROP TABLE crud.employees;
       crud         heap    root    false    5            ?            1259    16537    employees_id_seq    SEQUENCE     ?   ALTER TABLE crud.employees ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME crud.employees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            crud          root    false    217    5            ?            1259    16526 	   positions    TABLE     Z   CREATE TABLE crud.positions (
    id integer NOT NULL,
    name character varying(100)
);
    DROP TABLE crud.positions;
       crud         heap    root    false    5            ?            1259    16525    positions_id_seq    SEQUENCE     ?   ALTER TABLE crud.positions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME crud.positions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            crud          root    false    5    213            ?            1259    16532    subdivisions    TABLE     ]   CREATE TABLE crud.subdivisions (
    id integer NOT NULL,
    name character varying(100)
);
    DROP TABLE crud.subdivisions;
       crud         heap    root    false    5            ?            1259    16531    subdivisions_id_seq    SEQUENCE     ?   ALTER TABLE crud.subdivisions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME crud.subdivisions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            crud          root    false    215    5            ?            1259    16418 
   migrations    TABLE     ?   CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);
    DROP TABLE public.migrations;
       public         heap    root    false            ?            1259    16417    migrations_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public          root    false    211            @           0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public          root    false    210            ?           2604    16421    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public          root    false    211    210    211            8          0    16538 	   employees 
   TABLE DATA                 crud          root    false    217   ?       4          0    16526 	   positions 
   TABLE DATA                 crud          root    false    213   ?       6          0    16532    subdivisions 
   TABLE DATA                 crud          root    false    215   ?       2          0    16418 
   migrations 
   TABLE DATA                 public          root    false    211           A           0    0    employees_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('crud.employees_id_seq', 3, true);
          crud          root    false    216            B           0    0    positions_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('crud.positions_id_seq', 3, true);
          crud          root    false    212            C           0    0    subdivisions_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('crud.subdivisions_id_seq', 3, true);
          crud          root    false    214            D           0    0    migrations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.migrations_id_seq', 28, true);
          public          root    false    210            ?           2606    16542    employees employees_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY crud.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY crud.employees DROP CONSTRAINT employees_pkey;
       crud            root    false    217            ?           2606    16530    positions positions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY crud.positions
    ADD CONSTRAINT positions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY crud.positions DROP CONSTRAINT positions_pkey;
       crud            root    false    213            ?           2606    16536    subdivisions subdivisions_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY crud.subdivisions
    ADD CONSTRAINT subdivisions_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY crud.subdivisions DROP CONSTRAINT subdivisions_pkey;
       crud            root    false    215            ?           2606    16423    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public            root    false    211            ?           2606    16543    employees fk_position_id    FK CONSTRAINT     {   ALTER TABLE ONLY crud.employees
    ADD CONSTRAINT fk_position_id FOREIGN KEY (position_id) REFERENCES crud.positions(id);
 @   ALTER TABLE ONLY crud.employees DROP CONSTRAINT fk_position_id;
       crud          root    false    217    3231    213            ?           2606    16548    employees fk_subdivision_id    FK CONSTRAINT     ?   ALTER TABLE ONLY crud.employees
    ADD CONSTRAINT fk_subdivision_id FOREIGN KEY (subdivision_id) REFERENCES crud.subdivisions(id);
 C   ALTER TABLE ONLY crud.employees DROP CONSTRAINT fk_subdivision_id;
       crud          root    false    217    215    3233            8      x???v
Q???WH.*M?K?-?ɯLM-V??L?QH?,*.??K?M?Q?I?3s3SRrR???Ҥ?̲?????x??????8'#???4WS???5(?????]!828??W!??'?B+h?(?_?qaӅ??#?/컰	?a??v??!?[X?????kZsy"O?>??֋Mԑ?pO!??2?z???????d?y???@'???Ղ?????r???S?r;??qa+?kF??z??;K33?׸? ????      4   ?   x???v
Q???WH.*M?+?/?,???+V??L?Q?K?M?T?s
?t??sW?q?Us?	u???
?:
?&^l??za??v_l???b???5?'U?7?????{?x˅m?5?h?G?<.. ?\?      6   t   x???v
Q???WH.*M?+.MJ?,?,???+V??L?Q?K?M?T?s
?t??sW?q?Us?	u???
?:
??]l???????5??<?e???FT5??pc??\\ z<]?      2   ?   x???MK?@??{~???Bgg????C?`?WI?"?&tA??zHZqan??[nw??=+??;??????^?Չ:?؊??٪5;???k?xs??ٱF,?B@??$?1Y:Q?л	??ys?A^?t?Dh????ߪ??"?l??}??????x??P"A??|??s?S???^??? s??L?j?`ھ?ތq?h??? ??bgL}??:??Ӆ,%???rwO;[????O??}| 5V??     