function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/9191/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Terima kasih atas masukannya. Have a great day! :)")
        },
        error: function(){
          alert("Yah, kayaknya pesanmu belum ter-submit nih. Mungkin coba lagi nanti :(")
        }
    });
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}