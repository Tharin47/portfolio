import type { ReactElement } from 'react'

interface FigmaEmbedProps {
  url: string
  title?: string
}

const FigmaEmbed = ({ url, title }: FigmaEmbedProps): ReactElement => {
  // Get the embed URL - use directly if already an embed URL, otherwise convert
  const getFigmaEmbedUrl = (figmaUrl: string): string => {
    // If the URL is already an embed URL (embed.figma.com), use it directly
    if (figmaUrl.includes('embed.figma.com')) {
      return figmaUrl
    }

    // Convert Figma prototype/file URL to embed format
    try {
      const urlObj = new URL(figmaUrl)

      // For prototype URLs: https://www.figma.com/proto/{fileKey}/{name}?node-id=...
      if (urlObj.pathname.includes('/proto/')) {
        const path = urlObj.pathname
        const query = urlObj.search
        const hash = urlObj.hash

        // Build the embed URL using embed.figma.com
        let embedUrl = `https://embed.figma.com${path}${query}${hash}`

        // Add embed-host parameter if not present
        if (!embedUrl.includes('embed-host=')) {
          embedUrl += (query || hash ? '&' : '?') + 'embed-hos-t=share'
        }

        return embedUrl
      }

      // For file URLs, use the standard embed format
      return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`
    } catch (error) {
      // If URL parsing fails, return the original URL (might already be correct format)
      console.warn('Failed to parse Figma URL:', error)
      return figmaUrl
    }
  }

  const embedUrl = getFigmaEmbedUrl(url)

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6 md:mb-8">
          {title}
        </h2>
      )}
      <div className="w-full overflow-hidden bg-[var(--color-bg-secondary)]">
        <iframe
          src={embedUrl}
          allowFullScreen
          className="w-full h-[600px] md:h-[800px] lg:h-[900px] border border-[rgba(0,0,0,0.1)]"
          title={title || 'Figma Prototype'}
          loading="lazy"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
        />
      </div>
    </div>
  )
}

export { FigmaEmbed }
