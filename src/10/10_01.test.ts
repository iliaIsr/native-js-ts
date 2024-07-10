import {
    makeHairStyle,
    moveUser,
    upgradeUserLaptop,
    moveCityUser,
    UserType,
    UserWithLaptopType,
    UserWithBookType, moveUserToOtherHouse, addNewBooksToUser,
    updateBook, removeBook, WithCompanyType, UpdateCompany, UpdateCompany2
} from "./10_01";
import exp from "node:constants";



test('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }
    const awesomeUsers = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUsers.hair).toBe(16)
    expect(awesomeUsers.address).toBe(user.address)

})

test('address', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk"
        }
    }
    const City = moveCityUser(user, 'Kiev')

    // expect(user.address.title).toBe('Minsk')
    // expect(City.address.title).toBe("Kiev")
    expect(City.address.title).toBe(user.address.city)

})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            // house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
     expect(movedUser.address).not.toBe(user.address)
    expect(movedUser.laptop).toBe(user.laptop)
    expect(movedUser.address.title).toBe("Kiev")
})



test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop:{
            title:'ZenBook'
        }
    }

    const updateUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(updateUser)
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).not.toBe(user.laptop)
    expect(updateUser.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")


})
//---------------------------------------------------------

test('upgrade', () => {
    let user: UserWithBookType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','react','js']
    }

    const updateUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(updateUser)
    expect(updateUser.books).toBe(user.books)
    expect(updateUser.address).not.toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(user.address.house).not.toBe(updateUser.address.house)
    expect(updateUser.address.house).toBe(99)


})


test('add new books to user', () => {
    let user: UserWithBookType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','react','js']
    }

    const updateUser = addNewBooksToUser(user, ['rest ip', 'c+'])

    expect(user).not.toBe(updateUser)
    expect(updateUser.books).not.toBe(user.books)
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books[3]).toBe('rest ip')
    expect(updateUser.books[4]).toBe('c+')

})


test('update book', () => {
    let user: UserWithBookType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const updateUser = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(updateUser)
    expect(updateUser.books).not.toBe(user.books)
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books[2]).toBe('ts')

})


test('remove book', () => {
    let user: UserWithBookType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        books: ['css','html','js','react']
    }

    const updateUser = removeBook(user, 'js')

    expect(user).not.toBe(updateUser)
    expect(updateUser.books).not.toBe(user.books)
    expect(updateUser.address).toBe(user.address)
    expect(updateUser.laptop).toBe(user.laptop)
    expect(updateUser.books[2]).toBe('react')

})

test('comnpanies', () => {
    let user: WithCompanyType & UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house:12
        },
        laptop:{
            title:'ZenBook'
        },
        companies:[{id:1, title:"Epam"}, {id:2, title:"Incubator"}]
    }

    const userCopy = UpdateCompany(user,1,'EPAM')

    expect(user).not.toBe(userCopy)
    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.address).toBe(user.address)
    expect(userCopy.laptop).toBe(user.laptop)
    expect(userCopy.companies[0].title).toBe('EPAM')

})


test('UpdateComnpany', () => {

    let companies={
        'Dimych':[{id:1, title:"Epam"}, {id:2, title:"Incubator"}],
        'Artem':[{id:2, title:"Incubator"}]
    }

    const copy= UpdateCompany2(companies,'Dimych',1, 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')

})