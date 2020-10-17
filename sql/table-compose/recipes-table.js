exports.up = function(db) {
  var filePath = path.join(__dirname, "../sql-files/recipes-table.sql");
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf-8" }, (err ,data) => {
      if (err) return reject(err);
      console.log("received data: " + data);
      resolve(data);
    });
  }).then(data => {
    return db.runSql(data);
  })
}