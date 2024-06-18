function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string,
    age: number
}
test('value type test', () => {

    var userCount = 100;

    var adminCount = userCount

    adminCount = 101


    expect(adminCount).toBe(userCount + 1)
    expect(userCount).toBe(100)


})

test('sort array test', () => {

    const letters = ['c', 'b', 'a', 'x', 'z']

    letters.sort()
    expect(letters).toEqual(['a', 'b', 'c', 'x', 'z'])

})

