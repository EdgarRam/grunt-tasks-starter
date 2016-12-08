# grunt-tasks-starter

Kit de inicialización de tareas de grunt para proyectos de front-end. Este
repositorio está pensado para que se pueda descargar y ponerse a funcionar sin
ninguna complicación.

### dependencias

- nodejs 4.0+
- npm 3.10.8+
- grunt-cli 1.2.0+
- bower 1.8.0+

### estructuración

#### directorio src

En este directorio se podrán almacenar todas las aplicaciones que sean
necesarias para el sistema que se tenga que construir.

#### directorio build

Build es el directorio en donde se mantiene la compilación durante el desarrollo
es en donde se tendrán todas las compilaciones y donde el servidor tendrá
su `RootDirectory`.

#### directorio dist

El directorio `dist` es en donde se obtendrá la compilación final del sistema. En
este directorio podrán encontrar los archivos minimisados, concatenados y listos
para poder subirlos a producción.

### construcción

Para la compilación existen 3 fases:

#### 1.- instalación

Esta fase es la más sencilla de todas, solo hace falta una conexión a internet
y ejecutar el siguiente comando:

```bash
npm install
```
Este comando ejecutara el script `npm build` la cual dejará el sistema
construido y con todas las dependencias listas para ser usadas en cualquier
parte.


#### 2 .- desasrrollo

Se cuenta con una tarea especializada para la construcción de la aplicación la
cual se encargará de mantener siempre actualizada la aplicación por medio del
navegador.

Para entrar en modo desarrollo se tiene que ejecutar el siguiente comando:

```bash
npm dev
```
Este comando lanzará las tareas necesarias para que se pueda realizar cualquier
modificación a cualquier parte de los archivo y que en automático se compilen
y se actualice el navegador en donde se está visualizando el sistema.


#### 3 .- producción

Esta hace lo mismo que `npm dev` pero con la pequeña diferencia de que no deja
funcionando un _watcher_ que esté escuchando los cambios en los archivos, Esta
solo se encarga de construir todo y dejar los archivos listos para subirlos
al servidor de producción. Para poder realizar esta tareas sólo será necesario
ejecutar el siguiente comando:

```bash
npm dist
```
