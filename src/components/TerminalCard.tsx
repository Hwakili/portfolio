import { motion } from 'framer-motion'

const Key = ({ children }: { children: string }) => (
  <span className="text-[#38bdf8]">{children}</span>
)
const Str = ({ children }: { children: string }) => (
  <span className="text-accent">'{children}'</span>
)
const Kw = ({ children }: { children: string }) => (
  <span className="text-[#c084fc]">{children}</span>
)
const Bool = ({ children }: { children: string }) => (
  <span className="text-[#fb923c]">{children}</span>
)
const Com = ({ children }: { children: string }) => (
  <span className="text-text-muted">{children}</span>
)

export function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-text-muted">whoami.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <code>
          <Kw>const</Kw> engineer = {'{'}
          {'\n'}  <Key>name</Key>: <Str>Hamza Wakili</Str>,
          {'\n'}  <Key>role</Key>: <Str>Security Engineer</Str>,
          {'\n'}  <Key>venture</Key>: <Str>Sickle Shield</Str>,
          {'\n'}  <Key>stack</Key>: [<Str>SwiftUI</Str>, <Str>Node.js</Str>, <Str>Python</Str>],
          {'\n'}  <Key>foundedCharity</Key>: <Bool>true</Bool>,
          {'\n'}  <Key>nihrCoAuthor</Key>: <Bool>true</Bool>,
          {'\n'}  <Key>vulnerabilitiesFound</Key>: <span className="text-[#fb923c]">15</span>,
          {'\n'}
          {'\n'}  <Key>isExceptionalTalent</Key>: <Kw>function</Kw>() {'{'}
          {'\n'}    <Com>// still counting</Com>
          {'\n'}    <Kw>return</Kw> <Bool>true</Bool>;
          {'\n'}  {'}'}
          {'\n'}
          {'}'};
        </code>
      </pre>
    </motion.div>
  )
}
