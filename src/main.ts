import "../style/style.scss";

class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    message() {
        return `Hello ${this.fullName()}`;
    }

    // Méthode privée
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let nico = new Person('Plopi', 'Dumbledore');
let wrapper = document.getElementById('wrapper');

wrapper.innerHTML = `<p>${nico.message()}</p>`;