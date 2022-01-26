const user = {
    first_name: 'boris',
    last_name: 'borisov',
    age: 17,
    was_born: '20.09.2003'
}

const getFullName = (firstName, lastName) => {
    console.log(`
        fullName: ${user.first_name} ${user.last_name}
    `
    )
}

getFullName(user)