import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nafn, netfang og skilaboð eru nauðsynleg." },
        { status: 400 }
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
    const toEmail = process.env.CONTACT_EMAIL || "eingi@eingi.is"

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['moar@xn--mar-gna.is'],
      replyTo: email,
      subject: subject || `Ný fyrirspurn frá ${name}`,
      html: `
        <h2>Ný fyrirspurn frá vefsíðunni</h2>
        <p><strong>Nafn:</strong> ${name}</p>
        <p><strong>Netfang:</strong> ${email}</p>
        <p><strong>Efni:</strong> ${subject || "Ekki tilgreint"}</p>
        <p><strong>Skilaboð:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur." },
      { status: 500 }
    )
  }
}
