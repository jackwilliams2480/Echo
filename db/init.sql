CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  username varchar,
  email varchar,
  password varchar
);

CREATE TABLE music (
  musicid SERIAL PRIMARY KEY,
  title varchar,
  artist varchar,
  genre varchar,
  location varchar,
  duration varchar,
  numOfPlay int
);

CREATE TABLE playlists (
  playlistid SERIAL PRIMARY KEY,
  userid int,
  playlistTitle varchar
);

CREATE TABLE playlist  (
  userid int,
  playlistTitle varchar,
  musicid int,
  PRIMARY KEY(userid, playlistTitle)
);

CREATE TABLE recommendation (
  recommendationid int PRIMARY KEY,
  userid int,
  artist varchar,
  musicid int
);