$(document).ready(
    //making the p disappear

    $('p').click(function(){
        $(this).hide();
    })
)

$("#Welcome").html("<h1>Welcome to Jquery Lab</h1>")

$("body").append("<div class='jap'><p>HELLO</p></div>").append("<div class='jap'><p>HI</p></div>")
$("div.jap").width(200).height(200).css({"background-color":"yellow","margin":"8px"});

$('#show').click(
    function(){
        $('div.jap p').show()
    }
)
$('#hide').click( function(){
    $('div.jap p').hide()
}
)
$('#toggle').click( function(){
    $('div.jap p').toggle()
}
)

$("#name").click(
    function(){
        $("body").append("<div class='name'><h1>Siddh</h1></div>")
        $("div.name").width(400).height(400).css({"border":"1px black solid","display":"flex","justify-content":"center","align-items":"center","position":"absolute","left":"30%","top":"30%"});
    }
)