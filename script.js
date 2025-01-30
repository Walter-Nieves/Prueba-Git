document.querySelector("img").addEventListener("click",

    ()=>alert("javascript")
)

///crear repositorio
// git init

//configuraciones
//nombre para todo el pc
// git config --global user.name "nombre"

//nombre solo para la carpeta
// git config user.name "nombre"

//correo para todo el pc
// git config --global user.email "correo"

//nombre solo para la carpeta
// git config user.email "correo"

//ver configuraciones
// git config --list --local

//agregar archivo(s) al stagging area (listos para commit)
// git add "archivo"
// git add .

//ver como estan los archivos (agregados, modificados, borrados, etc)
// git status

//hacer commit (guardar cambios con un nombre o frase descriptiva)
// git commit -m "comentario"

//ver todos mis commits
// git log

//cambiar nombre de rama actual
// git branch -M nuevo-nombre-chuzo

//crear origen que es el enlace a mi repositorio e github
// git remote add "nombre-origen" "link.git"

//guardar cambios en mi repositorio en la nube (-u para no configurar otra vez)
// git push -u "nombre-origen" "nombre-rama"

//subir cambios al repositorio en la nube (ya configurado)
// git push