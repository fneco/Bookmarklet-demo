package sample

import org.scalajs.dom

import scala.scalajs.js
import scala.scalajs.js.Dynamic.global
import scala.scalajs.js.annotation.*

@main
def hello(): Unit =
  var bodyChildrenCount = dom.document.body.children.length
  global.alert(s"""
  hello with scala!
  body children count: $bodyChildrenCount
  """)
