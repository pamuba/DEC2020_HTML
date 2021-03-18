const bcrypt = require("bcrypt");

//IIFE
(
    async function main(){
        // 1 -- doubles the time to calculate the hash
        const saltRounds = 10;
        const originalPassword = "Complex@123";
        const password = "Complex@123";

        const salt = await bcrypt.genSalt(saltRounds);
        // console.log(salt);
        //Hash the password
        const hashedPass = await bcrypt.hash(originalPassword, salt);

        //save in DB
        console.log(hashedPass);

        const isMatch = await bcrypt.compare(password, hashedPass);
        console.log(isMatch);
    }
)();