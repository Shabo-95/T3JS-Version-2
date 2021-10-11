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
        if (window.innerWidth <= 1587) {
          accordion_header[i].style.backgroundColor = "#5b5f97";
        }
        // Light Green if <= 1387
        if (window.innerWidth <= 1387) {
          accordion_header[i].style.backgroundColor = "#00ff00";
        }
        // Light Green if <= 1187
        if (window.innerWidth <= 1187) {
          accordion_header[i].style.backgroundColor = "#ffb97f";
        }
        // Light Green if <= 987
        if (window.innerWidth <= 987) {
          accordion_header[i].style.backgroundColor = "#7ff7ff";
        }
      }
    },
  };
});
