CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar,
  email varchar,
  password varchar
);

CREATE TABLE music (
  id SERIAL PRIMARY KEY,
  artist varchar,
  title varchar,
  genre varchar,
  location varchar
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

ALTER TABLE playlists ADD FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE playlist ADD FOREIGN KEY (musicid) REFERENCES music (id);

ALTER TABLE playlist ADD FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE;
