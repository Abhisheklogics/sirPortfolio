import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-6 max-w-7xl mx-auto text-blue-900">
      <div className="space-y-4 max-w-md mx-auto md:mx-0">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaEnvelope className="text-xl text-blue-700" />
          <a href="mailto:amarjeetsinghchauhan96@gmail.com" className="hover:underline">
            amarjeetsinghchauhan96@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaEnvelope className="text-xl text-blue-700" />
          <a href="mailto:amarjeetsinghchauhan@dei.ac.in" className="hover:underline">
            amarjeetsinghchauhan@dei.ac.in
          </a>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaLinkedin className="text-xl text-blue-700" />
          <Link
            href="https://www.linkedin.com/in/amarjeet-singh-chauhan-099243130"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </Link>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <FaPhoneAlt className="text-xl text-blue-700" />
          <a href="tel:+917248132510" className="hover:underline">
            +91 7248132510
          </a>
        </div>
      </div>
    </footer>
  );
}
