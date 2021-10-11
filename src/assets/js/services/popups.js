// Box.Application.addService("dom", function (application) {
//   return {
//     onresize: function (event, element, elementType) {
//       console.log("Window Resize !!!!");
//     },
//   };
// });

// var dom = Box.Application.getService("dom");

/* Test */

Box.Application.addService("popups", function (application) {
  return {
    onResize: function () {
      // This Section Will Output The Window With & Height

      // console.log(
      //   "Window Width =",
      //   window.innerWidth,
      //   "Window Height =",
      //   window.innerHeight
      // );

      // This Section Of Code Will Change The Color Of The Accordions
      accordion_header = document.getElementsByClassName("accordion__title");
      for (var i = 0; i < accordion_header.length; i++) {
        // The Color Of The Accordions is Purple by Default
        if (window.innerWidth <= 1487) {
          accordion_header[i].style.backgroundColor = "#5b5f97";
        }
        // Light Green if <= 1200
        if (window.innerWidth <= 1200) {
          accordion_header[i].style.backgroundColor = "#00ff00";
        }
        // Light Green if <= 768
        if (window.innerWidth <= 1068) {
          accordion_header[i].style.backgroundColor = "#ffb97f";
        }
        // Light Green if <= 576
        if (window.innerWidth <= 876) {
          accordion_header[i].style.backgroundColor = "#7ff7ff";
        }
      }
      // accordion__header.style.display = "none";
    },
  };
});

/* Working Example T3JS Services */

// Box.Application.addService("popups", function (application) {
//   return {
//     alert: function (message) {
//       console.log(message);
//     },
//     // confirm: function (message, callback) {
//     //   console.log("Hello Hello");
//     // },
//   };
// });

// var popupsService = Box.Application.getService("popups");

// popupsService.alert("Hello World!");
