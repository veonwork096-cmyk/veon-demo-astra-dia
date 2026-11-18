// FutureLink on touch: a tap shows the note for a moment (hover does not exist there; focus already shows it).
const links = document.querySelectorAll<HTMLElement>(".future-link");
links.forEach((el) => {
  let timer = 0;
  const show = () => {
    links.forEach((other) => other !== el && other.classList.remove("is-open"));
    el.classList.add("is-open");
    window.clearTimeout(timer);
    timer = window.setTimeout(() => el.classList.remove("is-open"), 2600);
  };
  el.addEventListener("click", show);
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(); }
  });
});
