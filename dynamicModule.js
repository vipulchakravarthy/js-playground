
//dynamic import 
import('./user/user.js').then(({ default: User, printUser }) => {
    const user = new User("vipul", "Chakravarthy");
    console.log(printUser(user));
})