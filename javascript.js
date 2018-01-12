
var myBoolean = 0;


$(document).ready(function() {

	 $(this).scrollTop(0);
	// Hide downloading section 
        
  var navigationBottom = document.getElementById("navbar").getBoundingClientRect().bottom + window.pageYOffset;


	 window.onscroll = function() {

      if (window.pageYOffset <= navigationBottom) {
      
     		$('.navbar-inverse').css('background', 'transparent');

     		$('.navbar-inverse').css('opacity', '1')

		
			
		mine2();
		

      } else if (window.pageYOffset > navigationBottom) {
        
        $('.navbar-inverse').css('background', '#2c3037');
     		
     		$('.navbar-inverse').css('opacity', '0.9')

     	// alert(myBoolean)
			if (myBoolean == 0) {
				
				setTimeout(mine, 500);	
			}
      
      }
    };


   window.resize = function() {

   		centerTitle();

   };


  $('#landing_title h1').css({'width':'100%', 'text-align':'center'});
  	
  	centerTitle();

		setTimeout(function(){

			$('.sk-circle').fadeOut();
			$('#plate').fadeOut();

		},2000);


// Show nav bar with all links 

		setTimeout(function(){

			$('.navbar-inverse').css('background', 'transparent')
			// $('.navbar-inverse').css('opacity', '0.9')
			$('.first_last').fadeIn();
			$('.nav.navbar-nav.top').fadeIn();

		},2500);

		setTimeout(function(){
			Typed.new('.element', {
        strings: ["Junior Web Developer"],
        typeSpeed: 0
      });
		},3500);


	setInterval(braces, 2000);
		


	$('#carousel-example').on('slide.bs.carousel', function () {
		
			var currentIndex = $('div.active').index() + 1;			
			
			if(currentIndex == 1) {

				$('#my_second').slideUp('slow', function(){
					
					$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">Merging Styles</h1><br>
											<p>Group Project. Choose or create a fictitious business to build a full-featured website for in Sinatra. <br>
											Site requirements:<br>
											At least 4 separate pages<br>
											Use photographs<br>
											JavaScript for interaction<br>
											Should have the option to contact the business using the SendGrid (or Mandrill) API to send an e-mail to the business owner.</p><br>
												<ul class="technologies">
													<li class="techused"><span>HTML</span></li>
													<li class="techused"><span>CSS</span</li>
													<li class="techused"><span>JavaScript</span</li>
													<li class="techused"><span>Sinatra</span</li>
													<li class="techused"><span>Cookies</span</li>
													<li class="techused"><span>SendGrid API Integration</span</li>
												</ul>
												<div class="site_link"><a href="http://mergingstyles.herokuapp.com/" target=" ">mergingstyles</a></div>
								</div>`);

				});

				$('#my_second').slideDown( 'slow', function(){
					
						techHighlight();
				});

			} else if (currentIndex == 2) {
				
				$('#my_second').slideUp('slow', function(){
				
					$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">WoF</h1><br>
											<p>A single page app allowing the user to play a simple game of Wheel of Fortune.</p>
												<ul class="technologies">
													<li class="techused"><span>HTML</span></li>
													<li class="techused"><span>CSS</span></li>
													<li class="techused"><span>JavaScript</span></li>
												</ul>
												<div class="site_link"><a href="http://capstone2728.herokuapp.com" target=" ">wof</a></div>
								</div>`);
				});
				
				$('#my_second').slideDown('slow', function(){
					
					techHighlight();
				});

			} else if (currentIndex == 3) {	
				
				$('#my_second').slideUp('slow', function(){
						
						$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">MYBIB</h1><br>
											<p>Shipped Group project. A hypothetical website for trading companies to keep their boats and jobs organized. Developed database associations between User, Boats, Jobs, and Follows. Followed MVC pattern and created CRUD methods in Nested RESTful routes. Utilized Full Stack development.</p><br>
												<ul class="technologies">
													<li class="techused"><span>RubyOnRails</span></li>
													<li class="techused"><span>GMaps API Integration</span></li>
													<li class="techused"><span>JavaScript</span></li>
													<li class="techused"><span>Bootstrap</span></li>
													<li class="techused"><span>SQL</span></li>
												</ul>
												<div class="site_link"><a href="http://shipped2016.herokuapp.com/" target=" ">MYBIB</a></div>
								</div>`);
				});

				$('#my_second').slideDown('slow', function(){
					
					techHighlight();
				});


			} else if (currentIndex == 4) {	
					
					$('#my_second').slideUp('slow', function(){
					
						$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">DJEnuff</h1><br>
											<p>Personal Website for DJ Enuff. Created with admin panel and database.</p><br>
												<ul class="technologies">
													<li class="techused"><span>RubyOnRails</span></li>
													<li class="techused"><span>JavaScript</span></li>
													<li class="techused"><span>AJAX</span></li>
													<li class="techused"><span>SQL</span></li>
												</ul>
												<div class="site_link"><a href="http://mantislion.herokuapp.com/" target=" ">DJEnuff</a></div>
								</div>`);

				});

				$('#my_second').slideDown('slow', function(){
					
					techHighlight();
				});

				} else if (currentIndex == 5) {	
					
					$('#my_second').slideUp('slow', function(){
					
						$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">2LS Consulting</h1><br>
											<p>A full-featured website for a consulting engineering firm based in New York City specializing in MEP Engineering.</p><br>
												<ul class="technologies">
													<li class="techused"><span>HTML</span></li>
													<li class="techused"><span>CSS</span></li>
													<li class="techused"><span>JavaScript</span></li>
													<li class="techused"><span>AJAX</span></li>
													<li class="techused"><span>GMAPS API INTEGRATION</span></li>
												</ul>
												<div class="site_link"><a href="http://2lsconsulting.com/" target=" ">2LS</a></div>
								</div>`);

				});

				$('#my_second').slideDown('slow', function(){
					
					techHighlight();
				});

				} else if (currentIndex == 6) {	
					
					$('#my_second').slideUp('slow', function(){
					
						$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">Nuzine</h1><br>
											<p>A full-featured website for the company focused on designing, building and closing out commercial design projects in the Tri-State area.</p><br>
												<ul class="technologies">
													<li class="techused"><span>HTML</span></li>
													<li class="techused"><span>CSS</span></li>
													<li class="techused"><span>JavaScript</span></li>
													<li class="techused"><span>AJAX</span></li>
												</ul>
												<div class="site_link"><a href="http://nuzineny.com/" target=" ">Nuzine</a></div>
								</div>`);

				});

				$('#my_second').slideDown('slow', function(){
					
					techHighlight();
				});

			} else {
				
				$('#my_second').slideUp('slow', function(){
					
						$('#my_second').html(`
								<div class="blok_right">
									<h1 id="getfrom">2ndChance</h1><br>
											<p>The platform which allows users to find other people through the visited places and to contact to them.</p>
											<p>1. Choose a time and place where you saw the person with whom you want to meet again. Save it!
											<p>2. Look at how many people have visited this place on the day and time that you were there. Choose someone with whom you would like to meet again.</p>
											<p>3. Send a message and wait for a response. We hope you will be able to get a Second Chance.</p>
												<ul class="technologies">
													<li class="techused"><span>Ruby</span></li>
													<li class="techused"><span>RubyOnRails</span></li>
													<li class="techused"><span>GMaps API Integration</span></li>
													<li class="techused"><span>Foursquare API Integration</span></li>
													<li class="techused"><span>Ajax</span></li>
													<li class="techused"><span>JavaScript</span></li>
													<li class="techused"><span>Bootstrap</span></li>
													<li class="techused"><span>SQL</span></li>
												</ul>
												<div class="site_link"><a href="http://secondchance2016.herokuapp.com/" target=" ">2ndChance</a></div>
								</div>`);					

				});

				$('#my_second').slideDown('slow', function(){
					techHighlight();
				});

			}


	});



		$(".home_link").click(function() {
		
    		$('html, body').animate({ scrollTop:  $('#home').offset().top - 120 }, 'slow');

		});

	
	$(".about_link").click(function() {
    
    		$('html, body').animate({ scrollTop:  $('#about').offset().top }, 'slow');
						

	});

	$(".projects_link").click(function() {
		
		    $('html, body').animate({ scrollTop:  $('#projects').offset().top }, 'slow');
			setTimeout(function() {
				techHighlight();
			}, 1000)
		    
	});

	$(".contact_link").click(function() {
		
  		  $('html, body').animate({ scrollTop:  $('#contact').offset().top }, 'slow');

	});

		
});

		function techHighlight() {
			
			$("#getfrom").css('text-shadow', '0px 4px 3px rgba(0,0,0,0.4),' +  '0px 8px 13px rgba(0,0,0,0.1),' + '0px 18px 23px rgba(0,0,0,0.1)');

			$('.techused').each(function(i){
		    	var t = $(this).children();
		    	var t1 = $(this);
		    	setTimeout(function(){ t.addClass('techanimation');
		    		t1.addClass('techanimation1');
		     		}, (i+1) * 150);
				});
			}
	

		var braces = function(){ $(".title_icon").animate({
				
				opacity: 1

				},1000, function(){ $(".title_icon").animate({
				
				opacity: 0

				},500);
		});
		}


		
		function centerTitle() {
			var h1 = $('#landing_title h1').height();
	  		var h = h1/2;
	  		var w1 = $(window).height();
	  		var w = w1/2;
	  		var m = w - h;
	  		$('#landing_title h1').css('margin-top', m + "px");
		}


		var mine = function() {
		$('.skills').each(function(i){
		    var t = $(this).children();
		    var t1 = $(this);
		    setTimeout(function(){ t.addClass('animation');
		    	t1.addClass('animation1');
		     }, (i+1) * 150);
		});
				myBoolean = 1;
		}

		var mine2 = function() {
			$('.skills').each(function(i){
		    var t = $(this).children();
		    var t1 = $(this);
		    t.removeClass('animation');
		    t1.removeClass('animation1');
		    
		});
			myBoolean = 0;
		}

		