// Remove margin top from first paragraph in about page
// $(".intro p:first-child").addClass("mt0");

 // Responsive navigation
var nav = responsiveNav(".nav-collapse", {
  customToggle: "nav-toggle",
  closeOnNavClick: true,
  openPos: "static"
});

// Responsive slides 
$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  // timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

// FAQ accordion
$('.js-faq-trigger').click(function(e) {
  // Grab current anchor value
  var currentAttrValue = $(this).attr('href');
  // Open up the hidden content panel
  $(currentAttrValue).slideToggle('fast');
  e.preventDefault();
});

// Snipcart

// Show button to continue shopping
// Snipcart.api.configure('show_continue_shopping', true);

// Display shipping options based on customer address

// var euCountries = [ "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
//   "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB" ]

// function setSnipcartShippingMethods(address) {
//   if (address.country == "DE") {
//     Snipcart.api.configure('allowed_shipping_methods', ['germany-shipping']);
//   }
//   else if ($.inArray(address.country, euCountries) > -1) {
//     Snipcart.api.configure('allowed_shipping_methods', ['eu-shipping']);
//   }
//   else {
//     Snipcart.api.configure('allowed_shipping_methods', ['worldwide-shipping']);
//   }
// }

// Snipcart.subscribe('billingaddress.changed', function (address) {
//   if (address.shippingSameAsBilling) {
//     setSnipcartShippingMethods(address);
//   }
// });

// Snipcart.subscribe('shippingaddress.changed', function (address) {
//   setSnipcartShippingMethods(address);
// });

// Snipcart.subscribe('cart.ready', function (cart) {
//   if (cart.order) {
//     setSnipcartShippingMethods(cart.order.shippingAddress);
//   }
// });
