## DataVerse - Mentes de la Programación

## Introducción
¡Bienvenidos a DataVerse - Mentes de la Programación! En este proyecto, exploramos el fascinante mundo de la creación de lenguajes de programación a través de 24 tarjetas dedicadas a 24 creadores destacados. Utilizando tecnologías como HTML, JavaScript y CSS, hemos creado una experiencia interactiva para conocer más sobre los genios detrás de los lenguajes que usamos a diario.
 ### Criterios del proyecto
 
 En los criterios del proyecto tenemos una serie de pasos a seguir para poder formular nuestro proyecto.

 ### Historias de usuari@
  Aqui nos basamos en lo que el usuari@ desea ver en la pagina web:
 
 ### Primera historia de usuari@
 Yo como usuaria de Data_Verse quiero ver personas importantes en el ambito de la programacion para conocer informacion relevante
 ![capture_240426_044835](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/be034759-925b-4e5c-bd77-3b944c376315)

 
 ### Segunda historia de ususari@
 Yo como usuaria de el proyecto de Data_Verse  quiero filtrar por las empresas que usan los lenguajes de programacion.
 ![capture_240426_045042](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/560384bf-3081-4d00-91c2-13fcf13969e0)

 
 ### Tercera hiatoria de ussuaria@
 Como usuaria del proyecto Data_Verse quiero ver en orden alfabetico ls 24 lenguajes.
![3HU](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/2c8880de-45fc-4031-96ca-e6ab5ed81f70)

 
 ### Cuarta historia de usuari@
 Como usuaria de Data-verse, deseo ver un calculo estadístico en este caso ,cuantos de los 24 lenguajes ingresados son usados para backend y cuantos para frontend.
 
 ![4HU](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/8f0da5fd-a798-42d2-afeb-1f6f1a42a224)

 
 ### Quinta historia de usuari@
 Como usuaria deseo ver un boton que reestablezca las busquedas realizadas en la pagina web, retornando a la data inicial.
 ![5HU](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/2be1f84d-b5c7-4a7e-a6d6-058bc457af93)

 

 ## Generacion de datos (dataset)
 En nuestro proyecto, con la ayuda de la inteligencia artificial, en este caso Chatgot generaremos la data .

Esta data la guardaremos en un archivo javascript. Este archivo, debe exportar un arreglo con 24 objetos. Y la estructura de cada objeto debe ser la siguiente:

id: Identificador único (no pueden haber dos elementos con el mismo id). Debe ser un string de no más de 32 caracteres, en minúscula, compuesto solo por letras, números, underscore (_) o guión (-). Por ejemplo: "ada-lovelace".

name: El nombre del personaje, país, película, etc.

shortDescription: Descripción corta del elemento. Esta descripción deberá tener como máximo 20 palabras.

description: Descripción extendida del elemento. Esta descripción deberá tener entre 80 y 100 palabras. Al momento de mostrar este dato en pantalla puedes truncarlo para que no ocupe tanto espacio.

imageUrl: URL de la imagen. Esta imagen será generada a través de alguna herramienta basada en inteligencia artificial. Una vez generada la imagen, y guardada en tu repo, deberás agregar la URL en este campo.

facts: Un objeto con al menos 3 "hechos" o "info" sobre este elemento, en formato "nombre": "valor"

y mostramos los resultados:

![capture_240426_041554](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/152c54a2-5081-4dfa-9688-bd56e0dff19c)


![capture_240426_041554](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/914e7957-9ac1-4a74-b8c1-1d7005d7b576)

Nos aseguramos que las URLs de las imagenes dentro del archivo javascript, deben enlazar a las imágenes para cada elemento del array. Estas imágenes pueden ser generadas por la inteligencia artificial o imágenes que puedas encontrar en la web, en este caso de la web.

** Una vez que tengamos el archivo javascript completo,corremos los test con npm run test para verificar que el archivo esté cumpliendo con lo solicitado.

### Test de prompting 

Nos aseguramos  de verificar con los tests ejecutando npm run test:oas-prompting para garantizar que el archivo de datos generado cumple con los requisitos especificados.

![test de prompting](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/0eb36cf2-0ee2-4342-a072-8e09fbf97b5c)


## Diseño de la Interfaz de Usuaria

## Prototipo de alta fidelidad
En esta ocasion usamos FIGMA.

### Prototipo para notebook:

![capture_240426_043330](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/e8d88d07-d06a-497c-ab73-ef8358488331)

### Prototipo para movil:

![capture_240426_043347](https://github.com/Famelzulo/DEV014-Dataverse/assets/126844509/3442a2bc-d2ac-454b-8771-5788bdaff050)






## Funcionalidades

### 1. Filtrado por Empresas
Google
Amazon
NASA
Otras
### 2. Categorización
Tipados
No Tipados
Turing Completo
### 3. Ordenación
Ascendente
Descendente
### 4. Estadísticas
Promedio de Lenguajes para Backend y Frontend en Porcentajes
### 5. Limpieza de Búsquedas

Demostración
Vamos a sumergirnos en una demostración de cómo funciona DataVerse. [Demo en Vivo]

### Beneficios
Exploración Educativa: Aprende sobre los pioneros de la programación.
Funcionalidad Interactiva: Filtra, ordena y analiza los datos a tu manera.
Estadísticas Útiles: Obtén información valiosa sobre el uso de lenguajes.
## Conclusión
DataVerse - Mentes de la Programación es más que una colección estática de información; es una herramienta poderosa para explorar el pasado, presente y futuro de la programación. ¡Únete a nosotros y descubre el fascinante mundo de los creadores de lenguajes de programación!
