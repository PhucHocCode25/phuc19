const FormOpenButton = document.querySelector("#user-icon"),
      FormCloseButton = document.querySelector(".close-form"),
      app = document.querySelector(".app"),
      SignUpButton = document.querySelector("#signup"),
      LoginButton = document.querySelector("#login"),
      FormContainer = document.querySelector(".form-container"),
      PasswordShowHide = document.querySelectorAll(".pw-hide");

      PasswordShowHide.forEach((icon) => {
      icon.addEventListener("click", () => {
      let getPwInput = icon.parentElement.querySelector("input");
      if(getPwInput.type === "password") {
        getPwInput.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      }else{
        getPwInput.type = "password";
        icon.classList.replace("fa-eye","fa-eye-slash");
          }
        });
      });



  FormOpenButton.addEventListener("click", () => app.classList.add("show"));
  FormCloseButton.addEventListener("click", () => app.classList.remove("show"));

  SignUpButton.addEventListener("click", (e)=> {
    e.preventDefault();
    FormContainer.classList.add("active");
  });
  LoginButton.addEventListener("click", (e)=> {
    e.preventDefault();
    FormContainer.classList.remove("active");
  });