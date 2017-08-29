function format(data, type) {
   if ( type == "number" ) {
	  data = Number (data);
   } else if (type == "boolean" ) {
	   data = Boolean (data);
   } else if (type == "string" ) {
	   data = String (data);
   } else {
	   data = "Error";
   }
   return data;
}
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"
