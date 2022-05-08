const resetStyles = () => {
  const styles = document.getElementById("kud-top-bar-styles");

  if (styles) {
    styles.remove();
  }

  const stylesLinkEl = document.createElement("link");
  stylesLinkEl.setAttribute("rel", "stylesheet");
  stylesLinkEl.setAttribute("href", "./kud-top-bar/styles.css");
  stylesLinkEl.setAttribute("id", "kud-top-bar-styles");

  document.head.appendChild(stylesLinkEl);
};

export { resetStyles };
