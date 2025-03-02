'use client'
import {
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  KeyOutlined,
  QuestionCircleFilled,
} from '@ant-design/icons'

import type { ProSettings } from '@ant-design/pro-components'
import { ProConfigProvider } from '@ant-design/pro-components'
import { Avatar, Dropdown, Popover, Select } from 'antd'
import React, { useMemo, useState } from 'react'
import { route, appList } from '@/config'
import dynamic from 'next/dynamic'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronsUpDown } from 'lucide-react'
import { HappyProvider } from '@ant-design/happy-work-theme'

const ProLayout = dynamic(
  async () => (await import('@ant-design/pro-components')).ProLayout,
  {
    ssr: false,
  },
)

export default function RootTemplate({ children }: React.PropsWithChildren) {
  const pathname = usePathname()

  return (
    <HappyProvider>
      <ProConfigProvider hashed={false}>
        <ProLayout
          logo="/favicon.svg"
          route={route()}
          appList={appList}
          headerTitleRender={(logo, title) => (
            <>
              <Link href="/projects">
                {logo}
                {title}
              </Link>
            </>
          )}
          location={{
            pathname,
          }}
          siderWidth={280}
          avatarProps={{
            render: () => {
              return <Avatar src="https://ui.shadcn.com/avatars/shadcn.jpg" />
            },
          }}
          title="DraftApi"
          actionsRender={(props) => [
            <QuestionCircleFilled key="QuestionCircleFilled" />,
          ]}
          onMenuHeaderClick={(e) => console.log(e)}
          menuItemRender={(item, children) => (
            <Link href={item.path || '/'}>{children}</Link>
          )}
          fixSiderbar
          layout={'mix'}
          className="h-screen"
        >
          {children}
        </ProLayout>
      </ProConfigProvider>
    </HappyProvider>
  )
}
