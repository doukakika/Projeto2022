// Get User's name
var username = "";

function send_msg(msg, callback) {
  var prevState = $("#conversation").html();
  if (prevState.length > 3) {
    prevState = prevState + "<br />";
  }

  //Add bot name before each message
  $("#conversation").html(
    prevState +
    "<div class='bot-log'>" +
    "<span class='current_msg bot-dialog dialog' style='left:-40px; position:relative;'><span class='bot-di-arrow'></span>" +
    msg +
    "</span> </div>"
  );

  var $to = $(".bot-dialog");
  setTimeout(function () {
    $to.css("left", 20 + "px");
  }, 1000);

  var $from = $(".user-dialog");
  setTimeout(function () {
    $from.css("right", 20 + "px");
  }, 0);

  $(".current_msg, .currentmsg").css("opacity", 0);

  //Add and remove typing indicator when firing typing function
  $(".bot-log:last-child").append(
    '<div class="typing-indicator"><span></span><span></span><span></span></div>'
  );
  $(".typing-indicator").delay(800).fadeOut(function () {
    $(".bot-log").prev(".typing-indicator").remove();
  });
  $(".user-log .currentmsg").delay(0).fadeIn(function () {
    $(".user-log .currentmsg").css("opacity", 1);
    $(this).removeClass("currentmsg");

    $(".user-log .currentmsg").removeClass("currentmsg");
  });
  $(".bot-log .current_msg").delay(1200).fadeIn(function () {
    $(".bot-log .current_msg").css("opacity", 1);
    $(this).removeClass("current_msg");

    if (typeof callback == "function") callback();
  });
  $("#conversation").scrollTop($("#conversation").prop("scrollHeight"));
}

//if no name saved, ask
//get name
function get_username() {
  send_msg("Olá, eu sou o Dragonbot, estou aqui para te ajudar!", function () {
    send_msg("Pode me dizer qual é o seu nome?")
  });
}

function ai(msg) {
  if (username.length < 1) {
    username = msg;
    send_msg("É um prazer " + username + ". Com o que posso ajudar?", function () {

    });
  }






  // Remove text bar
  $("#").empty();


  $("#").on("click", ".options", function () {
    // Remove buttons on click
    $("#").empty();
    var text = $(this).text();
    var b_val = $(this).val();

    // Set user's name in front of each message
    var userName = "<span class='username user-dialog dialog'> Me: </span>";
    var newMsg = text;

    var prevState = $("#conversation").html();
    if (prevState.length > 3) {
      prevState = prevState;
    }
    $("#conversation").html(
      prevState +
      "<div class='user-log'>" +
      "<span class='currentmsg user-dialog dialog' style='right:-40px; position:relative;'><span class='user-di-arrow'></span>" +
      newMsg +
      "</span> </div>"
    );

    $("#conversation").scrollTop($("#conversation").prop("scrollHeight"));

    //if user selects certifications
    if (b_val == "my_certifications") {
      send_msg("Awesome! Fun fact: Did you know we have over 75,000 certified users? Please select which area of the certification process you are having trouble with:", function () {
        $("#").append(
          '<button class="options one" value="my_practicum" type="button">My Practicum</button>' +
          '<button class="options one" value="exams"type="button">The Exams</butto/>' +
          '<button class="options one" value="badges"type="button">My Badge or Certificate</butto/>');
      });
    } else if (b_val == "my_practicum") {
      send_msg("Qual o seu endereço de e-mail?", function () {
        $("#").append(
          '<textarea id="message" class="practicum-bar" placeholder="Type Your Name - Then Hit Enter"></textarea><button style="display:none;" id="sendMsg">Send</button>');
        email = msg;
        console.log(email);
      });
    }
  })
}

// function options

$(function () {
  get_username();

  $("#Message").on("keypress", "#message", function (event) {

    if (event.which == 13) {
      console.log("my test");
      if ($("#slideThree").prop("checked")) {
        $("#sendMsg").click();
        event.preventDefault();
      }
    }
  });

  $("#sendMsg").click(function () {
    // Set user's name in front of each message
    var userName =
      "<span class='username user-dialog dialog'>" +
      "<span class='user'>Me: </span>";
    var newMsg = $("#message").val();

    $("#message").val("");

    var prevState = $("#conversation").html();
    if (prevState.length > 3) {
      prevState = prevState;
    }
    $("#conversation").html(
      prevState +
      "<div class='user-log'>" +
      "<span class='currentmsg user-dialog dialog' style='right:-20px; position:relative;'><span class='user-di-arrow'></span>" +
      newMsg +
      "</span> </div>"
    );
    ai(newMsg);
    //fade in name bubble
    var $from = $(".user-dialog");
    setTimeout(function () {
      $from.css("right", 20 + "px");
    }, 0);

    $(".current_msg, .currentmsg").css("opacity", 0);
    $(".user-log .currentmsg").delay(0).fadeIn(function () {
      $(".user-log .currentmsg").css("opacity", 1);
      $(this).removeClass("currentmsg");

      $(".user-log .currentmsg").removeClass("currentmsg");
    });

    $("#conversation").scrollTop($("#conversation").prop("scrollHeight"));
  });
});


//TESTE
$(function () {
  get_teste();

  $("#Message").on("keypress", "#message", function (event) {

    if (event.which == 13) {
      console.log("my test");
      if ($("#slideThree").prop("checked")) {
        $("#sendMsg").click();
        event.preventDefault();
      }
    }
  });

  $("#sendMsg").click(function () {
    // Set user's name in front of each message
    var userName =
      "<span class='username user-dialog dialog'>" +
      "<span class='user'>Me: </span>";
    var newMsg = $("#message").val();

    $("#message").val("");

    var prevState = $("#conversation").html();
    if (prevState.length > 3) {
      prevState = prevState;
    }
    $("#conversation").html(
      prevState +
      "<div class='user-log'>" +
      "<span class='currentmsg user-dialog dialog' style='right:-20px; position:relative;'><span class='user-di-arrow'></span>" +
      newMsg +
      "</span> </div>"
    );
    aiteste(newMsg);
    //fade in name bubble
    var $from = $(".user-dialog");
    setTimeout(function () {
      $from.css("right", 20 + "px");
    }, 0);

    $(".current_msg, .currentmsg").css("opacity", 0);
    $(".user-log .currentmsg").delay(0).fadeIn(function () {
      $(".user-log .currentmsg").css("opacity", 1);
      $(this).removeClass("currentmsg");

      $(".user-log .currentmsg").removeClass("currentmsg");
    });

    $("#conversation").scrollTop($("#conversation").prop("scrollHeight"));
  });
})


