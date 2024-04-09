CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.');
  
INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/waterfall.png', 'Waterfall!', 'Photo of a waterfall in Iceland.'),
('images/columnar-basalts.png', 'Columnar basalts!', 'Photo of columnar basalts on a black sand beach in Iceland.'),
('images/beach.png', 'Beach!', 'Photo of some sand in San Diego.');