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

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/frozen-lake.png', 'Natural ice!', 'Photo of a frozen lake in New York with a hockey stick in the distance.'),
('images/tree-up.png', 'Look at the tree!', 'Photo looking up at the sun through tree leaves on the St. Thomas campus in St. Paul, MN.'),
('images/nefarious-rabbit.png', 'This little jerk!', 'Photo of one of the rabbits who beheaded my tulips.'),
('images/rockies-from-plane.png', 'The Rockies!', 'Photo of the rocky mountains, taken from a plane.'),
('images/delphinium.png', 'Delphinia!', 'Photo of delphinium flowers in front of a red shed with rabbit-proofing because of the nefarious rabbits.'),
('images/nl-tulips.png', 'Tulips!', 'Close-up photo of a field tulips in the Netherlands.');

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/ny-lake.png', 'Morning fog!', 'Photo of morning fog on a lake in NY in the fall.'),
('images/bill-pig.png', 'Pigs need regular exercise', 'Photo of my father very happily walking a pig on a leash in rural Maine.');