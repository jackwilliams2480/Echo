CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "email" varchar,
  "password" varchar,
  "username" varchar
);

CREATE TABLE "music" (
  "id" int PRIMARY KEY,
  "artist" varchar,
  "title" varchar,
  "genre" varchar,
  "location" varchar
);

CREATE TABLE "playlist" (
  "userid" int PRIMARY KEY,
  "musicid" int
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "playlist" ("userid");

ALTER TABLE "playlist" ADD FOREIGN KEY ("musicid") REFERENCES "music" ("id");
