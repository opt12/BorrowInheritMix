var mixDeveloper = {
    languages: [],
    patterns: [],
    addLanguage(lang) {
        // use concat instead of push, to not modify the original array but to replace it!
        this.languages = this.languages.concat(lang);
        return this;
    },
    addPattern(pat) {
        // use concat instead of push, to not modify the original array but to replace it!
        this.patterns = this.patterns.concat(pat);
        return this;
    },
    developerSay() {
        console.log(`My name is ${this.name}, my Languages are ${this.languages} and I master ${this.patterns}.`);
        return this;
    },
    initDeveloper(languages = [], patterns = []) {
        this.languages = languages;
        this.patterns = patterns;
        return this;
    }
}

var mixEmployee = {
    personnelNumber: 0,
    annualSalary: 50000,
    setPersonalNumber(num) { this.personnelNumber = num },
    setAnnualSalary(num) { this.annualSalary = num },
    employeeSay() {
        console.log(`My name is ${this.name}, my personnel number is ${this.personnelNumber}.`)
        return this;
    },
    initEmployee(personalNumber = 0, annualSalary = 50000) {
        this.personnelNumber = personalNumber;
        this.annualSalary = annualSalary;
        return this;
    }
}

var mixFreelancer = {
    hourlyRate: 100,
    setHourlyRate(num) { this.hourlyRate = num },
    freelanceSay() {
        console.log(`My name is ${this.name}, my hourly rate is ${this.hourlyRate}.`)
        return this;
    },
    initFreelance(hourlyRate = 100) {
        this.hourlyRate = hourlyRate;
        return this;
    }
}

var protoPerson = {
    initPerson(name) {
        this.name = name;
        return this;
    },
    personSay() {
        console.log(`Hello, my name is ${this.name}`)
    },

}

let felix = Object.create(protoPerson).initPerson('Felix');
Object.assign(felix, mixDeveloper, mixFreelancer);

let john = Object.create(protoPerson).initPerson('John');
Object.assign(john, mixDeveloper, mixEmployee);

console.log(`john.languages === felix.languages? ${john.languages === felix.languages}`);
//john.languages === felix.languages? true


felix.initDeveloper(['JS', 'C'], ['Mixins', 'Decorators']).initFreelance(120);
felix.developerSay();   //My name is Felix, my Languages are JS,C and I master Mixins,Decorators.
felix.freelanceSay();   //My name is Felix, my hourly rate is 120.


john.initDeveloper(['Java'], ['Singletons', 'Facade']).initEmployee(666, 30000);
john.addLanguage('C#');
john.developerSay();    //My name is John, my Languages are Java,C# and I master Singletons,Facade.
john.employeeSay(); //My name is John, my personnel number is 666.




