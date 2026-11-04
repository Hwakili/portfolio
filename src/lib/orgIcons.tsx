import { SiApple } from '@icons-pack/react-simple-icons'
import type { ComponentType } from 'react'

type IconProps = { size?: number; className?: string }

const orgIconMap: [match: RegExp, Icon: ComponentType<IconProps>][] = [[/apple/i, SiApple]]

export function getOrgIcon(name: string): ComponentType<IconProps> | undefined {
  const hit = orgIconMap.find(([re]) => re.test(name))
  return hit?.[1]
}
