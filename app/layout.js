import './globals.css';

export const metadata = {
  title: 'SIMAI | Monitoramento e Alerta de Inundações',
  description:
    'Sistema Inteligente de Monitoramento e Alerta de Inundações para Angola com IA, sensores e comunicação móvel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
