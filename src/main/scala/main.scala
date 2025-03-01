package sample

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future
import scala.concurrent.Promise
import scala.scalajs.js
import scala.scalajs.js.annotation.*
import scala.scalajs.js.timers.setTimeout
import scala.util.Random

@JSExportTopLevel("hello")
def hello(count: Int): Unit =
  (1 to count)
    .map(_ => sayHello(Random.between(1000, 8000)))
    .foreach(_.foreach(println))

  println("start")

def sayHello(num: Int): Future[String] = {
  val promise = Promise[String]()
  setTimeout(num) {
    promise.success(s"hello after $num ms")
  }
  println(s"called with $num")
  promise.future
}
