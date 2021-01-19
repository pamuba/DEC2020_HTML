var events = require('events');
var util = require('util')

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var john = new Person('John');
var david = new Person('david');
var personArray = [john, david]


personArray.forEach(function(person){
    person.on("Jump", function(msg){
        console.log(person.name + "is Jumping: " +msg)
    })
})

john.emit('Jump',"2mtrs")
david.emit('Jump',"3mtrs")