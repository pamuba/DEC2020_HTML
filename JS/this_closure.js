var usr = {
    department:"Sales",
    data : [
        {name:"John Wick", age:22},
        {name:"Jill", age:25}
    ],
    clickHandler:function(){
       var that = this
       this.data.forEach(function(person){
        console.log("this referring to:"+JSON.stringify(that));
        console.log(person.name + " works for the department " + that.department)
       })
    }
}

usr.clickHandler();