'use client'
import 'animate.css'
import '~/styles/main.css'
import React from 'react'
import { App, ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={enUS}>
        <html lang="en">
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <body className="h-screen">
            <App>{children}</App>
          </body>
        </html>
      </ConfigProvider>
    </QueryClientProvider>
  )
}
