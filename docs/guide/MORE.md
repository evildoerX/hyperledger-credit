# UML
```uml
@startuml

class VueAppModel
class Page
class Module
class Router
class Route
class Routes
class Component
class WebAppModel
class Compiler
class VueApplication
class WebAppRuntime
class Loader
class Parser
class Render

VueAppModel *-- Page
VueAppModel ..> Router
Routes o-- Route
Page *-- Component
Module <|-- Page
Module <|-- Router
WebAppModel <|-- VueAppModel
Router <--> Routes
WebAppRuntime *-- Render
WebAppRuntime *-- Parser
VueAppModel ..> Compiler
Compiler ..> Loader
VueApplication ..> WebAppRuntime
VueApplication --> Compiler
@enduml
```
@startuml

class VueAppModel
class Page
class Module
class Router
class Route
class Routes
class Component
class WebAppModel
class Compiler
class VueApplication
class WebAppRuntime
class Loader
class Parser
class Render

VueAppModel *-- Page
VueAppModel ..> Router
Routes o-- Route
Page *-- Component
Module <|-- Page
Module <|-- Router
WebAppModel <|-- VueAppModel
Router <--> Routes
WebAppRuntime *-- Render
WebAppRuntime *-- Parser
VueAppModel ..> Compiler
Compiler ..> Loader
VueApplication ..> WebAppRuntime
VueApplication --> Compiler
@enduml
