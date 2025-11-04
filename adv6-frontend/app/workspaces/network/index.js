export const loadWorkSpace = async () => {
  const wsElm = document.querySelector("div#csr-workspace");

  // put template in the DOM first.
  const wsContent = await import("./network_diagram.svg");
  wsElm.innerHTML = wsContent.default;
  wsElm.style.maxWidth = "1600px";
};
