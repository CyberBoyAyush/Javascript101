const accountId = 14456;
let accountName = "Ayush Sharma";
var alternateAccountName = "Ayush Sharma JI";

accountId = 11876281; // we cant change the constant value
accountName = "Ayush"; // we can change the let and var value
alternateAccountName = "Ayush Sharma"; // we can change the let and var value

// we prefer to use let over var due to block scope and fucntion scope
console.table({ accountId, accountName, alternateAccountName });
