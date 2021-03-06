const express=require('express');
const app=express();
var bodyParser=require('body-parser');
app.use(require('./corsConfig/cors'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/item',require('./routes/itemRoutes'));
// app.use('/api/users',require('./routes/userRoutes'))

/**
REstuarants
menus
submenus
items
orders
users
orderhistory
*/

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Started at port 5000 ");
});