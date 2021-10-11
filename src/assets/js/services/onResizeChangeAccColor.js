Box.Application.addService("onResizeChangeAccColor", function (application) {
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
        if (window.innerWidth <= 1750) {
          accordion_header[i].style.backgroundColor = "#5b5f97";
        }
        // Light Green if <= 1550
        if (window.innerWidth <= 1550) {
          accordion_header[i].style.backgroundColor = "#00ff00";
        }
        // Light Green if <= 1350
        if (window.innerWidth <= 1350) {
          accordion_header[i].style.backgroundColor = "#ffb97f";
        }
        // Light Green if <= 1150
        if (window.innerWidth <= 1150) {
          accordion_header[i].style.backgroundColor = "#7ff7ff";
        }
      }
    },
  };
});
