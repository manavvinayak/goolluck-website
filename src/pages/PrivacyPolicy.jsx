import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-black mb-4">
        Privacy <span>Policy</span>
      </h1>
      
      <section className="mb-6">
        <h2 className=" text-2xl md:text-2xl font-semibold mb-3 text-secondary">1. Introduction</h2>
        <p className="md:text-2xl text-xl  ">
          Welcome to <strong>GOOLLUCK INVESTMENTS</strong>. Your privacy is important to us, and we are committed to protecting any personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className=" font-semibold  mb-2 md:text-2xl text-2xl text-secondary">2. Information We Collect</h2>
        <ul className="list-disc list-inside md:text-2xl text-xl">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
          <li><strong>Financial Information:</strong> Payment details collected through secure third-party payment processors.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, and analytics data.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> Used to enhance user experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className=" font-semibold md:text-2xl text-2xl mb-2 text-secondary">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside md:text-2xl text-xl">
          <li>To provide financial training services and workshops.</li>
          <li>To process registrations, payments, and enrollments.</li>
          <li>To communicate updates and educational materials.</li>
          <li>To improve our website and customer experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="md:text-2xl text-2xl font-semibold  mb-2 text-secondary ">4. Data Sharing and Security</h2>
        <p className="md:text-2xl text-xl">
          We do not sell, rent, or trade your personal data with third parties. However, we may share data with trusted service providers (e.g., payment processors, IT support) to facilitate our services. We implement security measures to protect your information but cannot guarantee complete security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="md:text-2xl text-2xl font-semibold  mb-2 text-secondary">5. Your Rights and Choices</h2>
        <ul className="list-disc list-inside md:text-2xl text-xl">
          <li>You have the right to access, update, or request deletion of your personal information.</li>
          <li>You can opt-out of marketing communications at any time.</li>
          <li>You can manage cookie preferences through your browser settings.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="md:text-2xl text-2xl font-semibold  mb-2 text-secondary">6. Third-Party Links</h2>
        <p className="md:text-2xl text-xl">
          Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies before providing any personal data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="md:text-2xl text-2xl font-semibold  mb-2 text-secondary">7. Changes to This Policy</h2>
        <p className="md:text-2xl text-xl">
          We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="md:text-2xl text-2xl font-semibold  mb-2 text-secondary">8. Contact Us</h2>
        <p className="md:text-2xl text-xl">
          If you have any questions or concerns regarding this Privacy Policy, please contact us at:
        </p>
        <p className="mt-4 font-semibold md:text-2xl text-2xl mb-4">GOOLLUCK <span>INVESTMENTS</span></p>
        <p className="md:text-2xl text-xl"> <strong>Address:</strong> Office No-15, Ground Floor, Star Tower, Sector-30, Gurugram, India</p>
        <p className="md:text-2xl text-xl"><strong>Email:</strong> goolluck1@outlook.com</p>
        <p className="md:text-2xl text-xl"><strong>Phone:</strong> +919999974265, 0124-4200901, 4200903</p>
      </section>

      <p className="text-center mt-6 md:text-2xl text-xl">
        Thank you for trusting GOOLLUCK INVESTMENTS with your information.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
