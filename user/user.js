export default class User {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}

export function printUser(user) {
    return user.first + ' ' + user.last;
}