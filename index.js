import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;




app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomMember1 = firstMember[Math.floor(Math.random() * firstMember.length)];
  const randomMember2 = secondMember[Math.floor(Math.random() * secondMember.length)];
  res.render("index.ejs", {
    member1: randomMember1,
    member2: randomMember2,
  });
});

export default app;


const firstMember = [
  "Aarav",
  "Advait",
  "Akash",
  "Amar",
  "Amit",
  "Anaya",
  "Anika",
  "Anil",
  "Anisha",
  "Arjun",
  "Arpita",
  "Arvind",
  "Asha",
  "Avani",
  "Chetan",
  "Dev",
  "Deepa",
  "Divya",
  "Farhan",
  "Girish",
  "Gopal",
  "Isha",
  "Jay",
  "Jyoti",
  "Kajal",
  "Kalyan",
  "Karan",
  "Ketan",
  "Lakshmi",
  "Lavanya",
  "Mahesh",
  "Manav",
  "Meera",
  "Mihir",
  "Mira",
  "Naman",
  "Neha",
  "Nikhil",
  "Nina",
  "Omkar",
  "Pallavi",
  "Pranav",
  "Priya",
  "Ravi",
  "Rekha",
  "Rohit",
  "Sachin",
  "Sakshi",
  "Tarun",
  "Vaibhav",
  "Zoya"
];

const secondMember = [
  "Aadesh",
"Aaliya",
"Aman",
"Amrita",
"Ansh",
"Anushka",
"Apoorva",
"Aryan",
"Ayush",
"Barkha",
"Basant",
"Bhavya",
"Binita",
"Brijesh",
"Chaitanya",
"Chitra",
"Damini",
"Darsh",
"Dayanand",
"Deepthi",
"Dheeraj",
"Diksha",
"Ekagrah",
"Faisal",
"Farida",
"Gargi",
"Gaurav",
"Gazal",
"Gitanjali",
"Gunjan",
"Harsha",
"Harveer",
"Hema",
"Hitesh",
"Indira",
"Indrajit",
"Ira",
"Ishaan",
"Jagruti",
"Jaspreet",
"Jhanvi",
"Jyestha",
"Kanchan",
"Kanika",
"Karthik",
"Kashish",
"Kavita",
"Khushi",
"Kritika",
"Kunal"

];
