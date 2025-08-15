const express = require("express");
const path = require("path");
const multer = require("multer");
const hbs = require("hbs");

const app = express();
const port = 3000;

// Set view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// hbs.registerHelper('includes', function (str, substr) {
//     if (typeof str === 'string') {
//         return str.includes(substr);
//     }
//     return false;
// });


// Serve static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Home route
app.get("/", (req, res) => {
    res.render("home", { firstname: "John", lastname: "Doe" });
});

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.render("home", { error: "No file uploaded!" });
    }
    res.render("home", {
        firstname: "John",
        lastname: "Doe",
        filePath: `/uploads/${req.file.filename}`,
        fileName: req.file.originalname
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
