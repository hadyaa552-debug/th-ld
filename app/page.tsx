import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectKukun from "@/components/project-kukun"
import ProjectArmonia from "@/components/project-armonia"
import ProjectIlBayou from "@/components/project-ilbayou"
import ContactForm from "@/components/contact-form"
import AboutDeveloper from "@/components/about-developer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectArmonia />
      <ProjectKukun />
      <ProjectIlBayou />

      <section id="contact" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">تواصل معنا</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">نحن هنا لمساعدتك</h2>
            <p className="text-muted-foreground">سجل اهتمامك وسيتواصل معك فريقنا في أقرب وقت</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-right space-y-6">
              <div>
                <p className="text-muted-foreground text-sm mb-1">هاتف</p>
                <a href="tel:+201004791004" className="text-primary text-2xl font-bold hover:underline">01004791004</a>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Armonia", location: "R7 – العاصمة الإدارية الجديدة" },
                  { name: "Kukun", location: "مدينة المستقبل – القاهرة الجديدة" },
                  { name: "Il Bayou", location: "سهل حشيش – الغردقة" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-border">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.location}</p>
                    </div>
                    <div className="w-2 h-2 bg-primary flex-shrink-0 mr-auto" />
                  </div>
                ))}
              </div>
            </div>
            <div><ContactForm /></div>
          </div>
        </div>
      </section>

      <AboutDeveloper />
      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
