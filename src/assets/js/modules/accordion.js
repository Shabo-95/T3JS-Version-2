Box.Application.addModule("accordion", function (context) {
  const moduleElement = context.getElement();

  // This Function Will Open The Selected Accordion
  const _toggleAccordion = (element) => {
    let panel = element.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };
  // This Function Will Close All Other Accordions From The Other Accordion
  const _closeAllOthers = (selectedAccordion) => {
    Box.Application.broadcast("closeOtherAccordion", {
      result: selectedAccordion,
    });
  };
  return {
    init: function () {
      window.addEventListener(
        "resize",
        function () {
          // This Service Will be Activated When We Resize The Window
          const onResizeChangeAccColorService = Box.Application.getService(
            "onResizeChangeAccColor"
          );
          onResizeChangeAccColorService.onResize();
        },
        true
      );
    },

    // This Section is for onClick (Messaging)
    onclick: function (event, element, elementType) {
      switch (elementType) {
        case "js-title":
          // Hier We Will Select The Parent Accordion
          selectedAccordion = moduleElement;

          _toggleAccordion(element);
          _closeAllOthers(selectedAccordion);

          break;
      }
    },
    // This Section is for Broadcasting (Messaging)
    messages: ["closeOtherAccordion"],
    onmessage: function (name, data) {
      switch (name) {
        case "closeOtherAccordion":
          console.log("data.result =", data.result);
          console.log("moduleElement =", moduleElement);

          if (data.result !== moduleElement) {
            for (i = 0; i < data.result.children.length; i++) {
              data.result.nextElementSibling.children[
                i
              ].children[1].style.display = "none";
            }
          } else {
            for (i = 0; i < data.result.children.length; i++) {
              data.result.previousElementSibling.children[
                i
              ].children[1].style.display = "none";
            }
          }
          break;
      }
    },
  };
});

Box.Application.startAll(document);
