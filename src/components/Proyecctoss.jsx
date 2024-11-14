import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
function CrearProyecto() {
  const listaProyectos = [
    {
    Nombre: "Proyecto1",
    Url: "/hola",
    Descripcion: "Hola este es mi proyecto",
    Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    Tecnologia: "Web",
    },
    {
    Nombre: "Proyecto2",
    Url: "/hola",
    Descripcion: "Hola este es mi proyecto",
    Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    Tecnologia: "Web",
    },
    {
    Nombre: "Proyecto3",
    Url: "/hola",
    Descripcion: "Hola este es mi proyecto",
    Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
    Tecnologia: "Web",
    },
    {
        Nombre: "Proyecto4",
        Url: "/hola",
        Descripcion: "Hola este es mi proyecto",
        Imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
        Tecnologia: "Web",
    },
    {
        Nombre: "Proyecto4",
        Url: "/hola",
        Descripcion: "Hola este es mi proyecto",
        Imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
        Tecnologia: "Python",
    },
    ];
    return (
        <div className="p-8 grid grid-rows-2 gap-16">
            <Carousel>
            <h2 className="font-semibold text-2xl">Proyectos Web</h2>
                <CarouselContent className="sm:[&>*]:basis-2/3 md:[&>*]:basis-1/3 px-10">
                    {listaProyectos
                        .filter(value => value.Tecnologia === "Web")
                        .map((value, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <a href={value.Url}>
                                        <CardHeader className="p-0">
                                            <img className="rounded-t-lg" src={value.Imagen} alt="Proyecto Web" />
                                        </CardHeader>
                                        <CardContent className="p-2">
                                            <CardTitle>{value.Nombre}</CardTitle>
                                            <CardDescription>{value.Descripcion}</CardDescription>
                                        </CardContent>
                                    </a>
                                </Card>
                            </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
    
            <Carousel >
            <h2 className="font-semibold text-2xl">Proyectos Python</h2>
                <CarouselContent className="sm:[&>*]:basis-2/3 md:[&>*]:basis-1/3 px-10">
                    {listaProyectos
                        .filter(value => value.Tecnologia === "Python")
                        .map((value, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <a href={value.Url}>
                                        <CardHeader className="p-0">
                                            <img className="rounded-t-lg" src={value.Imagen} alt="Proyecto Python" />
                                        </CardHeader>
                                        <CardContent className="p-2">
                                            <CardTitle>{value.Nombre}</CardTitle>
                                            <CardDescription>{value.Descripcion}</CardDescription>
                                        </CardContent>
                                    </a>
                                </Card>
                            </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
    
}


export function Proyectoss() {
    return (
        <CrearProyecto/>
    );
}
