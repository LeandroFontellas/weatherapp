const geocode = require('./utils/utils.js')
const forecast= require('./utils/utilsforecast.js')

const command = process.argv[2]
if(command==undefined){
     console.log('Insira um local, arrombado')
     return
}
geocode(command,(error,{longitude,latitude,location} = {})=>{
     if(error){
          return console.log(error)//usando o return para parar o uso da função caso dê erro mas o return msm n vai ser usado
     }
     forecast(longitude, latitude, (error, forecastData) => {
          if(error){
               return console.log(error)
          }
          console.log(location)
          console.log(forecastData)     
     })
})



