let linked_tag = "___linked"
document.body.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(el) {
  if (el.classList.contains(linked_tag)) {
    return;
  }
  el.classList.add(linked_tag);

  if (el.id.length == 0) {
    // 🪢
    // 🤿
    el.classList.add("___dead_island");
    el.appendChild(document.createTextNode("🤿"));
    return;
  }
  for (const c of el.children) {
    if (c.nodeName === 'A' && c.getAttribute('href').startsWith('#')) {
      return;
    }
  }

  el.classList.add("___island");

  var anchor = document.createElement("a");
  anchor.setAttribute('href', `#${el.id}`);
  anchor.setAttribute('class', '___anchor');
  // 🔗
  // ⚓
  anchor.appendChild(document.createTextNode("🔗"));
  el.appendChild(anchor);
});
