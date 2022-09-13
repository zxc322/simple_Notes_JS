import express from "express";
import path from 'path'

const app = express()
const __dirname = path.resolve()
const PORT = 3000
app.use(express.static(path.resolve(__dirname)))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'templates', 'index.html'))
})

