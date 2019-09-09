function* Gen(txt) {
  var x = txt.split(" ");
  for (let i = 0; i <= x.length; i++) {
    yield x[i];
  }
}
