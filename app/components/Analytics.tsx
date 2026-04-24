export function Analytics() {
  // Replace G-XXXXXXXXXX with your actual Google Analytics 4 Measurement ID
  // Get it from: https://analytics.google.com → Property Settings → Data Streams
  const measurementId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

  return (
    <>
      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
