
import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.static("public"));

// API that sends data to the frontend
app.get("/api/info", (req, res) => {
    res.json({
        name: "Harsh Rajput",
        role: "DevOps Engineer",
        skills: ["Docker", "AWS", "Linux", "Node.js"],
        status: "Application is running successfully"
    });
});

// Another API endpoint
app.get("/api/message", (req, res) => {
    res.send("Hello from the Express backend!");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
