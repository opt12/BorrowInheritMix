var mixDeveloper = {languages: [], patterns: [], /*...*/}
var mixEmployee = {personnelNumber: 0, /*...*/}
var mixFreelancer = {hourlyRate: 100, /*...*/}
var protoPerson = {initPerson(name) {/*...*/}, /*...*/}


let felix = Object.create(protoPerson).initPerson('Felix');
Object.assign(felix, mixDeveloper, mixFreelancer);

felix.initDeveloper(['JS', 'C'], ['Mixins', 'Decorators'])
    .initFreelance(120);


let john = Object.create(protoPerson).initPerson('John');
Object.assign(john, mixDeveloper, mixEmployee);

john.initDeveloper(['Java'], ['Singletons', 'Facade'])
    .initEmployee(666, 30000);