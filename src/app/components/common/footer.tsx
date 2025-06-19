export function Footer() {
  return (
    <footer className="footer bg-base-200/60 px-6 py-4">
      <div className="flex w-full flex-wrap items-center justify-between">
        <div className="flex items-center gap-2 text-xl font-bold text-base-content">
          <span>MOD DENTAL</span>
        </div>
        <aside className="grid-flow-col items-center">
          <p>
            {" "}
            ©2025{" "}
            <a className="link link-hover font-medium" href="#">
              MOD DENTAL
            </a>{" "}
          </p>
        </aside>
        <div className="flex h-5 gap-4">
          <a href="#" className="link" aria-label="Facebook Link" style={{ background: "url(/assets/images/facebook.png) lightgray 50% / contain no-repeat" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill="#B6A66A" />
            </svg>
            f
          </a>
          <a href="#" className="link" aria-label="X Link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill="#B6A66A" />
            </svg>
          </a>
          <a href="#" className="link" aria-label="Google Link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill="#B6A66A" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
