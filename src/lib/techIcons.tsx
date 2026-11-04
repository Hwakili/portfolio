import {
  SiExpress,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiJsonwebtokens,
  SiKalilinux,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiSplunk,
  SiSwift,
  SiTerraform,
  SiTypescript,
  SiWireshark,
} from '@icons-pack/react-simple-icons'
import type { ComponentType } from 'react'

type IconProps = { size?: number; className?: string }

const techIconMap: Record<string, ComponentType<IconProps>> = {
  'SwiftUI': SiSwift,
  'SwiftUI (iOS)': SiSwift,
  'Swift': SiSwift,
  'Node.js': SiNodedotjs,
  'Node.js / Express / TypeScript': SiNodedotjs,
  'Express': SiExpress,
  'Python': SiPython,
  'PostgreSQL': SiPostgresql,
  'Prisma / PostgreSQL': SiPostgresql,
  'Prisma': SiPrisma,
  'Terraform': SiTerraform,
  'Infrastructure as Code': SiTerraform,
  'Infrastructure as Code (Terraform)': SiTerraform,
  'GCP': SiGooglecloud,
  'Google Cloud Platform (GCP)': SiGooglecloud,
  'TypeScript': SiTypescript,
  'REST API Design & JWT Auth': SiJsonwebtokens,
  'Go': SiGo,
  'Kali Linux': SiKalilinux,
  'Splunk': SiSplunk,
  'Wireshark': SiWireshark,
  'GitHub': SiGithub,
}

export function getTechIcon(label: string): ComponentType<IconProps> | undefined {
  return techIconMap[label]
}
