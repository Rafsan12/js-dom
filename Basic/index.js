console.log("Hellow World")

/*
**Dom_Document object Model
**Dom include 3 thnigs.They are 1.HTML,2.CSS,3.JavaScript

**use getElementsByTagName you got all html tag. 

**if you want any specific element in html then you should use getElementById

**if you need more than one elements in html you should you getElementsByclass
*/

const liCollection = document.getElementsByTagName("li");
for(const li of liCollection){
    console.log(li.innerText)
}