let filters = document.querySelectorAll(".filters");

let objectArray = [
    { name: "John", lastname: "Smith", age: 25, occupation: "Developer" },
    { name: "Jane", lastname: "Doe", age: 30, occupation: "Designer" },
    { name: "Bob", lastname: "Johnson", age: 35, occupation: "Manager" },
    { name: "Alice", lastname: "Williams", age: 20, occupation: "Intern" },
    { name: "Mike", lastname: "Brown", age: 40, occupation: "Engineer" },
    { name: "Emma", lastname: "Davis", age: 28, occupation: "Scientist" },
    { name: "Oliver", lastname: "Miller", age: 32, occupation: "Lawyer" },
    { name: "Sophia", lastname: "Wilson", age: 22, occupation: "Teacher" },
    { name: "William", lastname: "Moore", age: 38, occupation: "Doctor" },
    { name: "Isabella", lastname: "Taylor", age: 26, occupation: "Nurse" },
    { name: "Liam", lastname: "Anderson", age: 27, occupation: "Architect" },
    { name: "Mia", lastname: "Thomas", age: 33, occupation: "Pharmacist" },
    { name: "Noah", lastname: "Jackson", age: 29, occupation: "Photographer" },
    { name: "Olivia", lastname: "White", age: 31, occupation: "Chef" },
    { name: "Ethan", lastname: "Harris", age: 24, occupation: "Journalist" },
    { name: "Ava", lastname: "Martin", age: 37, occupation: "Marketing Specialist" },
    { name: "James", lastname: "Garcia", age: 41, occupation: "Financial Analyst" },
    { name: "Charlotte", lastname: "Lee", age: 23, occupation: "Social Worker" },
    { name: "Lucas", lastname: "Walker", age: 34, occupation: "Web Designer" },
    { name: "Amelia", lastname: "Hall", age: 25, occupation: "Researcher" },
    { name: "Henry", lastname: "Smith", age: 25, occupation: "Software Engineer" },
    { name: "Sophia", lastname: "Smith", age: 30, occupation: "UI/UX Designer" },
    { name: "James", lastname: "Smith", age: 35, occupation: "Project Manager" },
    { name: "Emily", lastname: "Jones", age: 20, occupation: "Graphic Designer" },
    { name: "Daniel", lastname: "Jones", age: 40, occupation: "Biochemist" },
    { name: "Natalie", lastname: "Miller", age: 28, occupation: "Medical Researcher" },
    { name: "Michael", lastname: "Miller", age: 32, occupation: "Videographer" },
    { name: "Chloe", lastname: "Brown", age: 22, occupation: "Pastry Chef" },
    { name: "Ella", lastname: "Taylor", age: 31, occupation: "Market Research Analyst" },
    { name: "William", lastname: "Brown", age: 37, occupation: "Systems Analyst" }
];

function populateData(objArr) {
    for (const object of objArr) {
        let personObject = document.createElement("div");
        personObject.classList.add("object");

        let name = document.createElement("h2");
        name.innerText = `Name : ${object.name}`;
        personObject.appendChild(name);

        let lastName = document.createElement("h2");
        lastName.innerText = `last-name : ${object.lastname}`;
        personObject.appendChild(lastName);

        let age = document.createElement("h2");
        age.innerText = `Age : ${object.age}`;
        personObject.appendChild(age);

        let occupation = document.createElement("h2");
        occupation.innerText = `Occupation : ${object.occupation}`;
        personObject.appendChild(occupation);

        document.querySelector("main").append(personObject);
    }
}

populateData(objectArray);

function validation(input, validationName) {
    console.log(input, validationName);
    document.querySelector("main").innerHTML = "";

    switch (validationName) {
        case "name-filter":
            populateData(objectArray.filter(x => x.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())));
            if (objectArray.filter(x => x.name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())).length == 0) {
                document.querySelector("main").innerHTML = `<div class="nothing-found">Nothing found</div>`; 
            }
            break;
        case "last-name-filter":
            populateData(objectArray.filter(x => x.lastname.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())));
            if (objectArray.filter(x => x.lastname.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())).length == 0) {
                document.querySelector("main").innerHTML = `<div class="nothing-found">Nothing found</div>`; 
            }
            break;
        case "age-filter":
            populateData(objectArray.filter(x => x.age.toString().startsWith(input)));
            if (objectArray.filter(x => x.age.toString().startsWith(input)).length == 0) {
                document.querySelector("main").innerHTML = `<div class="nothing-found">Nothing found</div>`; 
            }
            break;
        case "occupation-filter":
            if (objectArray.filter(x => x.occupation.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())).length == 0) {
                document.querySelector("main").innerHTML = `<div class="nothing-found">Nothing found</div>`; 
            }
            populateData(objectArray.filter(x => x.occupation.toLocaleLowerCase().startsWith(input.toLocaleLowerCase())));
            break;

        default:
            break;
    }
}

function getValidationType() {
    for (let i = 0; i < filters.length; i++) {
        if (filters[i].classList[filters[i].classList.length - 1] === "filter-focused") {
            return filters[i].classList[0]
        }
    }
}

filters.forEach(filter => {
    filter.addEventListener("click", () => {
        filters.forEach(element => {
            element.classList.remove("filter-focused");
        });

        filter.classList.add("filter-focused");
    })
});
