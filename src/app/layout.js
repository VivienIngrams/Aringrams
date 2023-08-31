// import './globals.css'
// import "/css/tailwind.css";

// import "@fontsource-variable/playfair-display";
// import "@fontsource/khand";

// import LayoutWrapper from "@/components/LayoutWrapper";

export default function RootLayout({ children }) {
    return (
       
      <html lang="en">
        {/* <LayoutWrapper> */}
            <body>{children}</body>
        {/* </LayoutWrapper> */}
      </html>
      
    )
  }