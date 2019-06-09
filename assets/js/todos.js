
$(document).ready(function(){
//Click Function to check off an event
	$("ul").on("click", "li", function(){
		if($(this).css("color") === "rgb(128, 128, 128)"){
			$(this).css("textDecoration", "none"); 
			$(this).css("color", "#665");
			
		}
		else {
			$(this).css({
				color: "gray",
				textDecoration: "line-through"
			});
		}
	});
//click X to delete	
	$("ul").on("click", "span", function(e ){
		$(this).parent().fadeOut(500, function(){$(this).remove()});
		e.stopPropagation();
	});
//Add To Do
	$("input[type = 'text']").keypress(function(e){
		if(e.which === 13){
			var newItem = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + newItem+"</li>")
		};
	});
	
	$(".fa-plus").click(function(){(
		"input[type='text'").fadeToggle;
	});
	
});
