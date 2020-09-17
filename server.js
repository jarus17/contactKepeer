const express = require("express");
const connectDB = require("./config/db")
const app = express();
const Port = process.env.PORT || 5000;
connectDB();

app.use(express.json({extended :false}));
app.use("/api/users",require("./routes/users"))
app.use("/api/contacts",require("./routes/contacts"))
app.use("/api/auth",require("./routes/auth"))


app.listen(Port,()=>{
    console.log(`Server is up on port ${Port}`);
})