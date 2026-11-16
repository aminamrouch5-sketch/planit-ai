import { demoTask } from "./demo.js";
function totalTaches(object){
    let total = object.tasks.length
    return total
}
function totalTodoStatus(object){
    let total = 0;
    object.tasks.forEach(element => {
        if(element.status == "To Do"){
            total++
        }
    });
    return total
}
function totalProgressStatus(object){
    let total = 0
    object.tasks.forEach((element)=>{
        if(element.status == "Progress"){
            total++
        }
    })
    return total
}
function totalDoneStatus(object){
    let total = 0;
    object.tasks.forEach((element)=>{
        if(element.status=="Done"){
            total++
        }
    })
    return total
}
function Pourcentage(total,tachedone){
    return Math.floor((tachedone/total)*100)

}
function alerteCreation(){

}
export{totalDoneStatus,totalProgressStatus,totalTodoStatus,totalTaches,Pourcentage}