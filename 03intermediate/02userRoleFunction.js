var getUserRole = function (name, role){

    switch (role) {
        case 'admin':
            return `${name} is admin with all access`;
        case 'subadmin':
            return `${name} is sub-admin with access to create an delete courses`;
        case 'testprep':
            return `${name} is testprep with access to create and delete tests`;
        case 'user':
            return `${name} is a user to consume content`;
    
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRole("raghav", "testprep"));

var getRole = getUserRole("sammy", "user");
console.log(getRole);