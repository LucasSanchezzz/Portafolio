import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import 'boxicons';
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import previewCalculadora from "/src/assets/images/Calculadora-web.jpg";
  import previewLogin from "/src/assets/images/Login-register.jpg";
  
  export function Proyectoss() {
    const listaTecnologias = [
      { Nombre: "SQL", Icono: "postgresql" },
      { Nombre: "HTML", Icono: "html5" },
      { Nombre: "JavaScript", Icono: "javascript" },
      { Nombre: "PHP", Icono: "php" },
      { Nombre: "CSS", Icono: "css3" },
      { Nombre: "React", Icono: "react" },
      { Nombre: "Python", Icono: "python" },
      { Nombre: "Tailwind", Icono: "tailwind-css" },
      { Nombre: "Shadcn", Icono: "shadcn-icono" },
      { Nombre: "Excel", Icono: "table" },
    ];
  
    const listaProyectos = [
      {
        Nombre: "Calculadora web",
        Url: "https://codepen.io/ywueuing-the-lessful/pen/JjVZPzX",
        Descripcion: "En este proyecto hice una calculadora web usando HTML y JavaScript",
        Imagen: previewCalculadora,
        Tecnologia: "Web",
        TecnologiasUsadas: ["HTML", "CSS", "JavaScript"],
      },
      {
        Nombre: "Login-Register",
        Url: "/Proyectos",
        Descripcion: "Estoy creando una página de login usando HTML, JavaScript, SQL y PHP",
        Imagen: previewLogin,
        Tecnologia: "Web",
        TecnologiasUsadas: ["HTML", "CSS", "SQL", "PHP"],
      },
      {
        Nombre: "Proyecto3",
        Url: "/Proyectos",
        Descripcion: "Esta es una preview de mi proyecto",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
        Tecnologia: "Web",
        TecnologiasUsadas: ["HTML", "Tailwind", "React"],
      },
      {
        Nombre: "Proyecto Python",
        Url: "/Proyectos",
        Descripcion: "Esta es la preview mi proyecto con Python",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4pr56KVkeusifio7Vp-f2320fy46LrDpBw&s",
        Tecnologia: "Python",
        TecnologiasUsadas: ["Python", "SQL"],
      },
    ];
  
    const renderTecnologias = (tecnologias) => (
      <div className="flex flex-wrap gap-2 mt-2">
        {tecnologias.map((nombreTec, index) => {
          const tecnologia = listaTecnologias.find((tec) => tec.Nombre === nombreTec);
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-1 border rounded-md text-sm">
            <box-icon type='logo' name={tecnologia?.Icono}></box-icon>
            <p className="text-black">{tecnologia?.Nombre}</p>
            </div>
          );
        })}
      </div>
    );
  
    const renderProyectos = (categoria) => (
      <Carousel>
        <h2 className="font-semibold text-2xl pb-5">
          {categoria === "Web" ? "Proyectos Web" : "Proyectos Python"}
        </h2>
        <CarouselContent className="sm:[&>*]:basis-2/3 md:[&>*]:basis-1/3 px-10">
          {listaProyectos
            .filter((proyecto) => proyecto.Tecnologia === categoria)
            .map((proyecto, index) => (
              <CarouselItem key={index}>
                <Card>
                  <a href={proyecto.Url}>
                    <CardHeader className="p-0">
                      <img
                        className="rounded-t-lg h-44"
                        src={proyecto.Imagen}
                        alt={proyecto.Nombre}
                      />
                    </CardHeader>
                    <CardContent className="p-2">
                      <CardTitle className="py-1">{proyecto.Nombre}</CardTitle>
                      <CardDescription>{proyecto.Descripcion}</CardDescription>
                      {renderTecnologias(proyecto.TecnologiasUsadas)}
                    </CardContent>
                  </a>
                </Card>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    );
  
    return (
      <div className="p-8 grid grid-rows-2 gap-16">
        {renderProyectos("Web")}
        {renderProyectos("Python")}
      </div>
    );
  }
  