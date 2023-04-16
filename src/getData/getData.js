const axios = require('axios');
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');

const getData = async ()=>{
  try{
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    const idUser = resp.data.map(user=>user.id);
    return mapArrToStrings(idUser);
  }
  catch(e){

  }
}

module.exports = getData;
