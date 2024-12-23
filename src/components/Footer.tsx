

function Footer() {
  return (
   <footer className=" bg-black text-gray-400 py-12" >
    <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-8">
    <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          Knowledgetech Academy is a leading institution committed to empowering learners in the field of IT. We cultivate skills and passion from the ground up, building a dynamic community of tech professionals and innovators
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col ">
            <a
              href="https://web.facebook.com/?_rdc=1&_rdr"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Twitter"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>karachi,Pakistan</p>
          <p>Jamia Millia,Mair</p>
          <p>Email: info@knowledgetech.com</p>
          <p>Phone: (221) 456-7890</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Knowledge tech Academy. All rights reserved.</p>
    </footer>
  )
}

export default Footer