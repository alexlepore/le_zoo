//routes
let _all = "/all";
let _name = "/name";
let _weight = "/weight";
//html 
let html;
let title = "<h1>welcome to the zoo!</h1>\n";
let all_p = "<p>all</p>";
let name_p = "<p>name</p>";
let weight_p = "<p>weight</p>";
let a_open = "<a href";
let a_close = "</a>\n";

//dont do this
html = 
title + a_open + '="' + _all + '">' + all_p + a_close + 
a_open + '="' + _name + '">' + name_p + a_close +
a_open + '="' + _weight + '">' + weight_p +  a_close;

module.exports = html