$("#list1").on("click", "li", function() {
    $("#input1").html($(this).text());
});

$("#list2").on("click", "li", function() {
    $("#input2").html($(this).text());
});

$("#list3").on("click", "li", function() {
    $("#input3").html($(this).text());
});

$(document).ready(function() {
    $("div#productsContainer img").load(function() {
       console.log($(this).height()-1000);
       

       $(this).parent().parent().height($(this).height()+70);
       console.log($(this).parent().parent().attr('id'))

    });
});

  // var imgHeight;
  // var imgWidth;

  // function findHight() {
  //   console.log("image height "+this.clientHeight);
  //   console.log("image width "+this.clientWidth);
  // }

  // function showImage(imgPath) {
  //   var myImage = new Image();
  //   myImage.name = imgPath;
  //   myImage.onload = findHHandWW;
  //   myImage.src = imgPath;
  // }
