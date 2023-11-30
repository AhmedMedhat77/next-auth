import "./globals.css";
import Navbar from "./(components)/Navbar";
import AuthProvider from "./(components)/AuthProvider";

export const metadata = {
  title: "Next.js Auth",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <AuthProvider>
      <body className="bg-gray-100">
        <Navbar />
          <div className="m-2">{children}</div>
      </body>
        </AuthProvider>
    </html>
  );
}
