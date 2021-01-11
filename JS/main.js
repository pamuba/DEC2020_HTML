import UserClass, {getName as displayName, getAge} from './user.js'

const user = new UserClass("John", 40);
displayName(user);
getAge(user);