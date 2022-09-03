// Hidden form
const buttonEdit = document.getElementById('edit-button')
buttonEdit.addEventListener('click', function () {
    const data1 = document.getElementById('form-data')
    const display = data1.style.display
    if (display == 'block') {
        console.log(display, "display dalam if")
        data1.style.display = 'none'
    } else {
        console.log(display, "display dalam else")
        data1.style.display = 'block'
    }
})

// var textName = document.getElementById('text-name')
// var textRole = document.getElementById('text-role')
// var textAvailability = document.getElementById('text-availability')
// var textAge = document.getElementById('text-age')
// var textLocation = document.getElementById('text-location')
// var textExperience = document.getElementById('text-experience')
// var textEmail = document.getElementById('text-email')

// input field read data from text field
// document.getElementById('input-name').value = textName.innerText
// document.getElementById('input-role').value = textRole.innerText
// document.getElementById('input-availability').value = textAvailability.innerText
// document.getElementById('input-age').value = textAge.innerText
// document.getElementById('input-location').value = textLocation.innerText
// document.getElementById('input-experience').value = textExperience.innerText
// document.getElementById('input-email').value = textEmail.innerText

// declare variable from text field
let formData = {
    inputName: document.getElementById('text-name'),
    inputRole: document.getElementById('text-role'),
    inputAvailability: document.getElementById('text-availability'),
    inputAge: document.getElementById('text-age'),
    inputLocation: document.getElementById('text-location'),
    inputExperience: document.getElementById('text-experience'),
    inputEmail: document.getElementById('text-email')
}

// declare variable from input field
let formInputData = {
    inputName: document.getElementById('input-name'),
    inputRole: document.getElementById('input-role'),
    inputAvailability: document.getElementById('input-availability'),
    inputAge: document.getElementById('input-age'),
    inputLocation: document.getElementById('input-location'),
    inputExperience: document.getElementById('input-experience'),
    inputEmail: document.getElementById('input-email')
}

// get new data on localstorage
const data = JSON.parse(localStorage.getItem('formData'));
if (data != null) {
    for ( let key in formData ) {
        formData[key].innerText = data[key]
        formInputData[key].value = data[key]
    }
}

// edit and submit form
function handleSubmit(event) {
    var inputName = document.getElementById('input-name')
    var inputRole = document.getElementById('input-role')
    var inputAvailability = document.getElementById('input-availability')
    var inputAge = document.getElementById('input-age')
    var inputLocation = document.getElementById('input-location')
    var inputExperience = document.getElementById('input-experience')
    var inputEmail = document.getElementById('input-email')

    // get old data on localstorage
    const dataOld = localStorage.getItem('formData')
    if (dataOld != null) {
        localStorage.setItem('formDataOld', dataOld)
    }

    // input new data --> localstorage
    localStorage.setItem('formData', JSON.stringify({
        inputName: inputName.value,
        inputRole: inputRole.value,
        inputAvailability: inputAvailability.value,
        inputAge: inputAge.value,
        inputLocation: inputLocation.value,
        inputExperience: inputExperience.value,
        inputEmail: inputEmail.value
    }))
    // event.preventDefault()

    // change data on text field
    document.getElementById('text-name').innerText = inputName.value
    document.getElementById('text-role').innerText = inputRole.value
    document.getElementById('text-availability').innerText = inputAvailability.value
    document.getElementById('text-age').innerText = inputAge.value
    document.getElementById('text-location').innerText = inputLocation.value
    document.getElementById('text-experience').innerText = inputExperience.value
    document.getElementById('text-email').innerText = inputEmail.value
    // form hiding after submit
    const data1 = document.getElementById('form-data')
        const display = data1.style.display
        if (display == 'block') {
            console.log(display, 'display dalam if')
            data1.style.display = 'none'
        } else {
            console.log(display, 'display dalam else')
            data1.style.display = 'block'
        }
        event.preventDefault()
}

// submit confirm
function konfirmasi() {
    var inputName = document.getElementById('input-name').value
    var inputRole = document.getElementById('input-role').value
    var inputAvailability = document.getElementById('input-availability').value
    var inputAge = document.getElementById('input-age').value
    var inputLocation = document.getElementById('input-location').value
    var inputExperience = document.getElementById('input-experience').value
    var inputEmail = document.getElementById('input-email').value
    if(inputName != "" && inputRole != "" && inputAvailability != "" && inputAge != "" && inputLocation != "" && inputExperience != "" && inputEmail != ""){
        if(confirm("Apakah Anda yakin ingin melakukan perubahan data?")) {
            alert("Data berhasil diubah!")
            return true;
        } else {
            // location.reload();
            return false;
        }
    } else {
        alert("Lengkapi data terlebih dahulu!")
        return false
    }
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}