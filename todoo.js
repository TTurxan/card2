$(document).ready(function () {
  $("#btn").click(function () {
    if ($("#input").val() == "") {
      alert("daxil edin");
    } else {
      $(".list-container").append(`
            <div class="list-1">
                <div class="line"></div>
                <input type="checkbox" class="check">
                <span class="text1">${$("#input").val()} </span>
                <button  class="pen">
                    <i class="fas fa-pen"></i>
                </button>
                <button  class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                <div class="line"></div>
            </div>
            `);
      $("#input").val("");
    }


    $(".list-1").each(function () {
      $(".text3").text($(".list-1").length)
      console.log($(".text3").text());
    });
  });

  $(document).on("click", ".delete", function () {
    $(this).parents(".list-1").remove();
    $(".text3").text($(".list-1").length-1)
  });
  $(document).on("click", ".pen", function () {
    $("#input").val($(".text1").text());
    $(this).parents(".list-1").remove();
  });
  $("#alldelete").click(function(){
      $(".list-1").remove ()
      $(".text3").text (0)
      $("#input").val("")
  })
  $(document).on("click", ".check", function () {
    if ($(this).prop("checked") == true) {
        $(".check").next().css("text-decoration","line-through")
    } else {
        
    }
  });
});
