"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "María González",
    role: "Ortodoncia Invisible",
    content: "Increíble experiencia desde el primer día. El equipo fue super atento y el tratamiento con alineadores pasó volando. Ahora sonrío con total confianza gracias a Odon.",
    rating: 5,
    initials: "MG"
  },
  {
    name: "Carlos Ruiz",
    role: "Diseño de Sonrisa",
    content: "Tenía terror al dentista hasta que conocí esta clínica. La tecnología que usan elimina el dolor y el resultado de mis carillas es simplemente espectacular y natural.",
    rating: 5,
    initials: "CR"
  },
  {
    name: "Ana Lucía T.",
    role: "Implantes Dentales",
    content: "Recuperé mi calidad de vida. El procedimiento de implantes fue mucho más sencillo de lo que imaginaba. Profesionales de primera y unas instalaciones impecables.",
    rating: 5,
    initials: "AL"
  },
  {
    name: "Jorge Méndez",
    role: "Blanqueamiento Láser",
    content: "Resultados inmediatos y sin sensibilidad. Me encantó la atención personalizada y cómo me explicaron cada paso. Definitivamente la mejor clínica de la ciudad.",
    rating: 5,
    initials: "JM"
  },
  {
    name: "Sofía Vergara",
    role: "Odontopediatría",
    content: "Llevé a mis hijos y quedaron encantados. El trato con los niños es maravilloso, tienen mucha paciencia y hacen que la visita sea divertida para ellos.",
    rating: 5,
    initials: "SV"
  }
]

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="testimonios" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Historias Reales</h2>
          <p className="text-muted-foreground text-lg">Pacientes que confiaron su sonrisa en nosotros</p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Gradients para efecto de desvanecimiento lateral */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-8"> {/* Added vertical padding for shadow */}
              {testimonials.map((t, index) => {
                const isActive = index === current

                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className={cn(
                      "transition-all duration-300 ease-out transform h-full p-2", // p-2 for internal spacing
                      isActive ? "scale-105 opacity-100 z-10" : "scale-90 opacity-50 grayscale-[0.5]" // Removed blur, added grayscale for contrast
                    )}>
                      <Card className={cn(
                        "border-none h-full relative overflow-hidden transition-shadow duration-300",
                        isActive ? "shadow-lg ring-1 ring-blue-100 bg-white" : "shadow-sm bg-slate-50/50"
                      )}>
                        <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-50/50 -rotate-12" />
                        
                        <CardContent className="flex flex-col gap-6 p-8 h-[320px] justify-between">
                          <div className="space-y-4">
                            <div className="flex gap-1">
                              {Array.from({ length: t.rating }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-500" />
                              ))}
                            </div>
                            <p className="text-slate-600 font-medium leading-relaxed line-clamp-4">
                              "{t.content}"
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-4 pt-4 border-t border-slate-100/50">
                            <Avatar className="h-10 w-10 border border-slate-100">
                              <AvatarImage src={`https://placehold.co/100x100/e2e8f0/1e293b?text=${t.initials}`} alt={t.name} />
                              <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-sm text-slate-900">{t.name}</p>
                              <p className="text-xs text-primary font-medium uppercase tracking-wide">{t.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:-left-12 bg-white hover:bg-white text-primary border-primary/20" />
            <CarouselNext className="right-4 md:-right-12 bg-white hover:bg-white text-primary border-primary/20" />
          </Carousel>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
               <button
                 key={index}
                 onClick={() => api?.scrollTo(index)}
                 className={cn(
                   "h-2 rounded-full transition-all duration-300",
                   current === index ? "w-8 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                 )}
               />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
