import React, { memo, useState, useEffect } from 'react'

function Projects({items}){
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  // Debug: log incoming items count
  console.log('Projects items count:', items && items.length)


  const openModal = (imageSrc, title, index, desc) => {
    setSelectedImage({ src: imageSrc, title, desc })
    setCurrentIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentIndex(0)
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % items.length
    const nextItem = items[nextIndex]
    if (nextItem.thumb) {
      setSelectedImage({ src: nextItem.thumb, title: nextItem.title || `Project ${nextIndex + 1}` })
      setCurrentIndex(nextIndex)
    }
  }

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length
    const prevItem = items[prevIndex]
    if (prevItem.thumb) {
      setSelectedImage({ src: prevItem.thumb, title: prevItem.title || `Project ${prevIndex + 1}` })
      setCurrentIndex(prevIndex)
    }
  }

  // Close modal on ESC key, navigate with arrow keys
  useEffect(() => {
    if (!selectedImage) return
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        goToPrev()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden' // Prevent background scrolling
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, currentIndex])

  // If no items provided, show empty state
  if (!items || !items.length) {
    return (
      <section className="card projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-thumb">
            <div className="thumb-inner">No projects available</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="card projects">
        <h2>Projects</h2>
        <div className="projects-count" style={{marginBottom:8,color:'var(--muted)',fontSize:13}}>Showing {items.length} projects</div>
        <div className="projects-grid">
          {items.map((p,i)=> {
            const title = p.title || `Project ${i+1}`
            const hasImage = p.thumb && p.thumb.trim() !== ''
            const hasLink = p.link && p.link.trim() !== ''
            
            return (
              <div 
                key={i} 
                className="project-thumb"
                onClick={() => {
                  if (!hasImage && hasLink) {
                    window.open(p.link, '_blank', 'noopener,noreferrer')
                  } else if (hasImage) {
                    openModal(p.thumb, title, i, p.desc)
                  }
                }}
                style={{ cursor: hasImage || hasLink ? 'pointer' : 'default' }}
              >
                <div className="thumb-media">
                  {hasImage ? (
                    <img 
                      src={p.thumb} 
                      alt={title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22200%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23f5f5f5%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23777%22 font-size=%2220%22%3ENo image%3C/text%3E%3C/svg%3E'; }}
                    />
                  ) : (
                    <div className="thumb-inner">{title}</div>
                  )}
                </div>

                {hasLink && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View details for ${title}`}
                  >
                    🔗 View details
                  </a>
                )}

                {p.desc && (
                  <div className="project-caption" aria-hidden={!p.desc}>
                    {p.desc}
                    {p.desc.length > 140 && (
                      <button
                        className="project-readmore"
                        onClick={(e) => { e.stopPropagation(); openModal(p.thumb, title, i, p.desc) }}
                        aria-label={`Read more about ${title}`}
                      >
                        Read more
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeModal} aria-label="Close">×</button>
            {items.length > 1 && (
              <>
                <button className="image-modal-nav image-modal-prev" onClick={goToPrev} aria-label="Previous">‹</button>
                <button className="image-modal-nav image-modal-next" onClick={goToNext} aria-label="Next">›</button>
              </>
            )}
            <img src={selectedImage.src} alt={selectedImage.title} />
            {selectedImage.title && (
              <div className="image-modal-title">{selectedImage.title}</div>
            )}
            {selectedImage.desc && (
              <div className="image-modal-desc">{selectedImage.desc}</div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

// Memoize component to prevent re-renders when props haven't changed
export default memo(Projects)
