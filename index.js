import express from 'express'

const app = express()
const port = 3000

app.get('/:name?', (req, res) => {
  const file = req.params["name"] ?? "index.html"
  res.sendFile(file, { root: "src" })
})

app.listen(port, () => {
})
