import React, { memo, useState, useEffect } from 'react'

function Projects({items}){
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (imageSrc, title, index) => {
    setSelectedImage({ src: imageSrc, title })
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
        <div className="projects-grid">
          {items.map((p,i)=> {
            const title = p.title || `Project ${i+1}`
            const hasImage = p.thumb && p.thumb.trim() !== ''
            
            return (
              <div 
                key={i} 
                className="project-thumb"
                onClick={() => hasImage && openModal(p.thumb, title, i)}
                style={{ cursor: hasImage ? 'pointer' : 'default' }}
              >
                {hasImage ? (
                  <img 
                    src={p.thumb} 
                    alt={title}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="thumb-inner">{title}</div>
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
          </div>
        </div>
      )}
    </>
  )
}

// Memoize component to prevent re-renders when props haven't changed
export default memo(Projects)
