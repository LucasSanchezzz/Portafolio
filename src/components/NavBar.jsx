import { Route, Routes, Link } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
  import { Label } from "@radix-ui/react-label"

import { Home } from "./Home"
import { Proyectoss } from "./Proyecctoss"
import { Card } from "./ui/card"


function ItemsNavbar({href,label,menu, descripcion, menuItems = []}){
    if (menu){
        return(
            <NavigationMenuItem>
            <NavigationMenuTrigger className="NavigationMenuTrigger border  py-0 px-1 md:px-5 h-5 text-base bg-transparent align-top">{label}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className="flex justify-center content-center">
                <Link to={href}><h2 className="font-semibold text-xl pt-3">Proyectos</h2></Link>
                </div>
                <ul>
                    {menuItems.map((item,index) =>(
                    <Card className="mt-3 mx-2">
                        <li className="List one" key={index}>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link className="py-3 Callout" to={item.href}>{item.label}</Link>
                            </NavigationMenuLink>
                            <Label className="font-thin text-gray-700">{item.descripcion}</Label>
                        </li>
                    </Card>
                    ))}
                </ul>
            </NavigationMenuContent>
            </NavigationMenuItem>
        )
    }
    else{
        return(
                <NavigationMenuList className="p-0 px-4 sm:px-5 h-5">
                        <NavigationMenuItem>
                        <NavigationMenuItem className="flex content-center"><Link to={href}>{label}</Link></NavigationMenuItem>
                        </NavigationMenuItem>
                </NavigationMenuList>
        )
    }
}

function ItemsFooter({label, href}){
    return(
        <li className="w-full"><Link to={href}><Label>{label}</Label></Link></li>
    )
}

export function NavBar (){
    return(
        <div>

        <NavigationMenu  className="grid grid-cols-2 [&>*]:flex bg-navBar py-6 text-white">
            <div className="w-screen">
            <ItemsNavbar
                label="Inicio"
                href="/"
                menu={false}
            />
            <ItemsNavbar
                label="Proyectos"
                href="/Proyectos"
                menu={true}
                menuItems={[
                    {
                        label: "Desarrollo Web",
                        descripcion:"Proyectos sobre desarollo web y las nuevas tecnologías que voy a prendiendo",
                        href: "/proyectos/web",
                    },
                    {
                        label: "Python",
                        descripcion:"Proyecyos de python que van desde la automaticación e procesos a la inteligencia artificial",
                        href: "/proyectos/python",
                    }]}
            />
            {/* <ItemsNavbar
                label="Sobre mi"
                href="/Sobre-mi"
                menu={false}
            /> */}
            </div>
            <div className="justify-end pr-0 md:pr-2">
            <ItemsNavbar
                label={<i class="fa-brands fa-linkedin"></i>}
                href="https://www.linkedin.com/in/lucas-sanchez-366780281"
                menu={false}
            />
            <ItemsNavbar
                label={<i class="fa-brands fa-codepen"></i>}
                href="https://codepen.io/ywueuing-the-lessful"
                menu={false}
            />
            </div>
        </NavigationMenu>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Proyectos" element={<Proyectoss/>}/>
        </Routes>
        <footer className="grid grid-cols-2 bg-navBar py-5 [&>*]:text-white">
            <ul className="flex flex-col content-around pl-10 xl:pl-20">
                <ItemsFooter
                    label="Inicio"
                    href="/"
                    />
                <ItemsFooter
                    label="Proyectos"
                    href="/Proyectos"
                    />
                <ItemsFooter
                    label="Sobre mi"
                    href="/Sobre-mi"
                    />
            </ul>
            <div className="pr-20 flex justify-end">
                <div className=" flex flex-col">
                <ItemsFooter
                label={<div><i class="fa-brands fa-linkedin pr-2"></i><Label>Linkedin</Label></div>}
                href="https://www.linkedin.com/in/lucas-sanchez-366780281"
                />
                <ItemsFooter
                label={<div><i class="fa-brands fa-codepen pr-2"></i><Label>Codepen</Label></div>}
                href="https://codepen.io/ywueuing-the-lessful"
                />
                </div>
            </div>
        </footer>
        </div>
    )
}