$(document).ready(function(){
	$(".cat1-toggle").click(function(){
		$(".cat1").slideToggle("slow");
        $(".cat2").slideUp();
        $(".cat3").slideUp();
        
	});
});

$(document).ready(function(){
    $(".cat2-toggle").click(function(){
        $(".cat2").slideToggle("slow");
        $(".cat1").slideUp();
        $(".cat3").slideUp();
        
    });
});

$(document).ready(function(){
    $(".cat3-toggle").click(function(){
        $(".cat3").slideToggle("slow");
        $(".cat2").slideUp();
        $(".cat1").slideUp();
        
    });
});


// solutions
$(document).ready(function(){
    $(".solution-toggle").click(function(){
        $(".solution").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-2").click(function(){
        $(".solution-2").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-3").click(function(){
        $(".solution-3").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-4").click(function(){
        $(".solution-4").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-5").click(function(){
        $(".solution-5").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-6").click(function(){
        $(".solution-6").slideToggle("slow");
    });
});

// solutions with prompt
$(document).ready(function(){
    $(".solution-toggle-p").click(function(){
        $(".solution-p").slideToggle("slow");
        $(".solution-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-2-p").click(function(){
        $(".solution-2-p").slideToggle("slow");
        $(".solution-2-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-3-p").click(function(){
        $(".solution-3-p").slideToggle("slow");
        $(".solution-3-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-4-p").click(function(){
        $(".solution-4-p").slideToggle("slow");
        $(".solution-4-prompt").slideToggle("slow");
    });
});
$(document).ready(function(){
    $(".solution-toggle-5-p").click(function(){
        $(".solution-5-p").slideToggle("slow");
        $(".solution-5-prompt").slideToggle("slow");
    });
});

$(document).ready(function(){
    $(".solution-toggle-6-p").click(function(){
        $(".solution-6-p").slideToggle("slow");
        $(".solution-6-prompt").slideToggle("slow");
    });
});
