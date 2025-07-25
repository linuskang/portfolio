import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Globe, FileText, ArrowUpRight, Cloud } from "lucide-react"

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 245 240"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M104.4 104.6c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.2 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
    <path d="M189.5 20h-134C39.6 20 20 39.6 20 63.5v113c0 23.9 19.6 43.5 43.5 43.5h113c23.9 0 43.5-19.6 43.5-43.5v-113C233 39.6 213.4 20 189.5 20zm-33.6 137s-3.1-3.7-5.7-7c11.3-3.2 15.6-10.2 15.6-10.2-3.6 2.4-7 4.1-10.1 5.2-4.4 1.9-8.6 3.1-12.7 3.9-8.4 1.6-16 1.2-22.7-.1-5-1-9.3-2.4-13-3.9-2-0.8-4.2-1.8-6.4-3.1-0.3-0.2-0.6-0.3-0.9-0.5-0.2-0.1-0.3-0.2-0.5-0.3-2.2-1.2-3.5-2.1-3.5-2.1s4.2 6.9 15.3 10.2c-2.6 3.3-5.8 7-5.8 7-19.2-0.6-26.5-13.2-26.5-13.2 0-28 12.5-50.7 12.5-50.7 12.5-9.3 24.4-9 24.4-9l0.9 1c-15.7 4.5-22.9 11.4-22.9 11.4s1.9-1.1 5.1-2.7c9.2-4.1 16.4-5.2 19.4-5.4 0.5-0.1 0.9-0.1 1.4-0.1 5-0.6 10.6-0.7 16.4-0.1 7.7 0.9 16 3.2 24.5 7.8 0 0-6.9-6.5-21.7-11l1.3-1.5s11.9-0.3 24.4 9c0 0 12.5 22.7 12.5 50.7 0 0-7.3 12.6-26.6 13.2z" />
  </svg>
)

const links = [
  {
    title: "Portfolio",
    url: "https://about.linus.id.au",
    icon: FileText,
    featured: false,
  },
  {
    title: "Blog",
    url: "https://linus.id.au/blog",
    icon: Globe,
    featured: false,
  },
  {
    title: "Whisp",
    url: "https://linus.id.au/whisp",
    icon: Cloud,
    featured: false,
  },
  {
    title: "GitHub",
    url: "https://linus.id.au/github",
    icon: Github,
    featured: false,
  },
  {
    title: "Discord",
    url: "https://linus.id.au/ds",
    icon: DiscordIcon,
    featured: false,
  },
  {
    title: "Email",
    url: "mailto:mail@linus.id.au",
    icon: Mail,
    featured: false,
  },
]

export default function LinktreePage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-md">
        <div className="text-center mb-12">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl w-32 h-32 mx-auto"></div>
            <Avatar className="w-28 h-28 mx-auto relative ring-2 ring-white/20 shadow-2xl">
              <AvatarImage src="/profile.png" alt="Profile Picture" />
              <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-white to-gray-300 text-black">
                LK
              </AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Linus Kang</h1>
          <p className="text-xl font-bold text-gray-300 mb-6 tracking-wide">Student & Full-Stack Developer</p>
          <p className="text-gray-400 font-medium leading-relaxed max-w-sm mx-auto">
            International FLL robotics award winning student & web developer from Australia!
          </p>
        </div>
        <div className="space-y-4">
          {links.map((link, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                link.featured
                  ? "bg-gradient-to-r from-white/10 to-white/5 border-white/20 hover:from-white/15 hover:to-white/10"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              } border backdrop-blur-sm`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-0 relative z-10">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-6 justify-start text-left hover:bg-transparent rounded-lg"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        link.featured
                          ? "bg-white text-black shadow-lg"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-white text-lg truncate tracking-wide">{link.title}</h3>
                        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 font-medium tracking-wide">
            Made with <span className="text-white">❤️</span> by Linus
          </p>
        </div>
      </div>
    </div>
  )
}