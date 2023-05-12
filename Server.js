let mysql= require("mysql");
let express =require("express");
let app=express()
app.get("/getCustomers",(req,res)=>{
res.json("please wait i am going send data from database");
})
app.listen(2233,()=>{

})
let connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:3306,
    database:"customer"
});
connection.connect((err)=>{
if(err){
    console.log("its an error")
}
else{
    console.log("connect to db")
    getDataFromDB();
}
});
getDataFromDB=()=>{
    connection.query("select *from customers",   (err,results)=>{
        if(err){
            console.log("something is wrong")
        }
        else{
            console.log(results);
        }
    })
}