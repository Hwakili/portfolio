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
  url?: string
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
    url: 'https://www.sickleshield.com',
    bullets: [
      'Founded and lead a digital health organisation for sickle cell disease (SCD) management, now supporting 100+ warriors and families with crisis prevention tools, health education, and peer community.',
      'Designed and built the Sickle Shield app end-to-end: a native SwiftUI iOS app (crisis tracking with pain-trend history, medication reminders, medical report storage, and a live-location SOS flow) backed by a Node.js/Express/Prisma REST API.',
      'Security-hardened the backend as both founder and engineer — fixing IDOR vulnerabilities, removing hardcoded secrets, and correcting data-modelling flaws in crisis-logging — applying the same VAPT discipline from my day job to my own product.',
      'Drive product strategy, fundraising, and compliance (data protection for health records) as CEO, while writing the majority of the codebase myself.',
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
  'Health Tech & Product Engineering': [
    'SwiftUI (iOS)',
    'Node.js / Express / TypeScript',
    'Prisma / PostgreSQL',
    'REST API Design & JWT Auth',
    'Python',
    'Bash Scripting',
  ],
}

export const marqueeItems = [
  'Endpoint Security',
  'Penetration Testing',
  'Threat Hunting',
  'Microsoft Defender',
  'SwiftUI',
  'Node.js',
  'Prisma / PostgreSQL',
  'ISO/IEC 27005',
  'Azure AD / Entra ID',
  'Python',
  'Kali Linux',
  'Digital Health',
]

export const certifications = [
  'Jamf Certified Associate',
  'SOC Level 1 (TryHackMe)',
  'Certified in Cybersecurity (ISC2 CC)',
  'ITIL Foundation',
  'Cisco Cyber Threat Management',
  'ITXM Professional',
  'CompTIA Security+ (In Progress)',
  'CEH (In Progress)',
]

export const highlights = [
  { stat: '15+', label: 'High-risk vulnerabilities identified in VAPT engagements' },
  { stat: '100+', label: 'Warriors & families supported by Sickle Shield, the charity I founded and built' },
  { stat: '400+', label: 'Enterprise support requests resolved monthly' },
  { stat: 'Nat’l', label: 'Co-author on NIHR-backed research, presented at ASCAT 2026' },
]

export type ProjectEntry = {
  title: string
  period: string
  description: string
  tags: string[]
  category:
    | 'Security'
    | 'AI/ML'
    | 'Cryptography'
    | 'Forensics'
    | 'Systems'
    | 'Entrepreneurship'
    | 'Health Tech'
  link?: string
  homepage?: string
  source: 'GitHub' | 'Academic'
  featured?: boolean
}

