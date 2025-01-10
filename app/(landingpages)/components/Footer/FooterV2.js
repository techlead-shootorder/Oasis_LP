import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-4 pb-5 bg-primary mb-12 sm:mb-0">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <p className="text-white">
          © 2024 Oasis Fertility - All Right Reserved{" "}
          <Link
            href="https://oasisindia.in/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white"
          >
            Privacy Policy.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
