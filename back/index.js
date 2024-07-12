import { configDotenv } from 'dotenv'
import express from 'express'

const app = express()
app.use(express.static('dist'))

const port = process.env.PORT || 4000

app.get('/api/arrays', (req, res) => {
  const arrays = [
      {
        id: 1,
        title: '1st arr',
        content: 'the array' 
      },
      {
        id: 2,
        title: '2nd arr',
        content: 'the 2nd array' 
      },
      {
        id: 3,
        title: '3rd arr',
        content: 'the 3rd array' 
      },
      {
        id: 4,
        title: '4th arr',
        content: 'the 4th array' 
      },
      {
        id: 5,
        title: '5th arr',
        content: 'the 5th array' 
      },
      {
        id: 6,
        title: '6th arr',
        content: 'the 6th array' 
      }
  ];
  res.send(arrays)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })