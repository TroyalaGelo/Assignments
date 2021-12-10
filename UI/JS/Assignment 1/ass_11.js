console.log("Assignment 11");

(function loop() {
    setTimeout(function () {
        var currentdate = new Date();

        console.log(currentdate.getHours() + ":" + 
        currentdate.getMinutes() + ":" + currentdate.getSeconds());

        loop()
    }, 1000);
  }());
