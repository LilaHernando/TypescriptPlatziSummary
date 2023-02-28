                                        1.
Las interfaces pueden ser muy útiles para tener un código mas limpio y ordenado,
teniendo en cuenta el principio de responsabilidad única,
podemos crear nuestras entidades de manera que tengamos el modelo (conjunto de atributos de la entidad)
y por otra parte los servicios (métodos que permiten interactuar con la entidad)
por separado.

Los modelos pueden requerir a otros modelos como parte de su estructura,
para este caso importamos las interfaces que necesitamos integrar como valor anidado
de alguno de los atributos del modelo.

los archivos .model almacenan los modelos, las estructuras.
los archivos .service almacenan los servicios o métodos (sin ejecutar)
el archivo main almacena la combinacion de ambos archivos bajo la ejecución de la app.
                                        2.
Comencemos con el proyecto.
