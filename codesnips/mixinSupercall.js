const withID = function (idNumber) {
    let _idNumber = idNumber;
    let superIdentify = this.identify || (()=>{});
    this.identify = function(){
        return {idNumber: _idNumber, ...superIdentify()}
    }
    return this;
};
const withName = function(name) {
    let _name = name;
    let superIdentify = this.identify || (()=>{});
    this.identify = function(){
        return {name: _name, ...superIdentify()}
    }
    return this;
}
const onlyName = withName.call({}, 'Peter');
const onlyID = withID.call({}, '666');
const iDAndName = withName.call(withID.call({}, '999'), 'Hans');
const nameAndId = withID.call(withName.call({}, 'Tim'), '333');

console.log(onlyName.identify());   //{ name: 'Peter' }
console.log(onlyID.identify());     //{ idNumber: '666' }
console.log(iDAndName.identify());  //{ name: 'Hans', idNumber: '999' }
console.log(nameAndId.identify());  //{ idNumber: '333', name: 'Tim' }