import $ from "jquery"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/styles.css"

// http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}

$(document).ready(function () {
  $("button#go").click(function () {
    let numberOfDinos = $("input#number").val()
    $("input#number").val("")

    let promise = new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest()
      const url = `http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=${numberOfDinos}`
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response)
        } else {
          reject(request.response)
        }
      }
      request.open("GET", url, true)
      request.send()
    })

    promise.then(
      function (response) {
        console.log(promise)
        // const body = JSON.parse(response)
        $("#dino-list").text(
          `This is your request for ${numberOfDinos} Dinos: ${response}`
        )
      },
      function (error) {
        console.log(promise)
        $("#dino-list").text(
          `There was an error processing your request: ${error}`
        )
      }
    )
  })
})
