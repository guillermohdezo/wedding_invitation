window.onload = function() {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isDarkMode) {
        $("#fav").attr("href","./image/icons/favicon-dark.png");
    } else {
        $("#fav").attr("href","./image/icons/favicon.png");
    }
    console.log($("#fav"));
    updateDate();
    change(1);
    
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        autoWidth: true,
        speed: 1000,
        padding: '0',
        focus  : 'center',
        intersection: {
            inView: {
              autoplay: true,
            }
        },
    });
    splide.mount(window.splide.Extensions);

    //"https://docs.google.com/forms/d/e/1FAIpQLSddbzAfZAo9u8RTljKAnj_AXucffKxLWReTuNAP1mctvuXgyQ/viewform?usp=pp_url&entry.282640585=Guillermo&entry.381832899=Si&entry.1096580569=2&entry.1040855414=asd&entry.480214021=asd&entry.1193354740=asd&entry.1837214942=asd&entry.59183408=asd&entry.1554463775=asd&entry.1591446969=asd";
    $("body").scroll(function(){
        if($("body").scrollTop() > 1) {
            $(".top-bar").addClass("top-bar-scroll");
        } else {
            $(".top-bar").removeClass("top-bar-scroll");
        }
        showImage($("body").scrollTop());
    });

    $(".phone-format").change(()=> {
        var cleaned = ('' + $(".phone-format").val()).replace(/\D/g, '');
        var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          var intlCode = (match[1] ? '+1 ' : '');
          $(".phone-format").val([intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(''));
        }
    });

    $('#flexCheckDefault').change(function() {
        $("#check-name").val(this.checked ? "Si" : "No");
    });

    var code = window.location.href.split("/").pop();
    if(code != "" && code[0] == "#") {
        if(localStorage.getItem('code') == "" || localStorage.getItem('code') != code)
            localStorage.setItem('code', code);
    }
    showForm(code.replace("#", ""));
};
var icacdn = {
    XtSlPi: [ 3, 0],
    uZj0i3: [ 2, 0],
    M8HrWM: [ 2, 0],
    rmfcjj: [ 2, 0],
    q2LbeR: [ 5, 0],
    j32EVa: [ 4, 0],
    V1jhdn: [ 2, 0],
    O59On8: [ 5, 0]
};
var invInputList = [
    "entry.1040855414",
    "entry.480214021",
    "entry.1193354740",
    "entry.1837214942",
    "entry.59183408",
    "entry.1554463775",
    "entry.1269600378",
    "entry.1384721611",
    "entry.934590761",
    "entry.1092424215",
    "entry.86829769"
]
var showMenuBan = true
function showMenu() {
    if(showMenuBan){
        $(".left-bar").addClass("show-menu");
    } else {
        $(".left-bar").removeClass("show-menu");
    }
    showMenuBan = !showMenuBan;
}

function showForm(code) {
    if(code != "") {
        var cint = icacdn[code][0];
        var cnin = icacdn[code][1];
        if(cint > 0)
            $("#input-inv").append(`<label class="form-label" placeholder="Apellido Materno">Agrega los nombres de tus acompañantes</label>`)
        for (let index = 0; index < cint; index++) {
            $("#input-inv").append(`<div class='mb-3'><input class='form-control' name='${invInputList[index]}' type='text'/></div>`);
        }
        if(cnin > 0) {
            $("#cka").append(`<label class="form-label" placeholder="Apellido Paterno">¿Cuántos niños asistirán?</label><input id="cantna" class="form-control" max="${cnin}" name="entry.1096580569" type="text"/>`);
            $("#cantna").change(()=> {
                if($("#cantna").val() > cnin) {
                    $("#cantna").val(cnin);
                }
            });
        }
    }
}

function change(index) {
    $("body").scrollTop(0);
    $("home").hide();
    $("hosting").hide();
    $("history").hide();
    $("formulario").hide();

    $("#home-option").removeClass("nav-selected");
    $("#hosting-option").removeClass("nav-selected");
    $("#history-option").removeClass("nav-selected");
    $("#home-option-1").removeClass("nav-selected");
    $("#hosting-option-1").removeClass("nav-selected");
    $("#history-option-1").removeClass("nav-selected");
    switch (index) {
        case 1:
            $("home").show();
            $("#home-option").addClass("nav-selected");
            $("#home-option-1").addClass("nav-selected");
            break;
        case 2:
            $("history").show();
            $("#history-option").addClass("nav-selected");
            $("#history-option-1").addClass("nav-selected");
            break;
        case 3:
            $("hosting").show();
            $("#hosting-option").addClass("nav-selected");
            $("#hosting-option-1").addClass("nav-selected");
            break;
        case 4:
            $("formulario").show();
            break;
        default:
            break;
    }
}
var countDownDate = new Date("May 14, 2022 16:00:00").getTime();

function updateDate() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if($("#time").length) {
        // Display the result in the element with id="demo"
        document.getElementById("time").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    
        // If the count down is finished, write some text
        if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = 0 + "d " + 0 + "h " + 0 + "m " + 0 + "s ";
        }
    }
}

// Update the count down every 1 second
var x = setInterval(updateDate, 1000);

function showImage(scrollPos) {
    $(".image-efect").each(function() {
        var pos = $(window).height() + scrollPos;
        var elempos = $(this).offset().top + scrollPos;
        if(pos > elempos){
            $(this).addClass("show-image")
        } else {
            $(this).removeClass("show-image")
        }
    });
}