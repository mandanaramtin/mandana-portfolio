export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{margin:0,fontFamily:'sans-serif',background:'#0b0c10',color:'#fff'}}>
        {children}
      </body>
    </html>
  );
}
