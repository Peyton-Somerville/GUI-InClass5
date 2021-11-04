// ADD NEW ITEM TO END OF LIST
// ADD NEW ITEM START OF LIST
var list = document.getElementsByTagName("ul")[0].innerHTML;

list = "<ul><li>kale</li>" + list +  "<li>cream</li></ul>";
document.getElementsByTagName("ul")[0].innerHTML = list;


// ADD A CLASS OF COOL TO ALL LIST ITEMS
var elementList = document.getElementsByTagName("li");

for (var i = 0; i < elementList.length; i++) {
    elementList[i].setAttribute('class', 'cool');
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var items = document.getElementsByClassName("cool");
numItems = items.length;

var newHeading = "<h2>Buy groceries <span>" + numItems + "</span></h2>";
document.getElementsByTagName("h2")[0].innerHTML = newHeading;