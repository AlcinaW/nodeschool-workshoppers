module.exports = function (str) {
  var m = \\.exec(str)
  return m ? m[1] : null
}
