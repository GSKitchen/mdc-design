import { MDCRipple } from "@material/ripple";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
const topAppBar = new MDCTopAppBar(document.querySelector(".mdc-top-app-bar"));
const drawer = MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", () => {
  drawer.open = true;
});