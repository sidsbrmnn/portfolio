(function() {
  scrollTo();
})();

function scrollTo() {
  const links = [].slice.call(document.getElementsByTagName("a"));

  links.forEach(link => {
    if (
      link.href &&
      link.href.indexOf("#") !== -1 &&
      (link.pathname === location.pathname ||
        "/" + link.pathname === location.pathname) &&
      link.search === location.search
    ) {
      link.onclick = scrollAnchors;
    }
  });
}

function scrollAnchors(e, respond = null) {
  e.preventDefault();

  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  const targetID = respond
    ? respond.getAttribute("href")
    : this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: "smooth"
  });
}
