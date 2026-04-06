"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: "", phone: "", project: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch("https://formsubmit.co/ajax/ertqaacapitalcom@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          "المشروع المهتم به": formData.project || "لم يتم تحديده",
          _subject: "استفسار جديد – TLD The Land Developers",
          _captcha: "false",
          _template: "table",
          
        }),
      })
      if (response.ok) {
        toast({ title: "تم الإرسال بنجاح!", description: "سنتواصل معك في أقرب وقت ممكن" })
        setFormData({ name: "", phone: "", project: "" })
      } else throw new Error("Failed")
    } catch {
      toast({ title: "حدث خطأ", description: "يرجى المحاولة مرة أخرى", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card id="contact" className="shadow-2xl border-0 bg-card my-0">
      <CardHeader className="pb-0 space-y-0">
        <CardTitle className="text-2xl font-bold text-foreground my-0 text-center">احجز استشارة</CardTitle>
      </CardHeader>
      <CardContent className="my-0">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input placeholder="الاسم الكامل *" value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required className="text-right h-11 text-sm" />
          <Input type="tel" placeholder="رقم الهاتف *"
            value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required className="text-right h-11 text-sm" dir="ltr" />
          <Select value={formData.project} onValueChange={(v) => setFormData({ ...formData, project: v })} required>
            <SelectTrigger className="text-right h-11 text-sm w-full">
              <SelectValue placeholder="المشروع المهتم به *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kukun">Kukun – مدينة المستقبل</SelectItem>
              <SelectItem value="Armonia">Armonia – العاصمة الإدارية</SelectItem>
              <SelectItem value="Il Bayou">Il Bayou – سهل حشيش</SelectItem>
              <SelectItem value="أكثر من مشروع">أكثر من مشروع</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-base h-12" size="lg" disabled={loading}>
            {loading ? "جاري الإرسال..." : "إرسال الطلب"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
