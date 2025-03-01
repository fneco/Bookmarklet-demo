import org.scalajs.linker.interface.ModuleKind
import org.scalajs.linker.interface.ModuleSplitStyle

lazy val scalajs = project
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
    scalaJSLinkerConfig ~= {
      _.withModuleKind(ModuleKind.ESModule)
    },

    /* Depend on the scalajs-dom library.
     * It provides static types for the browser DOM APIs.
     */
    libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "2.8.0"
  )
