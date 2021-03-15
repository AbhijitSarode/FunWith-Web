const express = require('express')
const bodyParser = require('body-parser')
const rquest = require('request')
const https = require('https')
const { url } = require('inspector')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
    const firstName = req.body.fname
    const lastName = req.body.lname
    const email = req.body.email
    console.log(firstName, lastName, email)

    var data =  {
        members : {
            email_address : email,
            status: 'subscribed',
            merge_fields: {
                FNAME: fname,
                LNAME: lname
            }
        }
    }

    var jsonData = JSON.stringify(data)
    const listID = 'b11e46eb41'
    const apiKey = '3f3625cfc24b744d275ca995a49ceba1-us1'
    const url = 'https://us1.api.mailchimp.com/3.0/'

    const options = {
        method: "POST"
        auth: 'abhijit:'+ apiKey
    }

    https.request(url, options, function(response) {
        res.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })
})


app.listen(3000, function(){
    console.log('Server started on port 3000')
})