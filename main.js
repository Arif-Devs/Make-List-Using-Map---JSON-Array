import {studentData} from "./studentData.js"

studentData.map((item, i) =>{
    let details = `Student name: ${item.name}, Student ID: ${item.ID}, email: ${item.email} `
    console.log(details)
})