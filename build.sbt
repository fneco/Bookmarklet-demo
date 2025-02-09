import org.scalajs.linker.interface.ModuleKind
import org.scalajs.linker.interface.ModuleSplitStyle

lazy val hello = project
  .in(file("."))
  .enablePlugins(ScalaJSPlugin) // Enable the Scala.js plugin in this project
  .settings(
    scalaVersion := "3.3.4",
    semanticdbEnabled := true, // enable SemanticDB
    scalacOptions += {
      if (scalaVersion.value.startsWith("2.12"))
        "-Ywarn-unused-import"
      else
        "-Wunused:imports"
    },

    // Tell Scala.js that this is an application with a main method
    scalaJSUseMainModuleInitializer := true,

    /* Configure Scala.js to emit modules in the optimal way to
     * connect to Vite's incremental reload.
     * - emit ECMAScript modules
     * - emit as many small modules as possible for classes in the "hello" package
     * - emit as few (large) modules as possible for all other classes
     *   (in particular, for the standard library)
     */
    scalaJSLinkerConfig ~= {
      _.withModuleKind(ModuleKind.ESModule)
        .withModuleSplitStyle(ModuleSplitStyle.SmallModulesFor(List("hello")))
    },

    /* Depend on the scalajs-dom library.
     * It provides static types for the browser DOM APIs.
     */
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.8.0"
  )
