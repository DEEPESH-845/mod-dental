import Image from "next/image";

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
          <a href="#" className="link" aria-label="Facebook Link">
            <span className="sr-only">Facebook</span>
            <Image src="/assets/images/Facebook.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" className="link" aria-label="X Link">
            <span className="sr-only">X (Twitter)</span>
            <Image src="/assets/images/X.png" alt="X (Twitter)" width={24} height={24} />
          </a>
          <a href="#" className="link" aria-label="Google Link">
            <span className="sr-only">Google</span>
            <Image src="/assets/images/Instagram.png" alt="Google" width={24} height={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
