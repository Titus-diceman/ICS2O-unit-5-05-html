/* Created by: Titus Diceman
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-5-05-html/sw.js", {
    scope: "/ICS2O-unit-5-05-html/",
  })
}

/**
 * This function displays the code for triangle types.
 */
function buttonClicked() {

  const aside = parseInt(documet.getElementById("aside").value)
  const bside = parseInt(documet.getElementById("bside").value)
  const cside = parseInt(documet.getElementById("cside").value)

  if (aside == bside || aside == cside || bside == cside) {
    document.getElemnentById("output").innerHTML
    "this is a isosceles triangle" 
  }
  if (aside != bside && cside != aside && bside != cside) {
    document.getElemnentById("output").innerHTML
    "this is a scalene triangle" 
  }
  if (aside == bside && aside == cside && bside == cside) {
    document.getElemnentById("output").innerHTML
    "this is a equilateral triangle" 
  }

}
