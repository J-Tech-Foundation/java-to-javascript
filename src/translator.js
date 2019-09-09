var util = require("util");
function textToBin(text) {
  var length = text.length,
    output = [];
  for (var i = 0; i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8 - bin.length + 1).join("0") + bin);
  }
  return output.join(" ");
}
function BinTotext(str) {
  if (str.match(/[10]{8}/g)) {
    var wordFromBinary = str
      .match(/([10]{8}|\s+)/g)
      .map(function(fromBinary) {
        return String.fromCharCode(parseInt(fromBinary, 2));
      })
      .join("");
    return console.log(wordFromBinary);
  }
}
/**
 *
 * @param {string} line must be toString binary
 */
function splitter(line) {
  var dataaa;
  //-----------
  var more_lines = `${line}`.includes(/\n/);
  if (more_lines) dataaa.lines = true;
  else dataaa.lines = false;
  more_lines = null;
  dataaa.binary = textToBin(line.split(/(\n| |;|{|})/).join(" "));
  dataaa.text = line;
}
