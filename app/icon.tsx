import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-static'
export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  const imageData = readFileSync(join(process.cwd(), 'public/profile.png'))
  const base64 = `data:image/png;base64,${imageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
          borderRadius: '50%',
          padding: '3px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={base64}
            width="64"
            height="64"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            alt=""
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
