//https://www.tothenew.com/blog/connect-to-postgresql-using-javascript/
/*var pg = require("pg");
var connectionString = "postgres://postgres:root123@127.0.0.1:5432/employees_db";
var pgClient = new pg.Client(connectionString);
pgClient.connect();

var query = pgClient.query("SELECT id, emp_no, birth_date, first_name, last_name, gender, hire_date FROM public.employees limit 10;");

console.log(query)

*/
d3.csv("./books").then(function(tvData) {

    console.log(tvData);
  
    // log a list of names
    var names = tvData.map(data => data.name);
    console.log("names", names);
  
    // Cast each hours value in tvData as a number using the unary + operator
    tvData.forEach(function(data) {
      data.hours = +data.hours;
      console.log("Name:", data.name);
      console.log("Hours:", data.hours);
    });
  }).catch(function(error) {
    console.log(error);
  });
  