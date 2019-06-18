$(".owl-carousel2").owlCarousel({
	loop:true,
	center: true,
	items: 1,
	margin: 0,
	navigation:true,
	dots: true
});

var owl2 = $('.owl-carousel5');
$(owl2).owlCarousel({
	loop:true,
	center: true,
	items: 1,
	margin: 0,
	navigation:true,
	dots: true
});
var owl = $('.owl-carousel');
$(document).ready(function () {
	
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
				autoplay:false,
        margin: 0,
        nav: true,
        dots: false,
        navText: [$('#slider-nav-prev'), $('#slider-nav-next')],
        navContainer: "#owlCustomControls",
		});

});


// Custom Navigation Events
$('.slider-nav-next').click(function () {
    owl.trigger('next.owl.carousel');
});
$('.slider-nav-prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

owl.on('changed.owl.carousel', function (e) {
    if (e.item) {
        var index = e.item.index - (e.item.count - 1);
        var count = e.item.count;
        if (index > count) {
            index -= count;
        }
        if (index <= 0) {
            index += count;
        }
        // return index;
        $("#slider-nav-number").text(index);
    }

});





// Open the Modal
function openModal(element) {
		document.getElementById(element).style.width = "100%";
		document.getElementById(element).style.display = "block";
		$('body, html').css('overflow', 'hidden');
	
}


function get_back_scroll() {
	$('body, html').css('overflow', 'auto');
}
function hide_scroll() {
	$('body, html').css('overflow', 'hidden');
}

// Close the Modal
function closeModal(element) {
		document.getElementById(element).style.width = "0";
    document.getElementById(element).style.display = "none";
		get_back_scroll();
    
    // return false;
}


function open_popup_order_modal_saccess(element) {
	document.getElementById(element).style.display = "block";
}

$(document).mouseup(function (e) {
	var container = $(".situations__item__modal__bg");
	if (container.has(e.target).length === 0){
			container.hide();
	}
	get_back_scroll();
});
/*  delete overflow on modal   */



$('.close-cross').click(function() {

	$('body').css('overflow', 'auto');
});

/*  delete overflow on modal   */



$('#menu-main-top-link').click(function() {
	$('body').css('overflow', 'auto');

});





//generate input event
function generateEvent(id, event_name) {
    element = document.getElementById(id);
    var event = new Event(event_name, {
        'bubbles': true,
        'cancelable': true
    });
    element.dispatchEvent(event);
}


// Tabs

function openTab(evt, tab_element) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        // tablinks[i].className = tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab_element).style.display = "block";
    // evt.currentTarget.classList.add("active");
    evt.currentTarget.className += " active";
    evt.preventDefault();
    return false;
}


// page Order
// make preview active
function makeActive(elem) {
    var a = document.getElementsByTagName('a')
    for (i = 0; i < a.length; i++) {
        a[i].parentNode.classList.remove("active");
    }
    elem.parentNode.classList.add("active");
    var new_src = elem.href, large = document.getElementById('large');
    large.src = new_src;
    return false;
}


// device count decrease
$("#order_minus").on('click', function (e) {
    e.preventDefault();
    let count = parseInt(document.getElementById("input_count").value);
    if (count != 1) {
        count--;
        document.getElementById("input_count").value = count;
        generateEvent("input_count", "input");
    }
});

// device count increase
$("#order_plus").on('click', function (e) {
    e.preventDefault();
    let count = parseInt(document.getElementById("input_count").value);
    count++;
    document.getElementById("input_count").value = count;
    // var event = new Event('input', {
    //   'bubbles': true,
    //   'cancelable': true
    // });
    // document.getElementById("input_count").dispatchEvent(event);
    generateEvent("input_count", "input");
});


//
function calculateTotalPrice() {
    try {
        var price = parseInt(document.getElementById("price_for_one").innerText);
        var count = parseInt(document.getElementById("input_count").value); // get the current value of the input field.
        document.getElementById("order-total").innerHTML = price * count;
    } catch (e) {
        console.log(e);
    }
}


// update total price if quantity updated
$('#input_count').on('input', function () {
    calculateTotalPrice();
});


// accordion
$(document).ready(function () {
    $(".accordion > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).closest("li").removeClass("active");
            $(this)
                .siblings(".accordion-content")
                .slideUp(200);
        } else {
            $(".accordion > a").removeClass("active");
            $(".accordion-container li").removeClass("active");
            $(this).addClass("active");
            $(".accordion-content").slideUp(200);
            $(this)
                .siblings(".accordion-content")
                .slideDown(200);
            $(this).closest("li").addClass("active");
        }
        return false; // off default link behavior
    });
});



//
// Initial block
//

// calculate total price
calculateTotalPrice();





/*  Hover of Situation section   */

	$(".situations__item__name1 a").hover(function(){

		$(".situations__item__img-wrap1").toggleClass("img-wrap-toggle");

	});

	$(".situations__item__name2 a").hover(function(){

		$(".situations__item__img-wrap2").toggleClass("img-wrap-toggle");

	});

	$(".situations__item__name3 a").hover(function(){

		$(".situations__item__img-wrap3").toggleClass("img-wrap-toggle");

	});

	$(".situations__item__name4 a").hover(function(){

		$(".situations__item__img-wrap4").toggleClass("img-wrap-toggle");

	});



/*  Hover of Situation section   */


$('a[href*="#"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top - 300 }, 500);
});



$('.page-content__social_item1').mouseover(function() {
  $('.page-content__socialIcon1').css("opacity", "1");
});
$('.page-content__social_item1').mouseleave(function() {
    $('.page-content__socialIcon1').css("opacity", "0.5");
});
$('.page-content__social_item2').mouseover(function() {
    $('.page-content__socialIcon2').css("opacity", "1");
});
$('.page-content__social_item2').mouseleave(function() {
$('.page-content__socialIcon2').css("opacity", "0.5");
});
$('.page-content__social_item3').mouseover(function() {
$('.page-content__socialIcon3').css("opacity", "1");
});
$('.page-content__social_item3').mouseleave(function() {
    $('.page-content__socialIcon3').css("opacity", "0.5");
});


$('.nav-top-item-download').mouseover(function() {
    $('.nav-top-item-download span').css("background", "#00aeef").css("border","transparent");
});
$('.nav-top-item-download').mouseleave(function() {
    $('.nav-top-item-download span').css("background", "transparent").css("border","1px solid #fff");
});

$('.nav-top-item-border').mouseover(function() {
    $('.nav-top-item-border span').css("border-bottom", "1px dotted #00aeef");
});
$('.nav-top-item-border').mouseleave(function() {
    $('.nav-top-item-border span').css("border-bottom", "1px dotted #fff");
});
