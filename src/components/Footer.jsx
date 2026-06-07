import styles from './Footer.module.css'
import { Link } from "react-router-dom";


// const Footer = () => {
//     return (
//         <footer className={`bg-gray-800 text-white py-4 mt-8 ${styles.footer}`}>
//             <div className="container mx-auto text-center">
//                 <p>&copy; {new Date().getFullYear()} Shipper. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// }   
// export default Footer;





export default function Footer() {
  return (
    <footer className={`border-t rounded-2xl mt-auto ${styles.footer}`}>
      <div className="container mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid flex-wrap gap-8 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              <Link to="/" className="hover:text-foreground">    
            Shipper
            </Link>
            </h2>

            <p className="mt-3 text-sm text-muted-foreground">
              Shipping assistance for local businesses. We help you find the best shipping options and save time and money.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">
              Product
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-foreground"
                >
                  Dashboard
                </Link>
              </li>


            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground"
                >
                  About
                </Link>
              </li>

            

              <li>
                <Link
                  to="/blog"
                  className="hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">
              Support
            </h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              
              <li>
                <Link
                  to="/docs"
                  className="hover:text-foreground"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-5 border-t pt-3 pb-0 text-center text-sm text-muted-foreground">
          © 2026 Shipper. MIT Licensed Open Source.
        </div>

      </div>
    </footer>
  );
}