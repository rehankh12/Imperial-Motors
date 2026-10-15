const signinContainer = document.getElementById("signin-container");
const openSignin = document.getElementById("openSignin");
const closeSignin = document.getElementById("closeSignin");
const signinForm = document.getElementById("signinForm");
const signupMsg = document.getElementById("signup-message");

// Open Sign-in Modal
openSignin.addEventListener("click", function () {
  signinContainer.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close Sign-in Modal
closeSignin.addEventListener("click", function () {
  signinContainer.classList.remove("active");
  document.body.style.overflow = "";
});

// Close when clicking outside the box
signinContainer.addEventListener("click", function (event) {
  if (event.target === signinContainer) {
    signinContainer.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// close when clicking escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    signinContainer.classList.remove("active");
    document.body.style.overflow = "";
  }
});
