var current_light_index = 0;

var max_light_count = 5;

var move = "RIGHT";

var myInterval = null;

function updateLight(){
    $(".light").removeClass("light_on");
    $(".light").removeClass("light_on2");

    $(".light").eq(current_light_index).addClass("light_on");

    if(move === "RIGHT"){
        if(current_light_index !== 0){
            $(".light").eq(current_light_index - 1).addClass("light_on2");
        }

        ++current_light_index;
        if(current_light_index > max_light_count - 2){
            move = "LEFT";
        }
    }else{
        $(".light").eq(current_light_index + 1).addClass("light_on2");

        --current_light_index;

        if(current_light_index === 0){
            move = "RIGHT";
        }
    }
}

$("#btn-start").on('click',() =>{
    myInterval = setInterval(updateLight,150);
    $("#audio")[0].play();
});

$("#btn-stop").on('click',() =>{
    clearInterval(myInterval);
    $("#audio")[0].pause();
});