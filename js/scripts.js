$(document).ready(function(){
  $("#letter form").submit(function(event){
    event.preventDefault();
    var enterName = $("input#inputName").val();
    var enterAdress = $("input#inputAdress").val();
    var enterCity= $("input#inputCity").val();
    var enterZipcode = $("input#inputZipcode").val();
    var enterMessage = $("textarea#message").val();

    $(".inputName").text(enterName);
    $(".inputAdress").text(enterAdress);
    $(".inputCity").text(enterCity);
    $(".inputZipcode").text(enterZipcode);
    $(".message").text(enterMessage);
    //$("div.homepage").fadeOut();
    $("div#reciept").fadeIn();
    

  });
});
