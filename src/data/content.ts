export const profile = {
  name: 'Hamza Wakili',
  title: 'Cybersecurity Engineer & Digital Health Founder',
  tagline:
    'Securing enterprise infrastructure by day, building MedTech for sickle cell patients by calling.',
  location: 'United Kingdom',
  email: 'Hamza.Wakili@outlook.com',
  phone: '+44 7577 637432',
  github: 'https://github.com/Hwakili',
  linkedin: 'https://www.linkedin.com/in/hamza-w-97577a139/',
  summary:
    'Cybersecurity engineer specialising in endpoint security and enterprise infrastructure, currently protecting a major UK bank’s device estate. Alongside that, I founded and run Sickle Shield, a registered UK charity building digital health tools for sickle cell patients — and I contribute as a technical co-author to national NIHR research on sickle cell care.',
}

export type ExperienceEntry = {
  role: string
  org: string
  period: string
  bullets: string[]
  current?: boolean
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Unified Endpoint / Security Engineer',
    org: 'Chief Security Office (CSO), Lloyds Banking Group',
    period: 'July 2026 – Present',
    current: true,
    bullets: [
      'Secure and manage enterprise infrastructure and endpoint security controls across the organisation’s device estate.',
      'Utilise Microsoft enterprise security architectures — Microsoft Defender for Endpoint, Microsoft Intune, and Microsoft Entra ID (Azure AD) — to enforce security baselines and access controls.',
      'Collaborate within the CSO to improve overall organisational security posture and deploy proactive endpoint protection measures.',
    ],
  },
  {
    role: 'Founder & CEO',
    org: 'Sickle Shield (Registered UK Charity / CIO)',
    period: '2026 – Present',
    current: true,
    bullets: [
      'Lead the end-to-end strategic and technical direction of a digital health organisation focused on sickle cell disease management.',
      'Engineered and architected a mobile patient-management application for symptom tracking and a specialised drug analysis web application to analyse treatment interactions.',
      'Drive product development cycles, secure system architecture, and manage compliance frameworks for digital health deployment.',
    ],
  },
  {
    role: 'Cyber Security Analyst (VAPT)',
    org: 'Klemweb (Internship)',
    period: 'May 2025 – July 2025',
    bullets: [
      'Conducted Vulnerability and Penetration Testing on web apps and networks, identifying 15+ high-risk vulnerabilities.',
      'Conducted threat hunting and analysis using Microsoft Defender Advanced Threat Protection (ATP), investigating endpoint behaviour and producing actionable security reports for stakeholders.',
      'Assisted in red team exercises using Splunk and Kali Linux tools.',
    ],
  },
  {
    role: 'Graduate IT & Technical Roles',
    org: 'Apple & Computacenter',
    period: 'October 2023 – October 2025',
    bullets: [
      'Technical Support Specialist (Apple) and IT Analyst (Computacenter) managing enterprise operating systems, hardware diagnostics, and IT service management (ITSM).',
      'Handled 400+ support requests monthly and managed Active Directory accounts across multiple client sites.',
      'Built foundational experience in threat exposure, user access management, and hardware/software security protocols.',
    ],
  },
]

export type ResearchEntry = {
  role: string
  org: string
  period: string
  bullets: string[]
}

export const research: ResearchEntry[] = [
  {
    role: 'Patient and Public Involvement (PPIE) Contributor & Co-Author',
    org: 'National Institute for Health and Care Research (NIHR) & The University of Manchester',
    period: 'March 2026 – Present',
    bullets: [
      'Act as technical advisor and co-author on the national study "Sickle Cell Voices for Healthcare Transition."',
      'Co-designed the "Wheel of Culture" systems framework to guide NHS transition research.',
      'Co-authored research outputs selected and presented at the ASCAT 2026 Conference (21st Annual Sickle Cell & Thalassaemia Conference) in London.',
    ],
  },
]

export const education = [
  {
    degree: 'MSc Cyber',
    org: 'Manchester Metropolitan University, Manchester',
    period: 'September 2025 – July 2027',
  },
  {
    degree: 'BSc Cyber Security and Digital Forensics (2:1)',
    org: 'University of the West of England, Bristol',
    period: 'September 2021 – July 2023',
  },
]

export const skills = {
  'Security Architecture': [
    'Endpoint Security Engineering',
    'Vulnerability Assessment (VAPT)',
    'DevSecOps',
    'Threat Hunting',
  ],
  'Enterprise Tooling': [
    'Microsoft Defender for Endpoint',
    'Microsoft Intune',
    'Azure AD / Entra ID',
    'IAM',
    'Active Directory',
  ],
  'Security & Analysis': [
    'SIEM',
    'Splunk',
    'Wireshark',
    'Kali Linux',
    'Nmap',
    'ISO/IEC 27005 Risk Assessment',
  ],
  'Product Engineering': [
    'Full-stack Web/Mobile Architecture',
    'System Design',
    'Secure Data Management',
    'Python',
    'Bash Scripting',
  ],
}

export const certifications = [
  'ISC2 CC',
  'CompTIA Security+ (Ongoing)',
  'CEH (Ongoing)',
  'CompTIA A+',
  'ITIL Foundation',
  'Cisco Cyber Threat Management',
  'Google IT Support Fundamentals',
  'Microsoft Office Specialist',
]
