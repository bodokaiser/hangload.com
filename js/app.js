 // Responsive navigation settings
  var nav = responsiveNav(".nav-collapse", {
    customToggle: "nav-toggle",
    closeOnNavClick: true,
    openPos: "static"
  });

  // Show button to continue shopping
  Snipcart.api.configure('show_continue_shopping', true);


  // Display shipping options based on customer address

  var euCountries = [ "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE",
    "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB" ]

  function setSnipcartShippingMethods(address) {
    if (address.country == "DE") {
      Snipcart.api.configure('allowed_shipping_methods', ['germany']);
    }
    else if ($.inArray(address.country, euCountries) > -1) {
      Snipcart.api.configure('allowed_shipping_methods', ['eu']);
    }
    else {
      Snipcart.api.configure('allowed_shipping_methods', ['worldwide']);
    }
  }

  Snipcart.subscribe('billingaddress.changed', function (address) {
    if (address.shippingSameAsBilling) {
      setSnipcartShippingMethods(address);
    }
  });

  Snipcart.subscribe('shippingaddress.changed', function (address) {
    setSnipcartShippingMethods(address);
  });

  Snipcart.subscribe('cart.ready', function (cart) {
    if (cart.order) {
      setSnipcartShippingMethods(cart.order.shippingAddress);
    }
  });


