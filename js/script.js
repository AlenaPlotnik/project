document.addEventListener("DOMContentLoaded", function(){
    let welcomeButtonModal = document.querySelector(".btn-signup");
    let modalApplication = document.querySelector(".applications");
    let closeModalButton = document.querySelector(".application_close");

    welcomeButtonModal.onclick = function(){
        modalApplication.style.display = "flex";
    };

    closeModalButton.onclick = function(){
        modalApplication.style.display = "none";
    };
});


