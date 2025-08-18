'use client';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:mt-[-30px] bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get in <span className="text-blue-600">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Address</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  8427+89Q, Agarpur, Arela,<br />
                  Uttar Pradesh 283201, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-3xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Phone</h4>
                <p className="text-gray-700 dark:text-gray-300">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-3xl text-blue-600 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  amarjeetsinghchauhan96@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div>
            <iframe
              title="Location Map"
              className="w-full h-80 md:h-96 rounded-xl border-0 shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.706370801008!2d78.24709889999999!3d27.1435255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747425dd556155%3A0xa0f2fa254f59cf7c!2sAgarpur%2C%20Arela%2C%20Uttar%20Pradesh%20283201!5e0!3m2!1sen!2sin!4v1716638216417!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
