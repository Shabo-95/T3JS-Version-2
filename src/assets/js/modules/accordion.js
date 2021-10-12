Box.Application.addModule("accordion", function (context) {
  // This Service Will be Activated When We Resize The Window
  const ChangeAccColorService = Box.Application.getService(
    "ChangeAccColorService"
  );

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

  const _init = () => {
    window.addEventListener(
      "resize",
      function () {
        ChangeAccColorService.onResize();
      },
      true
    );
  };

  const _changeVisibility = (element) => {
    element.style.display = "none";
  };

  return {
    init: function () {
      _init();
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
          // console.log("data.result =", data.result);
          // console.log("moduleElement =", moduleElement);
          if (data.result !== moduleElement) {
            // Hier We Will Select The Other Accordion
            const accordionContent = moduleElement.querySelectorAll(
              ".accordion__content"
            );
            // 1) First Methode: With Foreach
            accordionContent.forEach(
              (element) => (element.style.display = "none")
            );

            // 2) Second Methode: With Normal For
            // for (i = 0; i < accordionContent.length; i++) {
            //   accordionContent[i].style.display = "none";
            // }
          }
          break;
      }
    },
  };
});
