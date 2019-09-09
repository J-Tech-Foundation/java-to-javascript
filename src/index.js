var sqlite3 = require("sqlite3").verbose();
var util = require("util");
var db = new sqlite3.Database("maven_data");
db.run("CREATE TABLE file(data text, length int)", function(err) {
  console.log("process:a--> ", JSON.stringify(err, null, 4));
});
db.run("INSERT INTO file(data,length) VALUES (?,?)", ["0", 0], function(err) {
  console.log("process:b--> ", JSON.stringify(err, null, 4));
});
/**
 *
 * @param {string} fname the name of file
 */
function __noext(fname) {
  if (`${fname}`.includes(".")) {
  } else {
    return null;
  }
  let x = fname.split(".");
  x.shift();
  return `${util.isArray(x) ? x[0] : x}`;
}
/**
 *
 * @param {string} maven java file to translate
 * @param {string} maven_version version of maven to use
 * @param {function} exe_suitable function to test code if it is exe suitable (work on)
 * @returns java code --> javascript code
 * @example
 * openFile('ex.java', '')
 */
function openFile(maven, maven_version, exe_suitable) {
  let fs = require("fs");
  let copied_file = `${__dirname}/${
    maven_version > 10 ? maven_version : `*`
  }/${__noext(maven)}.java`;
  fs.copyFile(
    maven,
    `${__dirname}/${maven_version > 10 ? maven_version : `*`}/${__noext(
      maven
    )}.java`
  );
}
openFile.prototype.utf8_exe = n =>
  setTimeout(() => {
    let log = console.log;
    log("process:a--> line 4");
    log("process:b--> line 7");
    log("process:c--> line 18::function");
  }, 1000);
