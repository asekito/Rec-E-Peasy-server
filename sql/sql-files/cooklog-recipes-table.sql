CREATE TABLE IF NOT EXISTS recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  recipe_name VARCHAR(100) NOT NULL UNIQUE,
  ingredients VARCHAR(2500)
);
CREATE TABLE IF NOT EXISTS cook_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cook_log_name VARCHAR(100),
  recipe_id INT NULL,
  date VARCHAR(50),
  meal VARCHAR(10),
  rating INT,
  description VARCHAR(250),
  FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);