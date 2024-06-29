require('dotenv').config()
const express= require("express");
const app =express();
const port = 8000;



app.listen(process.env.PORT, () => {
    console.log(`App is listening on http://localhost:${port}`);
});