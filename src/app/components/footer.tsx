
export function Footer() {
  return (
    <div className="w-full">
      <footer className="footer bg-base-200/60 p-10">
        <nav className="text-base-content">
          <h6 className="footer-title">Services</h6>
          <a href="#" className="link link-hover">
            Branding
          </a>
          <span>
            <a href="#" className="link link-hover">
              Design
            </a>
            <span className="badge ms-2 badge-sm badge-primary">New</span>
          </span>
          <a href="#" className="link link-hover">
            Marketing
          </a>
          <a href="#" className="link link-hover">
            Advertisement
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title">Company</h6>
          <a href="#" className="link link-hover">
            About us
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
        </nav>
        <nav className="text-base-content">
          <h6 className="footer-title">Legal</h6>
          <a href="#" className="link link-hover">
            Terms of use
          </a>
          <a href="#" className="link link-hover">
            Privacy policy
          </a>
          <a href="#" className="link link-hover">
            Cookie policy
          </a>
        </nav>
      </footer>
      <footer className="footer bg-base-200/60 border-base-content/25 border-t px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <aside className="grid-flow-col items-center">
            <p>
              ©2025{" "}
              <a className="link link-hover font-medium" href="#">
                DENTAL NAME
              </a>
            </p>
          </aside>
          <div className="flex h-5 gap-4">
            <a href="#" className="link" aria-label="Github Link">
              <span className="icon-[tabler--brand-github] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Facebook Link">
              <span className="icon-[tabler--brand-facebook] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="X Link">
              <span className="icon-[tabler--brand-x] size-5"></span>
            </a>
            <a href="#" className="link" aria-label="Google Link">
              <span className="icon-[tabler--brand-google] size-5"></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
