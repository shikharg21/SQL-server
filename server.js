const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('persons', {
        persons: [
            { name: 'Abc', age: 21, city: 'delhi' },
            { name: 'def', age: 23, city: 'madras' },
            { name: 'ghi', age: 17, city: 'mumbai' }
        ]
    })
})

app.get('/add', (req, res) => {
    res.render('persons_add')
})



app.listen(3434, () => {
    console.log("Server Started on http://localhost:3434/")
})