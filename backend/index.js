const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(
  cors({
    origin: "https://accredianloginsignup.netlify.app" || "http://localhost:3000",
    // credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const authRouter = require("./Routes/auth.router");

app.use("/api/v1", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running....");
});
