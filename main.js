$(document).ready(function () {

    // $(".btn .fa-play-cirlce-o").on('click', function(){
    //    $(this).hide();
    //    $(".fa-pause-circle-o").fadeIn();
    //    $("#myMusic")[0].play();
    // });

    // $(".btn .fa-pause-cirlce-o").on('click', function(){
    //     $(this).hide();
    //     $(".fa-play-circle-o").fadeIn();
    //     $("#myMusic")[0].pause();
    //  });

     $.getJSON(
        "https://icanhazdadjoke.com/",
        function (data) {
            console.log("Cool, here's some joke data: ", data);
            $("#joke").text(data.joke.toString()).css("font-style", "italic");

        },
        function (error) {
            console.log("Oops something went wrong!", error);
        }
    );

    switch (moment().day()) {
        case 0:
            day = "Sunday";
            $("#greeting").text("Hello Chase!");
            $("#greeting").css("color", "green");
            $(".lead").text("Be grateful, honest, and modest!");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Today is " + moment().format("dddd, MMM Do"));
            $("#rightNow").text("Now");
            $("#rightNow").css("background-color", "green");
            $("#rightNow").css("color", "white");
            // $(".timeBox").css("color", "green");
            $(".language").text("Coding");
            $(".subject").text("Math");
            $(".science").text("Computer Science");
            $(".code").text("Job Hunt");
            $("#rightBox").css("background-color", "green");
            $("#rightBox").css("color", "white");
            // $('#photoBox').append('<img id="theImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmgNuPTHEbnvV6tcgJIC2ykJuwWunmlWyEBw&usqp=CAU"/>');
            $('#photoBox').append('<img id="theImg" src="https://sallystrand.com/Pages/Sally%20Strand%20_%20Pastel%20Journal%20of%20the%20Pastel%20Society%20of%20America,%20December,%202009%20_%20A%20New%20Day,%20A%20New%20Vision_files/PoolsideWhiteHat440.jpg"/>');
            // $("mainContainer").css("background-image", "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhY316bv7p6tAEWrSn56iMErX-6MuUhGKRFQ&usqp=CAU" + ")");
            break;

        case 1:
            day = "Monday";
            $("#greeting").text("Hola Chase!")
            $("#greeting").css("color", "red");
            $(".lead").text("Todo el mundo miente.\n La única ventaja es que nadie escucha.");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Hoy es lunes, " + moment().format("MMM Do"));
            $("#rightNow").text("Ahora");
            $("#rightNow").css("background-color", "red");
            $("#rightNow").css("color", "white");
            // $(".timeBox").css("color", "red");
            $(".language").text("Español");
            $(".subject").text("Math");
            $(".science").text("la ingeniería");
            $(".code").text("HTML/CSS");
            $("#rightBox").css("background-color", "red");
            $("#rightBox").css("color", "white");
            $('#photoBox').append('<img id="theImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Monet_-_ice-floes-on-the-seine-at-bougival-1868.jpg/1280px-Monet_-_ice-floes-on-the-seine-at-bougival-1868.jpg"/>');
            // $("#mainContainer").css("background-image", "url(" + "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Monet_-_ice-floes-on-the-seine-at-bougival-1868.jpg/1280px-Monet_-_ice-floes-on-the-seine-at-bougival-1868.jpg" + ")");

            break;

        case 2:
            day = "Tuesday";
            $("#greeting").text("Bom dia Chase!")
            $("#greeting").css("color", "yellowgreen");
            $(".lead").text("Não anda com o nariz empinado!");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Hoje é terça-feira" + moment().format("dddd, MMM Do"));
            $("#rightNow").text("Agora");
            $("#rightNow").css("background-color", "yellowgreen");
            $("#rightNow").css("color", "white");
            // $(".timeBox").css("color", "yellowgreen");
            $(".language").text("Português");
            $(".subject").text("Math");
            $(".science").text("a biologia");
            $(".code").text("Java Script");
            $("#rightBox").css("background-color", "yellowgreen");
            $("#rightBox").css("color", "white");
            $('#photoBox').append('<img id="theImg" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Delacroix_-_La_Mort_de_Sardanapale_%281827%29.jpg"/>');
            // $("#mainContainer").css("background-image", "url(" + "https://upload.wikimedia.org/wikipedia/commons/2/2f/Delacroix_-_La_Mort_de_Sardanapale_%281827%29.jpg" + ")");
            break;

        case 3:
            day = "Wednesday";
            $("#greeting").text("Buon Giorno Chase!");
            $("#greeting").css("color", "purple");
            $(".lead").text("Sopra la panca la capra campa, sotto la panca la capra crepa. \n Over the bench the goat lives, under the bench the gost dies.");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Oggi è mercoledí, " + moment().format("MMM Do"));
            $("#rightNow").text("Ora");
            $("#rightNow").css("background-color", "purple");
            $("#rightNow").css("color", "white");
            // $(".timeBox").css("color", "purple");
            $(".language").text("Italiano");
            $("#subject1").text("Chess");
            $("#subject2").text("Philosophy");
            $(".science").text("L\'economia");
            $(".code").text("JQuery/React.Js");
            $("#rightBox").css("background-color", "purple");
            $("#rightBox").css("color", "white");
            $('#photoBox').append('<img id="theImg" src="https://upload.wikimedia.org/wikipedia/commons/7/74/William_Blake_002.jpg"/>');
            // $("#photoBox").css("background-image", "url(" + "https://upload.wikimedia.org/wikipedia/commons/7/74/William_Blake_002.jpg" + ")");
            break;

        case 4:
            day = "Thursday";
            $("#greeting").text("Salut Chase!");
            $(".lead").text("Le soleil luit pour tout le monde.");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Nous sommes jeudi, " + moment().format("MMM Do"));
            $("#rightNow").text("À présent");
            $("#rightNow").css("background-color", "blue");
            $("#rightNow").css("color", "white");
            // $(".timeBox").css("color", "blue");
            $(".language").text("Français");
            $(".subject").text("L\'art");
            $(".science").text("la chimie");
            $(".code").text("Node/Express");
            $("#rightBox").css("background-color", "blue");
            $("#rightBox").css("color", "white");
            $('#photoBox').append('<img id="theImg" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rembrandt_-_The_Philosopher_in_Meditation.jpg"/>');
            // $("#mainContainer").css("background-image", "url(" + "https://upload.wikimedia.org/wikipedia/commons/d/d6/Rembrandt_-_The_Philosopher_in_Meditation.jpg" + ")");
            break;

        case 5:
            day = "Friday";
            $("#greeting").text("Es ist ein schöner Tag Chase!")
            $(".lead").text("Ich will die Ruhe der Natur genießen. \n I want to enjoy nature's calm.");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Heute ist Freitag, " + moment().format("MMM Do"));
            $("#rightNow").text("jetz gleich");
            $("#rightNow").css("background-color", "yellow");
            $("#rightNow").css("color", "black");
            // $(".timeBox").css("color", "yellow");
            $(".language").text("Deutsch");
            $(".subject").text("Math");
            $(".science").text("die Physik");
            $(".code").text("MongoDB/MySQL");
            $("#rightBox").css("background-color", "yellow");
            $('#photoBox').append('<img id="theImg" src="https://www.moma.co.uk/wp-content/uploads/2014/07/Curiot-Distorted-Nature.jpg"/>');
            // $("#mainContainer").css("background-image", "url(" + "https://www.moma.co.uk/wp-content/uploads/2014/07/Curiot-Distorted-Nature.jpg" + ")");

            break;


        case 6:
            day = "Saturday";
            $("#greeting").text("!Chase أهلاً");
            $(".lead").text("ممكن\n mum-kin.\n It is possible");
            $(".lead").css("font-style", "italic");
            $("#currentDay").text("Today is " + moment().format("dddd, MMM Do"));
            $("#rightNow").text("اَلآ");
            $("#rightNow").css("background-color", "pink");
            $("#rightNow").css("color", "black");
            $(".language").text("عَرَبِيّ");
            $("#subject1").text("Latin");
            $("#subject2").text("Classics");
            $(".science").text("Anatomy/Physiology");
            $(".code").text("Job Hunt");
            $("#rightBox").css("background-color", "pink");
            $('#photoBox').append('<img id="theImg" src="https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-l039ombre-samuel-apparaissant-sauel.jpg"/>');
            // $("#mainContainer").css("background-image", "url(" + "https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-l039ombre-samuel-apparaissant-sauel.jpg" + ")");
    }
   
   

    function update() {
        const curHour = moment().hours();
        $(".timeBox").each(function () {
            const blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(blockHour);

            if (blockHour < curHour) {
             
                $(this).addClass("past");
               


            } else if (blockHour === curHour) {
               
                $(this).removeClass("past");
                $(this).addClass("present");
               
            }
            else {
               
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
               
            }
        });
    }


    update();




});


