var friendsArray = ["Matt", "Josh", "January", "Brandi", "Daniel"]

document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
    button.innerText = "Sing!";
    button.addEventListener("click", function () {
        for (var i = 0; i < friendsArray.length; i++) {
            var div = document.createElement("div");
            div.className ="friend";
            var h3 = document.createElement("h3");
            var text= document.createTextNode(friendsArray[i]);
            h3.appendChild(text);
            div.appendChild(h3);
            document.body.appendChild(div);
        
            for (j = 99; j > 0; j--) {         
            if (j === 2) { 
                var paragraph = document.createElement('p'); 
                var text = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
                paragraph.appendChild(text);
                div.appendChild(paragraph);
            }
            else if (j === 1){
                var paragraph = document.createElement('p');
                var text = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friendsArray[i] + " strikes one out, clears it all out,  no more lines of code in the file" );
                paragraph.appendChild(text);
                div.appendChild(paragraph);
            }
            else {
                var paragraph = document.createElement("p");
                var text = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file" )
                paragraph.appendChild(text);
                div.appendChild(paragraph);
                
            }
            }





            
        }
    });
    document.body.appendChild(button);
});










