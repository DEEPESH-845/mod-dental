"use client";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, NAV_ACTIONS, LOGO } from "@/config/navbar";
import { Phone } from "lucide-react";

export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-dental-cream/95 backdrop-blur-md border-b border-dental-green/10">
        <div className="container-custom">
          <nav
            className="navbar rounded-t-box gap-4"
            role="navigation"
            aria-label="main navigation"
            style={{ backgroundColor: "#F6F1E9E5" }}
          >
            <div className="navbar-start items-center">
              <Link
                className="link text-base-content link-neutral text-xl font-bold no-underline"
                href="#"
              >
                <Image
                  src={LOGO.src}
                  alt={LOGO.alt}
                  width={LOGO.width}
                  height={LOGO.height}
                  className="h-8 md:h-10"
                  priority
                />
              </Link>
            </div>
            <div className="navbar-end flex items-center gap-4">
              <div className="hidden lg:flex items-center space-x-4">
                {NAV_ACTIONS.map((action) =>
                  action.type === "phone" ? (
                    <a
                      key={action.label}
                      href={action.href}
                      className="flex items-center btn-secondary text-sm"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {action.label}
                    </a>
                  ) : (
                    <Link key={action.label} href={action.href} className="btn-primary text-sm">
                      {action.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </nav>
          <div
            className="navbar-end bg-base-100 flex w-full items-right"
            style={{ backgroundColor: "#F6F1E9E5"! }}
          >
            <ul
              className="menu menu-horizontal gap-2 text-base"
              style={{ backgroundColor: "#F6F1E9E5"! }}
            >
              {NAV_LINKS.map((item) =>
                item.dropdown ? (
                  <li key={item.label} className="dropdown relative inline-flex [--offset:9] [--placement:bottom-end] max-sm:[--placement:bottom]">
                    <button
                      type="button"
                      className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-sm:px-2"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      {item.label}
                      <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                    </button>
                    <ul
                      className="dropdown-menu  dropdown-open:opacity-100 hidden"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="ui-components"
                    >
                      {item.dropdown.map((sub) => (
                        <li key={sub.label}>
                          <Link className="dropdown-item" href={sub.href}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
