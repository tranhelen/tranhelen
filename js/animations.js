      $(function() {
		var i = 0;
		$("#toggleBio").click(function(e){
			e.preventDefault();
		    $('.bio--hide').toggle(500);

		    if (i === 0) {
		    	i = 1;
		    	$(this).html('Less ↖');
		    } else {
		    	i = 0;
		    	$(this).html('More ↘');
		    };
		});

        $('.load').animate({opacity: "1"},1500);
        $('.load-right').each(function(i) {
          $(this).delay((i++) * 500).animate({left:0, opacity:"1"});
        });
      });