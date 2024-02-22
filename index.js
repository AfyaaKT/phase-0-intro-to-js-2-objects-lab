// Write your solution in this file!
const employee = {
    name : 'Ali',
    streetAddress : 'Baghdad'
}

function updateEmployeeWithKeyAndValue(obj , key , value){
const newObject = {...obj}
newObject[key] = value
return newObject

}
console.log(updateEmployeeWithKeyAndValue(employee , 'age' , 30))

function destructivelyUpdateEmployeeWithKeyAndValue(obj , key , value){
    obj[key]= value;
    return obj

}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee ,'name' , 'Ahmed'));

function deleteFromEmployeeByKey(obj , key){
    const newObject = {...obj};
    delete newObject[key];
    return newObject
}
console.log(deleteFromEmployeeByKey(employee , 'name'));

function destructivelyDeleteFromEmployeeByKey(obj , key){
    delete obj[key];
return obj
}
console.log(destructivelyDeleteFromEmployeeByKey(employee , 'name'));
