import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const listaProyecctos =[
    {
        Nombre:"Proyecto1",
        Url:"/hola",
        Descripcion:"Hola este es mi proyecto",
        Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    },
    {
        Nombre:"Proyecto2",
        Url:"/hola",
        Descripcion:"Hola este es mi proyecto",
        Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    },
    {
        Nombre:"Proyecto3",
        Url:"/hola",
        Descripcion:"Hola este es mi proyecto",
        Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    },
    {
        Nombre:"Proyecto4",
        Url:"/hola",
        Descripcion:"Hola este es mi proyecto",
        Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    },
]

export function Proyectoss(){
    return(
        <section>
        <h2 className="text-4xl font-medium">Proyectos web</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 p-2">
            {
                listaProyecctos.map((value,index)=>{
                    return(
                    <Card className="h-full" key={index}>
                        <a href={value.Url}>
                            <CardHeader className="p-0">
                            <img className="rounded-t-lg" src={value.Imagen} alt="Proyecto" />
                            </CardHeader>
                            <CardContent className="p-2">
                            <CardTitle>{value.Nombre}</CardTitle>
                            <CardDescription>{value.Descripcion}</CardDescription>
                            </CardContent>
                        </a>
                    </Card>
                )})
            }
        </div>
        </section>

    )
}