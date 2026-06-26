import { motion } from 'framer-motion'
import { Moon, Sparkles, SunMedium, Layers3, MonitorSmartphone } from 'lucide-react'
import Button from './ui/Button'
import Card from './ui/Card'
import { colors, typography, spacing, radius, shadows } from '../theme'

function Swatch({ color, name }) {
  return (
    <div className="space-y-2">
      <div className="h-16 rounded-2xl border border-border" style={{ backgroundColor: color }} />
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{color}</p>
      </div>
    </div>
  )
}

function DesignSystemPreview({ isDark, onToggle }) {
  const sectionClass = 'space-y-6 rounded-[2rem] border border-border/80 bg-background/80 p-6 backdrop-blur sm:p-8'

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap items-center justify-between rounded-[2rem] border border-border/80 bg-background/80 px-6 py-5 shadow-small backdrop-blur"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Sparkles size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Design System</p>
            <h1 className="text-xl font-semibold text-foreground">Premium SaaS UI Foundation</h1>
          </div>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surfaceElevated px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Toggle color theme"
        >
          {isDark ? <SunMedium size={16} /> : <Moon size={16} />}
          {isDark ? 'Light mode' : 'Dark mode'}
        </button>
      </motion.header>

      <main className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className={sectionClass}>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Foundation</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scalable tokens for premium product experiences.</h2>
            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              This system is structured for consistent light and dark themes, accessible interactions, and reusable UI primitives across future sections.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card tone="elevated">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Layers3 size={18} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Design tokens</p>
                  <p className="text-sm text-muted-foreground">Colors, spacing, radius, shadows, motion.</p>
                </div>
              </div>
            </Card>
            <Card tone="default">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MonitorSmartphone size={18} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Responsive by default</p>
                  <p className="text-sm text-muted-foreground">Built for mobile-first layouts and touch targets.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <aside className={sectionClass}>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Color system</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Swatch color={colors.primary} name="Primary" />
              <Swatch color={colors.foreground} name="Foreground" />
              <Swatch color={colors.backgroundAlt} name=" Surface" />
              <Swatch color={colors.border} name="Border" />
            </div>
          </div>
        </aside>
      </main>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className={sectionClass}>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Typography</p>
              <h3 className="text-2xl font-semibold text-foreground">Token-driven type scale</h3>
            </div>
            <div className="space-y-3 rounded-3xl border border-border bg-surfaceElevated p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Display XL</p>
              <h4 className="text-[clamp(2.25rem,4vw,3.25rem)] font-semibold tracking-[-0.03em] text-foreground">Build with clarity and calm.</h4>
              <p className="max-w-2xl text-base text-muted-foreground">The type system balances premium polish with comfortable readability for marketing and product surfaces.</p>
            </div>
          </div>
        </div>

        <div className={sectionClass}>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Buttons</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link button</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className={sectionClass}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Cards</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card tone="default">
              <h4 className="text-lg font-semibold text-foreground">Light card</h4>
              <p className="mt-2 text-sm text-muted-foreground">Soft shadows and rounded surfaces for premium content blocks.</p>
            </Card>
            <Card tone="dark">
              <h4 className="text-lg font-semibold text-white">Dark card</h4>
              <p className="mt-2 text-sm text-slate-300">A slightly elevated surface for dark-mode narratives and focus states.</p>
            </Card>
          </div>
        </div>

        <div className={sectionClass}>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Tokens</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surfaceElevated p-4">
              <p className="text-sm font-semibold text-foreground">Spacing</p>
              <p className="mt-2 text-sm text-muted-foreground">8-point rhythm with xs → 6xl</p>
            </div>
            <div className="rounded-2xl border border-border bg-surfaceElevated p-4">
              <p className="text-sm font-semibold text-foreground">Radius</p>
              <p className="mt-2 text-sm text-muted-foreground">Rounded XL and full pill treatments</p>
            </div>
            <div className="rounded-2xl border border-border bg-surfaceElevated p-4">
              <p className="text-sm font-semibold text-foreground">Shadows</p>
              <p className="mt-2 text-sm text-muted-foreground">Elevated layers for cards and floating UI</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignSystemPreview
