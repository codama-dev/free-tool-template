import { useTranslation } from 'react-i18next'
import { PageHeader } from '@/pages/PageHeader'

/**
 * Main tool page - replace this with your tool's UI.
 *
 * This is a placeholder showing the template structure.
 * Your tool's components go here.
 */
export function ToolPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-8">
      <PageHeader />

      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
          <h2 className="mb-4 font-semibold text-2xl text-foreground">{t('app.title')}</h2>
          <p className="text-muted-foreground">{t('tool.placeholder')}</p>
        </div>
      </div>
    </div>
  )
}
