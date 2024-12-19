// Toggle class active
const Navbarnav = document.querySelector(".Navbar-nav");
//Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclik = () => {
  Navbarnav.classlist.toggle("active");
};