export const projects: ProjectEntry[] = [
  {
    title: 'Sickle Shield — iOS App & Backend',
    period: '2026 – Present',
    description:
      'The product behind the charity I founded: a native SwiftUI companion app for people living with sickle cell disease, backed by a Node.js/Express/Prisma REST API. Crisis tracking with pain-trend history, medication reminders, medical report storage, and a live-location emergency SOS flow. I wrote the majority of the codebase and security-hardened the backend — fixing IDOR vulnerabilities and removing hardcoded secrets.',
    tags: ['SwiftUI', 'Node.js', 'Prisma', 'PostgreSQL', 'Security Hardening'],
    category: 'Health Tech',
    link: 'https://github.com/SickleShield-lab/sickle-shield-app',
    homepage: 'https://www.sickleshield.com',
    source: 'GitHub',
    featured: true,
  },
  {
    title: 'AI for Fraud Detection in Financial Transactions',
    period: '2026',
    description:
      'MSc dissertation developing and critically comparing AI models — Logistic Regression, Random Forest, XGBoost, and a custom ResNeXt-embedded GRU architecture — for detecting fraudulent card transactions under severe class imbalance, with explainability via SHAP/LIME and a focus on real-time deployment feasibility.',
    tags: ['Python', 'XGBoost', 'Deep Learning', 'SHAP/LIME'],
    category: 'AI/ML',
    link: 'https://github.com/Hwakili/ai-financial-fraud-detection',
    source: 'GitHub',
    featured: true,
  },
  {
    title: 'Secure Storage with ChaCha20-Poly1305',
    period: '2026',
    description:
      'Encrypted file/folder storage and backup system built on ChaCha20-Poly1305 authenticated encryption with X25519 asymmetric key exchange and HKDF/SHA-256 key derivation. Supports multi-user controlled key sharing, digital signatures, and an explicit tamper-detection test.',
    tags: ['Python', 'Cryptography', 'X25519', 'Digital Signatures'],
    category: 'Cryptography',
    link: 'https://github.com/Hwakili/ChaCha20_Poly1305-Secure-Storage',
    source: 'GitHub',
    featured: true,
  },
  {
    title: 'ISMS Risk Assessment Report (ISO/IEC 27005:2018)',
    period: '2023',
    description:
      'Built an Information Security Management System risk assessment for a simulated financial institution — asset identification, threat/risk analysis, and treatment planning — with incident response strategies to strengthen compliance and security culture.',
    tags: ['ISO/IEC 27005', 'Risk Assessment', 'Compliance'],
    category: 'Security',
    source: 'Academic',
  },
  {
    title: 'HackLab: Vulnix — Boot-to-Root Penetration Test',
    period: '2025',
    description:
      'Full penetration test of the Vulnix VulnHub machine: service enumeration, exploitation of NFS misconfigurations to gain an initial foothold, and privilege escalation to root — replicating real-world Linux attack paths end to end.',
    tags: ['Kali Linux', 'Enumeration', 'Privilege Escalation'],
    category: 'Security',
    link: 'https://github.com/Hwakili/Hacklab-Vulnix',
    source: 'GitHub',
  },
  {
    title: 'Penetration Test — Starlink / SpaceX Infrastructure',
    period: '2022',
    description:
      'Assessed the security posture of Starlink’s satellite internet infrastructure through network and system scans, exploit attempts against identified weaknesses, and a report of actionable hardening recommendations.',
    tags: ['VMware', 'Kali Linux', 'Network Security'],
    category: 'Security',
    source: 'Academic',
  },
  {
    title: 'Social Engineering — Credential Harvesting Simulation',
    period: '2025',
    description:
      'Simulated a phishing-based credential harvesting attack using the Social-Engineer Toolkit (SET) on Kali Linux, demonstrating how attackers exploit human trust and documenting the technique for defensive awareness training.',
    tags: ['Kali Linux', 'SET', 'Phishing'],
    category: 'Security',
    link: 'https://github.com/Hwakili/Social_Engineering',
    source: 'GitHub',
  },
  {
    title: 'Digital Forensics: Forensic Case Study Investigation',
    period: '2023',
    description:
      'Forensic analysis of a simulated cybercrime case — recovering deleted files, tracing data footprints, and identifying perpetrators using EnCase, Autopsy, VeraCrypt, OpenStego, Sonic Visualiser, and VMware — reported to professional evidentiary standards.',
    tags: ['EnCase', 'Autopsy', 'VeraCrypt'],
    category: 'Forensics',
    source: 'Academic',
  },
  {
    title: 'Dissertation: The Role of AI in Cyber Security',
    period: '2023',
    description:
      'BSc dissertation examining AI’s role in threat detection and automated defence, weighed against ethical concerns, data privacy, and adversarial AI risks — proposing strategies for safer AI-driven security systems.',
    tags: ['Academic Research', 'AI Ethics'],
    category: 'AI/ML',
    source: 'Academic',
  },
  {
    title: 'Double Error Correction — BCH(10,6)',
    period: '2022',
    description:
      'Python implementation of a BCH(10,6) error-correction codec: a generator that appends check digits to a codeword, and a decoder that detects and corrects single and double bit errors for data-integrity guarantees.',
    tags: ['Python', 'Error Correction', 'Algorithms'],
    category: 'Systems',
    source: 'Academic',
  },
  {
    title: 'Wister Wipers — Business Venture',
    period: '2022 – 2023',
    description:
      'Co-led an 8-month venture-building project from concept to investor pitch: a smartphone-controlled portable heater for older vehicles, including a working prototype, business model canvas, pitch deck, and final investor presentation.',
    tags: ['Product Strategy', 'Pitching', 'Prototyping'],
    category: 'Entrepreneurship',
    source: 'Academic',
  },
]
