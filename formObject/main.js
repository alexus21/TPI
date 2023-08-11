const Person = function(name, surname, phone, occupation, birthday) {
    return {
        name,
        surname,
        phone,
        occupation,
        birthday
    };
};

const Programmer = function(name, surname, phone, birthday) {
    const prototype = Person(name, surname, phone, "Programador", birthday);
    const programmer = Object.create(prototype);
    return Object.assign(programmer, { occupation: "Programador" });
};

const Designer = function(name, surname, phone, birthday) {
    const prototype = Person(name, surname, phone, "Diseñador", birthday);
    const designer = Object.create(prototype);
    return Object.assign(designer, { occupation: "Diseñador" });
};

const Sysadmin = function(name, surname, phone, birthday) {
    const prototype = Person(name, surname, phone, "Sysadmin", birthday);
    const sysadmin = Object.create(prototype);
    return Object.assign(sysadmin, { occupation: "Sysadmin" });
};

const nameInput = document.querySelector("[data-input-name]");
const surnameInput = document.querySelector("[data-input-surname]");
const phoneInput = document.querySelector("[data-input-phone]");
const occupationSelect = document.querySelector("[data-select-occupation]");
const birthdaySelect = document.querySelector("[data-select-birthday]");
const peopleList = [];

const resetInputs = () => {
    nameInput.value = "";
    surnameInput.value = "";
    phoneInput.value = "";
    occupationSelect.selectedIndex = 0;
    birthdaySelect.selectedIndex = 0;
};

document.querySelector("[data-send-button]").addEventListener("click", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const surname = surnameInput.value;
    const phone = phoneInput.value;
    const occupation = occupationSelect.options[occupationSelect.selectedIndex].text;
    const birthday = birthdaySelect.value;

    if(name !== "" && surname !== "" && phone !== "" && occupation !== "" && birthday !== ""){
        if (occupation === "Programador") {
            peopleList.push(Programmer(name, surname, phone, birthday));
        } else if (occupation === "Diseñador") {
            peopleList.push(Designer(name, surname, phone, birthday));
        } else if (occupation === "Sysadmin") {
            peopleList.push(Sysadmin(name, surname, phone, birthday));
        }

        showSysadminList(peopleList);
    }
});

const myBody = document.querySelector("body");
const myH1 = document.createElement("h1");
myH1.textContent = "Sysadmins list: ";
myH1.classList.add("fs-1", "text", "fw-bold");
myBody.appendChild(myH1);

const showSysadminList = (array) => {
    const myUl = document.createElement("ul");
    myUl.classList.add("list-group");

    array.forEach((item) => {
        if (item.occupation === "Sysadmin") {
            const myLiName = document.createElement("li");
            myLiName.classList.add("list-group-item", "fw-bold");
            myLiName.textContent = `Name: ${item.name}`;
            myUl.appendChild(myLiName);

            const myLiSurname = document.createElement("li");
            myLiSurname.classList.add("list-group-item");
            myLiSurname.textContent = `Surname: ${item.surname}`;
            myUl.appendChild(myLiSurname);

            const myLiPhone = document.createElement("li");
            myLiPhone.classList.add("list-group-item");
            myLiPhone.textContent = `Phone: ${item.phone}`;
            myUl.appendChild(myLiPhone);

            const myLiBirthday = document.createElement("li");
            myLiBirthday.classList.add("list-group-item");
            myLiBirthday.textContent = `Birthday: ${item.birthday}`;
            myUl.appendChild(myLiBirthday);
        }
    });
    resetInputs();
    myBody.appendChild(myUl);
};
