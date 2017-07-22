//var mydir = process.argv;
//var inputs = mydir.slice(2);

// var setImmediate = () => { console.log(this.yelp); }
// setImmediate();


// var foot = {
//     kick: function () {
//         this.yelp = "Ouch!";
//         setImmediate(function () {
//             console.log(this.yelp);
//         });
//     }
// };
// foot.kick();

var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate = () => { console.log(this.yelp); }
  }
};
foot.kick();
