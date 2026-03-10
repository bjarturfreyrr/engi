import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1, "Nafn er nauðsynlegt.").max(200, "Nafn er of langt."),
  email: z.string().email("Ógilt netfang.").max(254, "Netfang er of langt."),
  subject: z.string().max(200, "Efni er of langt.").optional(),
  message: z.string().min(1, "Skilaboð eru nauðsynleg.").max(5000, "Skilaboð eru of löng."),
})

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const firstError = result.error.issues[0]
      const message = firstError?.message ?? "Ógild gögn."
      return NextResponse.json({ error: message }, { status: 400 })
    }

    const { name, email, subject, message } = result.data

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject || "Ekki tilgreint")
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f5; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                ✉️ Ný fyrirspurn
              </h1>
              <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.85); font-size: 14px;">
                Einhver hefur haft samband í gegnum vefsíðuna
              </p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Nafn</span>
                    <p style="margin: 6px 0 0 0; color: #111827; font-size: 16px; font-weight: 500;">${safeName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Netfang</span>
                    <p style="margin: 6px 0 0 0;"><a href="mailto:${safeEmail}" style="color: #2563eb; font-size: 16px; text-decoration: none;">${safeEmail}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Efni</span>
                    <p style="margin: 6px 0 0 0; color: #111827; font-size: 16px;">${safeSubject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 0;">
                    <span style="color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Skilaboð</span>
                    <div style="margin: 12px 0 0 0; padding: 20px; background-color: #f9fafb; border-radius: 8px; border-left: 4px solid #2563eb;">
                      <p style="margin: 0; color: #374151; font-size: 15px;">${safeMessage}</p>
                    </div>
                  </td>
                </tr>
              </table>
              <p style="margin: 32px 0 0 0; padding-top: 24px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 13px; text-align: center;">
                Svaraðu beint á þetta tölvupóst til að svara ${safeName}.
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Send frá vefsíðu Móar
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    const { data, error } = await resend.emails.send({
      from: 'Móar <moar@xn--mar-gna.is>',
      to: ['moar@xn--mar-gna.is'],
      replyTo: email,
      subject: subject || `Ný fyrirspurn frá ${name}`,
      html,
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
