// const youKEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJjYXJ0VGVzdCIsIm1haWwiOiJjYXJ0QG1haWwuY29tIiwicGFzcyI6IiQyYiQxMCQ2MktkWEd1Z2EvL0ozVlpvUzd2UVpldUk4VUdnSTNlZXJZY2V5bXZVZ2E0Z3VjdmtVSzVQeSJ9LCJpYXQiOjE3MTgzNDU1OTUsImV4cCI6MTcxODM0NzM5NX0.E9yf13KjUy58CZZLRZWMy26PFlUNTmmsi_eAOLkwgSQ"
// let mys;
// fetch("http://localhost:5001/cart/", {
//   method: "GET",
//   headers: {
//     bearer: youKEY,
//     Accept: "*/*",
//     "Sec-Fetch-Mode": "cors",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => {
//     console.log("json", json);
//     mys = json;
//   })
//   .catch((error) => console.error(JSON.stringify(error)));

const temp = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vy`+
              `Ijp7Im5hbWUiOiJjYXJ0VGVzdCIsIm1haWwiOiJjYXJ0QG1`+
              `haWwuY29tIiwicGFzcyI6IiQyYiQxMCQ2MktkWEd1Z2EvL0o`+
              `zVlpvUzd2UVpldUk4VUdnSTNlZXJZY2V5bXZVZ2E0Z3VjdmtV`+
              `SzVQeSJ9LCJpYXQiOjE3MTgzNDU1OTUsImV4cCI6MTcxODM0Nz`+
              `M5NX0.E9yf13KjUy58CZZLRZWMy26PFlUNTmmsi_eAOLkwgSQ`
const f= (temp)=>{
  const len = temp.length
  let cnt =0;
  for(let i=0;i<len;++i)
  if(temp[i]==" ")++cnt
  console.log( cnt);
}
f(temp);