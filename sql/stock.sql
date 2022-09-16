-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS categories_id_seq;

-- Table Definition
CREATE TABLE "categories" (
    "id" int8 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    "name" text NOT NULL,
    PRIMARY KEY ("id")
);

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS products_id_seq;

-- Table Definition
CREATE TABLE "products" (
    "id" int8 NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    "name" text NOT NULL,
    "amount" int8 NOT NULL,
    "price" float8 NOT NULL,
    "category_id" int8 NOT NULL,
    "detail" text,
    PRIMARY KEY ("id"),
    CONSTRAINT FK_products_categories FOREIGN KEY(category_id)
        REFERENCES categories(id)
);

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS transactions_id_seq;

-- Table Definition
CREATE TABLE "public"."transactions" (
    "id" int8 NOT NULL DEFAULT nextval('transactions_id_seq'::regclass),
    "product_id" int8 NOT NULL,
    "amount" int8 NOT NULL,
    "date" timestamptz NOT NULL DEFAULT now(),
    "action" varchar NOT NULL,
    PRIMARY KEY ("id"),
    CONSTRAINT FK_transactions_products FOREIGN KEY(product_id)
        REFERENCES products(id)
);