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