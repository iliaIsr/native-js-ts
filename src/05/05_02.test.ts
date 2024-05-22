import {CityType} from "../02/02_02";
import {getStreetGovBuild, getStreetsTitle} from "./05_01";


let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: "White street"
                    }
                }
            },
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: "Happy street"}}},
            {buildedAt: 2020, repaired: false, address: {number: 101, street: {title: "Happy street"}}},
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {type:"FIRE-STATION",budget:500000, staffCount:1000,
                address:{
                    street: {
                        title: "South Str"
                    }
                }}
        ],
        citizensNumber: 100000

    }
})
test ("list of streets titles of goverments buildings",()=>{
    let streer=getStreetGovBuild(city.governmentBuildings)

    expect(streer.length).toBe(2)
    expect(streer[0]).toBe("Central Str")
    expect(streer[1]).toBe("South Str")

})

test("list of street titles",()=>{
    let streets=getStreetsTitle(city.houses)

    expect(streets.length).toBe(3)
    expect(streets.length-1).toBe(2)
    expect(streets[0]).toBe("White street")
    expect(streets[1] && streets[2]).toBe("Happy street")


})