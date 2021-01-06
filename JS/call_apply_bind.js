var person = {
    firstName : "John",
    lastName : "Wick",
    showFullName : function(){
        return this.firstName+ " " + this.lastName
    }
};

var diffPerson = function(dept, id){
    console.log(this.showFullName() + ' I am a person');
    console.log(this.showFullName()+' DEPT:' +dept+' ID:'+id )
}

var newFn = diffPerson.bind(person)
newFn("HR", 123)
