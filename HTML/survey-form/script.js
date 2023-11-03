const formElement = document.getElementById("survey-form");
const popupELement = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopup")

formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const email = document.getElementById("email").value

    const mobileNumber = document.getElementById("mblNo").value

    const dateOfBirth = document.getElementById("dob").value

    const country = document.getElementById("country").value

    const profession = document.getElementById("profession").value

    const gender = document.querySelector('input[name="gender"]:checked').value;


    document.getElementById("firstNameSpan").textContent = firstName;

    document.getElementById("lastNameSpan").textContent = lastName;

    document.getElementById("emailSpan").textContent = email;

    document.getElementById("mobileSpan").textContent = mobileNumber;

    document.getElementById("genderSpan").textContent = gender;

    document.getElementById("professionSpan").textContent = profession;

    document.getElementById("dobSpan").textContent = dateOfBirth;

    document.getElementById("countrySpan").textContent = country

    popupELement.style.display = "block";

})
closePopupBtn.addEventListener("click", function () {
    popupELement.style.display = "none";
    resetForm();
})
function resetForm() {
    formElement.reset();
    document.getElementById("firstNameSpan").textContent = "";

    document.getElementById("lastNameSpan").textContent = "";

    document.getElementById("emailSpan").textContent = "";

    document.getElementById("mobileSpan").textContent = "";

    document.getElementById("genderSpan").textContent = "";

    document.getElementById("professionSpan").textContent = "";

    document.getElementById("dobSpan").textContent = "";

    document.getElementById("countrySpan").textContent = "";
}