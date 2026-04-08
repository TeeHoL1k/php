
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthYearOutput').innerText = initPerson.birthDate;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

function newPerson(person) {
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('patronymicOutput').innerText = person.patronymic;
    document.getElementById('birthYearOutput').innerText = person.birthDate;
    document.getElementById('professionOutput').innerText = person.profession;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const person = personGenerator.getPerson();
    newPerson(person);
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('genderOutput').innerText = 'Генерация пола';
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('patronymicOutput').innerText = 'Генерация отчества';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('professionOutput').innerText = 'Генерация профессии';
});