import type { VisualGalleryContent } from '@/components/case-study/VisualGallerySection'

const IMAGE_BASE = '/case-studies/gutbegleitet'

export const gutBegleitetVisualGallery = {
  introduction:
    'A direct look at the live platform rather than mockups — captured from the current production build across its main entry points and screen sizes. Each image is paired with a short note on the design decision it reflects.',
  categories: [
    {
      title: 'Home',
      images: [
        {
          src: `${IMAGE_BASE}/home-desktop.png`,
          alt: 'Gut Begleitet homepage hero with headline, calls to action, and trust statistics',
          label: 'Homepage',
          aspectRatio: '16 / 10',
          caption:
            'The hero pairs a warm, photography-led introduction with the organisation’s core promise, two clear next steps, and trust-building numbers — members, events, and vetted helpers — visible without scrolling.',
        },
      ],
    },
    {
      title: 'Service Pages',
      images: [
        {
          src: `${IMAGE_BASE}/alltagshilfe-desktop.png`,
          alt: 'Alltagshilfe (everyday help) service page',
          label: 'Alltagshilfe & Begleitung',
          aspectRatio: '16 / 10',
          caption:
            'The everyday-help page frames the service around independence rather than medical care, leading directly into a plain-language explanation before any feature list.',
        },
        {
          src: `${IMAGE_BASE}/salon-desktop.png`,
          alt: 'Salon and Club community page',
          label: 'Salon & Club',
          aspectRatio: '16 / 10',
          caption:
            'The Salon & Club page treats the physical meeting space as a social anchor, not a service listing — real gathering photography communicates community before any copy is read.',
        },
      ],
    },
    {
      title: 'Booking',
      images: [
        {
          src: `${IMAGE_BASE}/beratung-desktop.png`,
          alt: 'Booking page with a numbered step-by-step flow',
          label: 'Termin Buchen',
          aspectRatio: '16 / 10',
          caption:
            'The booking page walks visitors through a numbered, step-by-step flow. The self-service form is still being finished, so a direct phone number keeps the path to booking open in the meantime — an honest interim state rather than a broken one.',
        },
      ],
    },
    {
      title: 'Responsive Views',
      layout: 'responsive',
      images: [
        {
          src: `${IMAGE_BASE}/mitgliedschaft-desktop.png`,
          alt: 'Membership page on a desktop viewport',
          label: 'Desktop · 1440px',
          aspectRatio: '16 / 10',
          caption:
            'Full navigation, generous spacing, and room for visitors researching membership in depth.',
        },
        {
          src: `${IMAGE_BASE}/mitgliedschaft-tablet.png`,
          alt: 'Membership page on a tablet viewport',
          label: 'Tablet · 768px',
          aspectRatio: '3 / 4',
          caption:
            'Content narrows into a single reading column while the primary navigation stays fully visible.',
        },
        {
          src: `${IMAGE_BASE}/mitgliedschaft-mobile.png`,
          alt: 'Membership page on a mobile viewport',
          label: 'Mobile · 375px',
          aspectRatio: '375 / 812',
          caption:
            'Navigation collapses into a menu icon, buttons become full-width and thumb-friendly, and content stacks into one clear reading order.',
        },
      ],
    },
  ],
} as const satisfies VisualGalleryContent
