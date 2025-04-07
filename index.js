require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Ritik's Journey</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        header, footer {
          background-color: #222;
          color: white;
          padding: 15px 20px;
        }
        nav a {
          margin: 0 15px;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        main {
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        section {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      </style>
    </head>
    <body>
      <header>
        <h1>Welcome to Ritik's Portfolio</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Profile</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Schooling Department</h2>
          <p>Ritik completed his schooling from ABC High School. He was an active student in both academics and extracurriculars, securing 80% in his 10th and 85% in his 12th standard. He also participated in inter-school sports and science exhibitions.</p>
        </section>

        <section>
          <h2>Diploma - Government Polytechnic College</h2>
          <p>After schooling, Ritik pursued a diploma in Computer Science at Government Polytechnic College. During the 3-year program, he worked on several hardware and software mini-projects, and completed an internship in a local tech firm focused on IoT devices.</p>
        </section>

        <section>
          <h2>Current Degree - B.Tech in Computer Science</h2>
          <p>Ritik is currently pursuing B.Tech in Computer Science and Engineering (2022–2025). He is in the 8th semester with a CGPA of 7.66. He's actively involved in coding projects, open-source contributions, and academic research in AI and Web Development.</p>
        </section>
      </main>

      <footer>
        <p><strong>About Us:</strong> This is a personal page detailing the academic and professional journey of Ritik.</p>
        <p><strong>The Journey of Ritik:</strong> From a small-town school to becoming a software engineer, Ritik has been on a path of consistent growth, learning, and passion for technology.</p>
      </footer>
    </body>
    </html>
  `);
});


app.get('/login', (req, res) => {
    res.send('Please login !!')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})