// document.addEventListener("DOMContentLoaded", function () {
//     const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
//     // Show the button when user scrolls down a certain amount
//     window.onscroll = function () {
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollToTopBtn.style.display = "block";
//       } else {
//         scrollToTopBtn.style.display = "none";
//       }
//     };
  
//     // Scroll to the top when the button is clicked
//     scrollToTopBtn.addEventListener("click", function () {
//       document.body.scrollTop = 0; // For Safari
//       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
//     });
//   });
  

  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Use smooth scrolling animation
  });
});


