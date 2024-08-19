window.addEventListener(
  "mousemove",
  (event) => {
    let menu = document.getElementById("hover-menu");

    if (menu.style.display == "block") {
      let menu_top_pos = menu.getBoundingClientRect().top - window.scrollY;
      let menu_left_pos = menu.getBoundingClientRect().left - window.scrollX;

      let menu_width = menu.getBoundingClientRect().width;
      let menu_height = menu.getBoundingClientRect().height;

      // add a little bit of padding on the edges so that moving off of the dropdown doesn't immediately remove it
      let edge_padding = 10;

      // add some padding to the top edge because the user hovers over the Shop link to make the dropdown appear below
      let top_spacer = 80;

      if (
        event.pageX > menu_left_pos - edge_padding &&
        event.pageY > menu_top_pos - top_spacer - edge_padding &&
        event.pageX < menu_left_pos + menu_width + edge_padding &&
        event.pageY < menu_top_pos + menu_height + edge_padding
      ) {
        // do nothing, the mouse is currently hovering over the dropdown
      } else {
        menu.style.display = "none";
      }
    }
  },
  false
);

let shop_menu_div = document.querySelectorAll("a.shop-dropdown")[0];
shop_menu_div.addEventListener(
  "mouseover",
  (event) => {
    let menu = document.getElementById("hover-menu");
    menu.style.display = "block";
  },
  false
);
