const mentors=[
    {id:1, title:"Wow", "my salary":10},
    {id:"110", title:"XXX", "my salary":100},
    {id:13, title:"Tow", "my salary":100},
    {id:14, title:"How", "my salary":100}
]
const artemId="110";

const mentor1=mentors.find(m=>m.id===artemId)

console.log(mentor1)