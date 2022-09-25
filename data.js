const fs = require('fs');
const today_date = new Date().toISOString().split('T')[0];
let data = fs.readFileSync("./data_of_2022-09-22.json");
data = JSON.parse(data);
module.exports = data;