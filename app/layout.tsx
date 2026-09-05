import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Canário Pé Duro | Cuidado para cada canto', description: 'Conheça o esboço da Canário Pé Duro: bebedouros, poleiros e gaiolas para canário-belga.', robots: { index: false, follow: false } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="pt-BR"><body>{children}</body></html>; }
