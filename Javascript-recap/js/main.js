function handleSubmit()
{
    var email;
    var name;
    var message;

    email = document.getElementById('email').value;
    name = document.getElementById('name').value;
    message = document.getElementById('message').value;

    if (email == '' || name == '' || message == '') {
      alert('Kindly, fill all input field'); 
      return;
     }


    alert('Hello your email is: ' + email);

    console.log(name);
    console.log(message);

    var userInfo = {userName : name, userEmail: email, userMessage: message};
    console.log(userInfo);
}

$(document).ready(function(){
  $("#Alert").click(function(){
      $("h3").hide();
      alert("The paragraph is now hidden");
  });
});


$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});

$(document).ready(function(){
    $("#hiding").click(function(){
        $("h1").hide(1000);
    });
});

$(document).ready(function(){
    $("#Toggle").click(function(){
        $("h2").toggle();
    });
});

$(document).ready(function(){
    $("#FadeIn").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("#FadeOut").click(function(){
        $("#div4").fadeOut();
        $("#div5").fadeOut("slow");
        $("#div6").fadeOut(3000);
    });
});

$(document).ready(function(){
    $("#fadeToggle").click(function(){
        $("#div7").fadeToggle();
        $("#div8").fadeToggle("slow");
        $("#div9").fadeToggle(3000);
    });
});

$(document).ready(function(){
    $("#fadeTo").click(function(){
        $("#div10").fadeTo("slow", 0.25);
        $("#div11").fadeTo("quick", 0.5);
        $("#div12").fadeTo("milliseconds", 0.75);
    });
});

$(document).ready(function(){
    $("#Animation").click(function(){
        $("#div13").animate({left: '250px'});
    });
});

$(document).ready(function(){
    $("#Anime").click(function(){
        $("#div14").animate({ 
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'});
    });
});

$(document).ready(function(){
    $("#Animate1").click(function(){
        $("#div15").animate({ 
        left: '250px',
        opacity: '0.5',
        height: '+=200px',
        width: '+=200px'});
    });
});

$(document).ready(function(){
    $("#Animate2").click(function(){
        $("#div16").animate({ 
        left: '250px',
        opacity: '0.5',
        height: 'toggle',
        });
    });
});


$(document).ready(function(){
    $("#Animate3").click(function(){
        $("#div17").animate({ 
        opacity: '0.5',
        height: 'toggle',
        });
    });
});


$(document).ready(function(){
    $("#Animate4").click(function(){
            var div = $("#div18");
            div.animate({height: '300px', opacity: '0.4'}, "slow");
            div.animate({width: '300px', opacity: '0.8'}, "slow");
            div.animate({height: '100px', opacity: '0.4'}, "slow");
            div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});

$(document).ready(function(){
    $("#Animate5").click(function(){
            var div = $("#div19");
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '3em'}, "slow");
    });
});

$(document).ready(function(){
    $("#Funny").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test1").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test1").html());
    });
});

$(document).ready(function(){
    $("#Value1").click(function(){
        alert("Value: " + $("#test").val());
    });
});

$(document).ready(function(){
    $("#Href1").click(function(){
        alert($("#w3s").attr("href"));
    });
});

$(document).ready(function(){
    $("#Link1").click(function(){
        $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    });
});

$(document).ready(function(){
    $("#btn4").click(function(){
        $("#test3").text("Hello world!");
    });
    $("#btn5").click(function(){
        $("#test4").html("<b>Hello world!</b>");
    });
    $("#btn6").click(function(){
        $("#test5").val("Dolly Duck");
    });
});

$(document).ready(function(){
    $("#btn7").click(function(){
        $("#test5").text(function(i, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });

    $("#btn8").click(function(){
        $("#test6").html(function(i, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });
});

$(document).ready(function(){
    $("#btn9").click(function(){
        $("h4").append(" <b>Appended text</b>.");
    });

    $("#btn10").click(function(){
        $("ol").append("<li>Appended item</li>");
    });
});

$(document).ready(function(){
    $("#btn11").click(function(){
        $("h5").prepend("<b>Prepended text</b>. ");
    });
    $("#btn12").click(function(){
        $("ol").prepend("<li>Prepended item</li>");
    });
});

$(document).ready(function(){
    $("#Remove").click(function(){
        $("#div20").remove();
    });
});

$(document).ready(function(){
    $("#Removing").click(function(){
        $("#div21").empty();
    });
});

