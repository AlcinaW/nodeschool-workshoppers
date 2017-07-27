module.exports = function average(...args) {
    return args.reduce((sum, x) => sum + x, 0) / args.length;
};


// module.exports = (...args) => {
//      var sum = args.reduce((soFar, value) => soFar + value, 0);
//      return sum / args.length;
//  };
