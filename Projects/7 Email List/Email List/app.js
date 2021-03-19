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
    const listID = '6ecbc121c5'
    const apiKey = '4dd24e1c195b4bda0f8fe93e593fd2e8-us1'
    const url = 'https://us1.api.mailchimp.com/3.0/lists' + listID

    const options = {
        method: "POST"
        auth: 'abhijit:'+ apiKey
    }

    const request = https.request(url, options, function(response) {

        if (response.statusCode === 200) {
            res.send('successfully subsctibed')
        } else {
            res.send('please sign up again')
        }

        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    req.end
})


app.listen(process.env.PORT || 3000, function(){
    console.log('Server started on port 3000')
})