import {Link } from "react-router-dom"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { Textarea } from "@/components/ui/textarea"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import { Button } from "./ui/button";
  import imagenLucas from "/src/assets/images/Foto-Lucas.jpg";
  import previewCalculadora from "/src/assets/images/Calculadora-web.jpg";
  import previewLogin from "/src/assets/images/Login-register.jpg";

function CrearProyectos({imagen,nombre,info, url}){
  return(
    <CarouselItem className="[&>*]:border-2 [&>*]:border-black">
      <Card className="h-full">
      <a href={url}>
        <CardHeader className="p-0">
          <img className="rounded-t-lg" src={imagen} alt="Proyecto" />
        </CardHeader>
        <CardContent className="p-2">
          <CardTitle>{nombre}</CardTitle>
          <CardDescription>{info}</CardDescription>
        </CardContent>
      </a>
    </Card>
    </CarouselItem>
  )
}

  export function Home(){
    return(
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:py-5 md:px-10 p-5">
        <div className="pr-10 content-center justify-center">
        <h2 className="font-bold text-2xl">¡Hola, soy Lucas!</h2>
        <p className="font-thin text-xl">Mi nombre es Lucas Sanchez, soy estudiante del colegio Tomas Alva Edison, especializado en Robótica y Programación.</p>
        </div>
        <div className="w-full flex py-2 justify-center sm:p-0 sm:justify-end">
        <img className="object-cover object-center w-72 xl:w-72 h-auto p-0 md:pr-10" src={imagenLucas} alt="Foto mía" />
        </div>
      </div>
      <div className="py-5 bg-homeCarrusel px-4">
      <Carousel>
      <CarouselContent className="sm:[&>*]:basis-2/3 md:[&>*]:basis-1/3">
        <CrearProyectos 
            imagen={previewCalculadora} 
            nombre="Calculadora web" 
            info="Hice una calculadora web usando HTML y JavaScript."
            url=""
            />
        <CrearProyectos 
          imagen={previewLogin}
          nombre="Login-register" 
          info="Hice una pagina de login usando HTML, JavaScript y PHP"
          url=""
          />
        <CarouselItem><Link className="[&>*]:border-2 [&>*]:border-black" to="/proyectos"><Card className="h-full flex justify-center bg-slate-200"><p className="inline content-center font-semibold text-sm text-center md:text-xl">Ver más proyecos</p></Card></Link></CarouselItem>
      </CarouselContent>
    </Carousel>
      </div>
      <div className="flex content-center justify-center py-5 md:px-5">
      <form name="Formulario-contacto" method="POST" data-netlify="true" onSubmit="submit" className="px-5 w-full max-w-3xl md:max-w-2.5xl lg:max-w-5xl 2xl:max-w-7xl">
        <Card className="pl-5 md:w-[calc(100vw-15rem)] xl:w-[calc(100vw-30rem)] 2xl:w-[calc(100vw-45rem)]">
                <CardHeader>
                    <h2 className="font-bold text-2xl">Envia un correo</h2>
                </CardHeader>
                <CardContent className="block pr-0">
                    <Label for="name"><h3 className="text-left">Nombre:</h3></Label>
                    <Input required type="text" name="name" className="mt-2 w-2/3"/>
                    <Label for="mail"><h3 className="text-left mt-5">Correo electronico</h3></Label>
                    <Input required type="email" name="email" className="mt-2 w-2/3" placeholder="m@example.com"/>
                    <Label for="msg"><h3 className="text-left mt-5">Mensaje</h3></Label>
                    <Textarea required id="msg" name="mensaje_usuario" className="resize-none mt-2 w-3/4"/>
                    <Button type="submit" className="px-2/3 mt-4 w-4/5">Enviar</Button>
                </CardContent>
          </Card>
        </form>
      </div>
      </div>
    )
  }