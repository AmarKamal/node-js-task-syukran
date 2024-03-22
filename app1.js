const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => 
// res.send('Hello World amar!')
{

    let data = {
        name:'amar',
        age:23,
        University:'UiTM',
        hobby:'Badminton'
    }
return res.send(data)
}

)

app.listen(PORT, () => console.log(`Connected to server port ${PORT}!`))