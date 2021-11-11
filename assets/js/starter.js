// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.


// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/js/dist/util.js";
import "../../node_modules/bootstrap/js/dist/modal.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";





// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

// import "../../node_modules/bootstrap/js/dist/util.js";
// import "../../node_modules/bootstrap/js/dist/modal.js";

console.log('JS test');

$('#custCarousel').carousel();
$('#custCarouse2').carousel();

document.addEventListener('click', (ev) => {
  let btnMenu = ev.target.closest(".btn-menu");

  if (null === btnMenu) {
    return;
  }

  let activateDropdown = document.querySelector('.dropdown');
  activateDropdown.classList.toggle('active');



});
