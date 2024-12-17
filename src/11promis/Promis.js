import axios from "axios";
//
// const promise1=axios.get('https://football.kulichki.net/spain/2025/teams/real.htm')
// const promise2=axios.get('http://football.kulichki.net/germany/')
// console.log("WAIT")
// promise1.then(res=>{

    // console.log(res.statusText)})
    // .catch(err=>{console.log("ERROR", err.message)
    // console.log("FINISH")})
// promise2.then(res=>{console.log(res.statusText)})

// const promisAll=Promise.all([promise1,promise2])
// promisAll.then(res=>{console.log(res[0].datalist)
//     console.log(res[1].data)
// })

const ObjResp={
    name:"Illia",
    adress:{
        city:"Minsk",
        index:210024,
        street:{
            name:'Bagro',
            house:23
        }
    }
}

async function run(){
    let adress=await ObjResp.adress;
    console.log(adress);
    let city=await adress.city;
    console.log(city);
    let name=await ObjResp.name;
    console.log(name);
}
run()