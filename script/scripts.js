
function makeSticky() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById('main-header').style = "height: 50px; width: 100%; position: fixed; top: 0; left: 0; z-index: 2; padding-bottom: 0 !important;";
    document.getElementById('header-links').style = "padding-bottom: 0 !important; align-items: center !important;"
    document.getElementById('Layer_1').style = "height: 20px !important;";
    document.getElementById('header-menu').style = "display: block !important;";
    for (let hiddable of (document.getElementsByClassName('non-sticky'))) {
      hiddable.style = "display: none !important;";
    }
  } else {
    document.getElementById('main-header').style = "";
    document.getElementById('header-links').style = "";
    document.getElementById('Layer_1').style = "";
    document.getElementById('header-menu').style = "";
    for (let hiddable of document.getElementsByClassName('non-sticky')) {
      hiddable.style = "";
    }
  }
}

window.addEventListener("scroll", makeSticky);
console.log(document.getElementById('featured-stories-container').offsetWidth);
