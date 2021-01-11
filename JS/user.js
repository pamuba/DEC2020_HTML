class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

function getName(user){
    console.log(`User's Name:${user.name}`)
}

function getAge(user){
    console.log(`User's Age:${user.age}`)
}

export default User
export {getName, getAge}