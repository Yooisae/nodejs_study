const express = require("express");

const app = express();

const port = 8080;

app.listen(port, () => {
    console.log("서버 실행중");
});

app.get("/", (req, res)=>{
    res.send("서버 실행중");
});


