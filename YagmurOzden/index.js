function light(y) {

    var pic;
    if (y == 0) {
      pic = "https://www.w3schools.com/html/pic_bulbon.gif"
    } else {
      pic = "https://www.w3schools.com/html/pic_bulboff.gif"
    }
    document.getElementById('myImage').src = pic;
  }