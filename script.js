$(document).ready(function () {
    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycby5BhnX60bJPlguSplKL1PDi5gaU5UbZ5lgLainKwoE_3j90_-0Rh8FMDO2DsOytKTDmg/exec",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
           function goUrl(){
                let search = $('#search').val();
                if(search !== ""){
                    var url = "https://www.google.com/search?q="+search;
                    window.location.href = url;
                };
            };
            goUrl();
          },
          200: function () {
            //tomato
          }
        }
      });
      event.preventDefault();
    });

  });
  $(function(){
      var width = $('.image').width()*0.9 + "px";
      $('#serch').css('width',width);
  })