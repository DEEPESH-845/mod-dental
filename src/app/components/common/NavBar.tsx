import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar shadow">
      <div className="navbar-start">
        <Link
          className="link text-base-content/90 link-neutral text-xl font-semibold no-underline"
          href="/"
        >
          DENTAL
        </Link>
      </div>

      <div className="navbar-center max-sm:hidden">
        <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
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
    </nav>
  );
}
