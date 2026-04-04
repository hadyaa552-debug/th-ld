import { Building2, Users, Award, MapPin } from "lucide-react"

export default function AboutDeveloper() {
  const stats = [
    { icon: Building2, number: "3+", label: "مشاريع نشطة" },
    { icon: MapPin, number: "3", label: "مواقع استراتيجية" },
    { icon: Users, number: "14.5B", label: "حجم الاستثمارات EGP" },
    { icon: Award, number: "2006", label: "سنة التأسيس" },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">عن المطور</h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Land Developers (TLD) تأسست عام ٢٠٠٦ برؤية واضحة لتغيير معادلة التطوير العقاري في مصر، مستندةً إلى خبرة تمتد لأكثر من ٣٠ عاماً في قطاعات الضيافة والسياحة والتجزئة والعقارات. حازت على جائزة "أفضل عقار العام" 2025 عن مشروع Kukun.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10">
                  <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
