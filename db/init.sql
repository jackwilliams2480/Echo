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
  userid int PRIMARY KEY,
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

ALTER TABLE playlists ADD FOREIGN KEY (userid) REFERENCES playlists (userid);

ALTER TABLE playlist ADD FOREIGN KEY (userid) REFERENCES users (userid);

ALTER TABLE recommendation ADD FOREIGN KEY (userid) REFERENCES users (userid);
ALTER TABLE recommendation ADD FOREIGN KEY (musicid) REFERENCES music (musicid);