import dataModel from "../model/userData.js"

const getData = async(req,res) =>{
    try {
        const data =  await dataModel.find({})
        console.log('student data:',data)
    } catch (error) {
        console.log('server error please check')
    }

}

export default getData;