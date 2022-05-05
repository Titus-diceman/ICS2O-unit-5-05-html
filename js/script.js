/* Created by: Titus diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-5-05-html/sw.js", {
    scope: "/ICS2O-unit-5-05-html/",
  })
}

/**
 * Input.
 */

function buttonClicked() {
  
  const sidea = parseInt(document.getElementById('side-a').value)
  const sideb = parseInt(document.getElementById('side-b').value)
  const sidec = parseInt(document.getElementById('side-c').value)

  if (sidea <= 0 || sideb <= 0 || sidec <= 0) {
    document.getElementById("output").innerHTML =
      "you are wrong do it again but right this time"
  } else {
    
  
    if (sidea == sideb && sideb == sidec && sidec == sidea) {
      document.getElementById("output").innerHTML =
    "Your triangle is an equilateral"
    console.log("equilateral")
    } else if (sidea == sideb || sideb == sidec || sidec == sidea) {
      document.getElementById("output").innerHTML =
    "Your triangle is an isosceles"
    console.log("isosceles")
    } else if (sidea != sideb && sideb != sidec && sidec != sidea) {
      document.getElementById("output").innerHTML =
    "Your triangle is an scalene"
    console.log("scalene")
    } else {
    document.getElementById("output").innerHTML =
    "Somthing went wrong..."
    console.log("error")
    }    
  }
}

