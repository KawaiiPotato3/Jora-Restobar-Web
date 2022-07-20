window.onload= function() {
  let wrapper = document.getElementById('wrapper');
  let preload = document.getElementById('preload');

  if (preload) {
    preload.style.display = "none";
  }

  wrapper.style.opacity = "1";
}

$(document).ready(function() {
  /// SHOW/HIDE MENU ///
  $('.hamburger-button, .hamburger-close, .menu-overlay').click(function() {
    $('.hamburger').toggleClass('show-menu');
    $('.hamburger-button').toggleClass('show-close');
  });
});

$(window).on("scroll", function() {
  toggleHeader();
});

toggleHeader();
toggleButtons();


$(window).scroll(function() {
  toggleButtons();
});

$('.back-to-top').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/*
  Cta buttons
 */

$(document).on('click', '.btn-cta', function(e) {
  if ($(this).hasClass('active')) {
    $('.btn-cta').removeClass('active');
  } else {
    $('.btn-cta').removeClass('active');
    $(this).toggleClass('active');
  }
});

/*
  Libro de reclamaciones
 */

$('#is_child').change(function (e) {

  $('#parent').toggleClass('show');

  if ($(this).is(':checked')) {
    $('.parent_input').removeAttr('disabled', false);
  } else {
    $('.parent_input').attr('disabled', true);
  }
})

/*
  La carta
 */

//Popup
$(document).on('click', '.menu-handle', function(e) {
  $('.hamburger').removeClass('show-menu');
  $('.hamburger-button').removeClass('show-close');
});

//Embed
$(document).on('click', '.btn-expand', function(e) {
  e.preventDefault();
  $('.food-plates-items').toggleClass('expand');
  $('.food-controls').toggleClass('deep');
  $('.the-menu-container').toggleClass('pb-0');
  AOS.refresh();

  if ($('.food-plates-items').hasClass('expand')) {
    $(this).html(textSeeLess);
  } else {
    $(this).html(textViewAll);
    $('html,body').animate({scrollTop: $('#lacarta').offset().top},'slow');
  }
});

/**
 * Functions
 */

function toggleHeader() {
  if ($(window).scrollTop() > 300) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
}

function toggleButtons() {
  if ($(window).scrollTop() > 300) {
    $('.back-to-top').addClass('show');
    $('.wrap-whatsapp').addClass('show');
    $('.wrap-buttons').addClass('show');
  } else {
    $('.back-to-top').removeClass('show');
    $('.wrap-whatsapp').removeClass('show');
    $('.wrap-buttons').removeClass('show');
  }
}

function scrollToAnchor(elementId, toggleHeader){
  const element = $('#' + elementId);

  if (typeof toggleHeader !== 'undefined' && toggleHeader === true) {
    toggleMenu();
  }

  if (!element.length) {
    window.location = '/#' + elementId;
  } else {
    $('html,body').animate({scrollTop: element.offset().top},'slow');
  }
}

function toggleMenu() {
  $('.hamburger').toggleClass('show-menu');
  $('.hamburger-button').toggleClass('show-close');
}

function closePopup() {
  var box = document.getElementById('customPopup');
  box.style.display = 'none';
}
