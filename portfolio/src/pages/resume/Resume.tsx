import type { ReactElement } from 'react'

const Resume = (): ReactElement => {
  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-8">
          Resume
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed">
            This is the resume page. Add your resume content here.
          </p>
        </div>
      </div>
    </main>
  )
}

export { Resume }

