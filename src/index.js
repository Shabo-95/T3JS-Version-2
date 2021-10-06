import "./styles/main.scss";

Box.Application.addModule("accordion", function (context) {
  return {
    // This Section is for onClick (Messaging)
    onclick: function (event, element, elementType) {
      switch (elementType) {
        case "js-title":
          // Triggers output of "Navigating somewhere!"
          Box.Application.broadcast("closeSecondAccordion");

          // block => accordion auf (offen)
          // none => accordion zu (geschlossen)

          var panel = element.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }

          break;

        case "js-title2":
          Box.Application.broadcast("closeFirstAccordion");

          var panel = element.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }

          break;
      }
    },
    // This Section is for Broadcasting (Messaging)
    messages: ["closeSecondAccordion", "closeFirstAccordion"],
    onmessage: function (name, data) {
      switch (name) {
        case "closeSecondAccordion":
          console.log("Close Second Accordion");

          accordion2Items = document.getElementsByClassName("js-title2");
          var i;

          for (i = 0; i < accordion2Items.length; i++) {
            accordion2Items[i].nextElementSibling.style.display = "none";
          }

          if (panel.style.display === "block") {
            panel.style.display = "none";
          }

          break;

        case "closeFirstAccordion":
          console.log("Close First Accordion");

          accordion1Items = document.getElementsByClassName("js-title");
          var i;

          for (i = 0; i < accordion1Items.length; i++) {
            accordion1Items[i].nextElementSibling.style.display = "none";
          }

          if (panel.style.display === "block") {
            panel.style.display = "none";
          }

          break;
      }
    },
  };
});

var moduleEl = document.getElementById("accordion-id");
var moduleEl2 = document.getElementById("accordion-id2");

Box.Application.start(moduleEl);
Box.Application.start(moduleEl2);
