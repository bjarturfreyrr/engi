import type { CSSProperties } from "react"

// Seinkun á hleðsluhreyfingu, lesin af `--d` í ny.css
export const delay = (d: string, style?: CSSProperties) =>
  ({ ...style, "--d": d }) as CSSProperties
