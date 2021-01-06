var usr = {
    department:"Sales",
    data : [
        {name:"John Wick", age:22},
        {name:"Jill", age:25}
    ],
    clickHandler:function(){
       this.data.forEach(function(person){
        console.log("this referring to:"+this);
        console.log(person.name + " works for the department " + this.department)
       })
    }
}

usr.clickHandler();