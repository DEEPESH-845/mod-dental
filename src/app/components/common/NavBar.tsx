import { Phone } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="navbar rounded-t-box gap-4" role="navigation" aria-label="main navigation" style={{ backgroundColor: "#F6F1E9E5" }}>
        <div className="navbar-start items-center">
          <Link
            className="link text-base-content link-neutral text-xl font-bold no-underline"
            href="#"
          >
           <img src="/assets/images/logo.png" alt="Logo" width={150} height={50} className="h-8 md:h-10" />
          </Link>
        </div>
        <div className="navbar-end flex items-center gap-4">
        <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+18327625635"
              className="flex items-center btn-secondary text-sm"
            >
              <Phone className="mr-2 h-4 w-4" />
              CALL (832) 762-5635
            </a>
            <Link href="#contact" className="btn-primary text-sm">
              PLAN YOUR VISIT
            </Link>
          </div>
        </div>
      </nav>
      <div className="navbar-end bg-base-100 flex w-full items-right" style={{ backgroundColor: "#F6F1E9E5"! }}>
        <ul className="menu menu-horizontal gap-2 text-base"style={{ backgroundColor: "#F6F1E9E5"! }}>
          <li>
            <Link href={"/bio/doctors/arora"}>OUR STAFF</Link>
          </li>
          <li className="dropdown relative inline-flex [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
            <button
              id="dropdown-service"
              type="button"
              className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-sm:px-2"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              SERVICES
              <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
            </button>
            <ul
              className="dropdown-menu  dropdown-open:opacity-100 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="ui-components"
            >
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/cosmetic-dentistry"}
                >
                  COSMETIC DENTISTRY
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/dental-implants"}
                >
                  DENTAL IMPLANTS
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/preventive-dentistry"}
                >
                  PREVENTIVE DENTISTRY
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/restorative-dentistry"}
                >
                  RESTORATIVE DENTISTRY
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href={"/services/sleep-apnea"}>
                  SLEEP APNEA
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/smile-makeover"}
                >
                  SMILE MAKEOVER
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/teeth-straightening"}
                >
                  TEETH STRAIGHTENING
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  href={"/services/wisdom-extraction"}
                >
                  WISDOM EXTRACTION
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown relative [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
            <button
              id="dropdown-js-components"
              className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              FOR PATIENTS
              <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4 rtl:rotate-180"></span>
            </button>
            <ul
              className="dropdown-menu dropdown-open:opacity-100 hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="js-components"
            >
              <li>
                <Link className="dropdown-item" href="../accordion">
                  INSURANCE
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="../overlays">
                  FORMS
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="../advance-forms">
                  PAYMENTS
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"/about"}>ABOUT US</Link>
          </li>
          <li>
            <Link href={"/posts"}>BLOGS</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
