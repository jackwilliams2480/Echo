CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  username varchar,
  email varchar,
  password varchar
);

CREATE TABLE music (
  id int PRIMARY KEY,
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
  userid int PRIMARY KEY,
  playlistTitle varchar PRIMARY KEY,
  musicid int
);

ALTER TABLE playlists ADD FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE;

ALTER TABLE playlist ADD FOREIGN KEY (musicid) REFERENCES music (id);

ALTER TABLE playlist ADD FOREIGN KEY (playlistTitle) REFERENCES playlists (playlistTitle);

ALTER TABLE playlist ADD FOREIGN KEY (userid) REFERENCES users (id) ON DELETE CASCADE;
