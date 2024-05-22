import {greetingMessage, ManType} from "./05_01";

let people:Array<ManType>=[]

beforeEach(()=>{
    people = [
        { name: 'Andrew Ivanov', age: 33 },
        { name: 'Alexander Petrov', age: 24 },
        { name: 'Dmitry Sidorov', age: 18 },
    ];
})

test("Should get array of greeting messages",()=>{
    // const newMes=people.map(p=>"Hello "+ p.name.split(" ")[0] + ". Welcom to IT")
   const newMes=greetingMessage(people)
    expect(newMes.length).toBe(3)
    expect(newMes[0]).toBe("Hello Andrew. Welcom to IT")
    expect(newMes[1]).toBe("Hello Alexander. Welcom to IT")
    expect(newMes[2]).toBe("Hello Dmitry. Welcom to IT")
})

// expect(greetingMessage(people).length).toBe(3)
// expect(greetingMessage(people)[0]).toBe("Hello Andrew. Welcom to IT")
// expect(greetingMessage(people)[1]).toBe("Hello Alexander. Welcom to IT")
// expect(greetingMessage(people)[2]).toBe("Hello Dmitry. Welcom to IT")
// })