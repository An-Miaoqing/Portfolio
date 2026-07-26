import { Headline } from '@/components/shared/Headline'
import { SectionWrapper } from '@/components/shared/SectionWrapper'

export type GalleryImage = {
  alt: string
  aspectRatio: string
  caption: string
  label: string
  src: string
}

export type GalleryCategory = {
  images: readonly GalleryImage[]
  layout?: 'grid' | 'responsive'
  title: string
}

export type VisualGalleryContent = {
  categories: readonly GalleryCategory[]
  introduction: string
}

type VisualGallerySectionProps = {
  content: VisualGalleryContent
  eyebrow?: string
  heading?: string
  id?: string
}

function GalleryFigure({
  image,
  widthClassName = '',
}: {
  image: GalleryImage
  widthClassName?: string
}) {
  return (
    <figure
      className={`overflow-hidden rounded-panel border border-line bg-surface shadow-control ${widthClassName}`}
    >
      <div
        className="w-full bg-surface-subtle"
        style={{ aspectRatio: image.aspectRatio }}
      >
        <img
          alt={image.alt}
          className="size-full object-cover object-top"
          loading="lazy"
          src={image.src}
        />
      </div>
      <figcaption className="p-5 sm:p-6">
        <p className="font-mono text-xs font-medium tracking-[0.12em] text-accent uppercase">
          {image.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-pretty text-muted">
          {image.caption}
        </p>
      </figcaption>
    </figure>
  )
}

function GalleryGrid({ images }: { images: readonly GalleryImage[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {images.map((image) => (
        <GalleryFigure key={image.src} image={image} />
      ))}
    </div>
  )
}

function GalleryResponsiveRow({
  images,
}: {
  images: readonly GalleryImage[]
}) {
  return (
    <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-start">
      {images.map((image, index) => (
        <GalleryFigure
          key={image.src}
          image={image}
          widthClassName={
            index === 0 ? 'lg:flex-[3]' : index === 1 ? 'lg:flex-[2]' : 'lg:flex-[1.1]'
          }
        />
      ))}
    </div>
  )
}

function CategorySection({
  category,
  index,
}: {
  category: GalleryCategory
  index: number
}) {
  return (
    <div
      className={
        index === 0 ? 'mt-16 sm:mt-20' : 'mt-20 border-t border-line pt-16'
      }
    >
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-accent uppercase">
        {String(index + 1).padStart(2, '0')} / {category.title}
      </p>
      <h3 className="mt-4 text-2xl leading-tight font-medium tracking-[-0.04em] text-ink sm:text-3xl">
        {category.title}
      </h3>

      <div className="mt-8">
        {category.layout === 'responsive' ? (
          <GalleryResponsiveRow images={category.images} />
        ) : (
          <GalleryGrid images={category.images} />
        )}
      </div>
    </div>
  )
}

export function VisualGallerySection({
  content,
  eyebrow = 'The product in use',
  heading = 'Visual Gallery',
  id = 'visual-gallery',
}: VisualGallerySectionProps) {
  return (
    <SectionWrapper
      as="section"
      id={id}
      className="border-b border-line bg-canvas py-[var(--space-section)]"
    >
      <Headline eyebrow={eyebrow}>{heading}</Headline>

      <p className="mt-8 max-w-3xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
        {content.introduction}
      </p>

      {content.categories.map((category, index) => (
        <CategorySection key={category.title} category={category} index={index} />
      ))}
    </SectionWrapper>
  )
}
