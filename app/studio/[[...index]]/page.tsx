import Studio from './Studio';

// Set metadata and viewport manually to ensure compatibility
export const metadata = {
  title: 'Narratv Studio',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// Required for output: 'export' to work with dynamic routes.
// We only generate the root /studio path.
export function generateStaticParams() {
  return [{ index: [] }];
}

export default function StudioPage() {
  return <Studio />;
}