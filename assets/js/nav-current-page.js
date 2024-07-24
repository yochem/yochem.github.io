const navItems = document.querySelector('nav').children;
const currentUrl = window.location.href;

for (const navItem of navItems) {
  const href = navItem.href;
  // if (href.endsWith(currentUrl)) {
  if (href == currentUrl) {
    navItem.classList.add("current");
  }
}
