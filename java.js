var friends = ["Matt:", "Josh:", "January:", "Brandi:", "Daniel:"];
var friendsArray= ["Matt", "Josh", "January", "Brandi", "Daniel"]



for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);

    for (j = 99; j > 0; j--) { 


    if (j === 2) {
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
    }
    else if (j === 1){
        console.log(j + " line of code in the file, " + j + " line of code; " + friendsArray[i] + " strikes one out, clears it all out,  no more lines of code in the file");
    }
    else {
        console.log(j + " line of code in the file, " + j + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
    }
    
    }

}