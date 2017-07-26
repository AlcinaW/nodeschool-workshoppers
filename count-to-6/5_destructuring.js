let userArray = process.argv.slice(2); // userArray equals here e.g. [1, "jdoe", "jdoe@example.com", "John", "Doe"]
let [userId, username, email, age, firstName, lastName] = userArray;
let data = {};
[ , data.username, data.email] = userArray;
//[userArray.username, userArray.email]

 console.log(/* your result */data); // {username: "jdoe", email: "john@doe.com"}
