export const metadata = {
  title: "Hyperrealistic Portrait Generator",
  description: "Generate an ultra-detailed studio portrait with specified camera and lighting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Noto Sans, \"Apple Color Emoji\", \"Segoe UI Emoji\"',
        background: 'linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%)',
        color: '#111827'
      }}>
        {children}
      </body>
    </html>
  );
}
