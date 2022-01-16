let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let names = {
    sunday: {male: ['kwasi'], female: ['Akosua', 'Esi']},
    monday: {male: ['Kwadwo'], female: ['Adwoa']},
    tuesday: {male: ['kwabena', 'ebo'], female: ['Abena']},
    wednesday: {male: ['kwaku', 'yooku'], female: ['Akua']},
    thursday: {male: ['yaw'], female: ['yaa']},
    friday: {male: ['kofi'], female: ['Afia']},
    saturday: {male: ['kwame'], female: ['Amba', 'Ama']}
}

function validateForm() {
    event.preventDefault();
    let dob = document.getElementById('userdob').value;
    let genderElements = document.getElementsByName('gender');
    let genderVal;
    for (const genderElement of genderElements) {
        if (genderElement.checked === true) {
            genderVal = genderElement.value;
        }
    }

    let alert = document.getElementById('alert');

    if (!dob) {
        alert.style.display = 'block';
        alert.style.backgroundColor = '#b41919';
        alert.innerText = 'Date is required !!';
    }

    if (!genderVal) {
        alert.style.display = 'block';
        alert.style.backgroundColor = '#b41919';
        alert.innerText = 'Gender is required !!';
    }


    if (genderVal && dob) {
        let newName = getName(dob, genderVal)
        alert.style.display = 'block';
        alert.innerText = 'Your new name is ' + newName;
    }

    dismissAlert(alert);
}

function getName(dob, genderVal) {

    let selectedDate = new Date(dob);

    let dayName = days[selectedDate.getDay()];
    return names[dayName][genderVal];

}


function dismissAlert(alert) {
    setTimeout(function () {
        alert.style.display = 'none';
        alert.style.backgroundColor = '#1E90FFFF';
    }, 3000);
}

module.exports = {getName};

