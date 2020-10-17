CREATE TABLE IF NOT EXISTS recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  recipe_name VARCHAR(100) NOT NULL UNIQUE,
  ingredients_estimated VARCHAR(2500),
  ingredients_measured VARCHAR(2000)
);
/* Cook log table one cook log reference 1 recipe, recipe can have many cook logs referencing it*/
CREATE TABLE IF NOT EXISTS cook_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cook_log_name VARCHAR(100),
  recipe_id INT,
  date VARCHAR(50),
  meal VARCHAR(10),
  rating INT,
  description VARCHAR(250),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);