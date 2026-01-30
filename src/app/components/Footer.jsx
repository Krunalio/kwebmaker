import Image from 'next/image';

export default function Footer({ data }) {
  if (!data) return null;

  return (
    <footer className="bg-white">
      <div className="max-w-284 mx-auto pt-10 px-2.5 md:px-4">
       

        {/* Main Footer Content */}
        <div className="footer-grid grid grid-cols-1 gap-10 pb-10 lg:grid-cols-3">
          {/* Logo */}
          <div className="footer-grid__logo content-center">
            <div className="relative h-26.75 w-37.5">
              <Image
                src={data.logoPath}
                alt={data.logoAlt || 'Logo'}
                fill
                className="object-contain"
                priority
              />
            </div>
            
          </div>

           {/* Top Navigation */}
        <div className="footer-grid__nav flex flex-col items-center gap-3">
          <nav className="w-full">
            <div className="flex flex-row md:flex-col items-start gap-5 md:gap-8">
              {data.navRows?.map((row, rowIndex) => (
                <ul
                  key={row.id || rowIndex}
                  className="flex flex-col items-start justify-start gap-y-2 text-sm text-black font-matter md:flex-row md:flex-wrap md:justify-center md:gap-x-12"
                >
                  {row.links?.map((link) => (
                    <li key={link.id || link.label}>
                      <a
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>
          <div className="h-px w-full bg-gray-300 mt-4" />
        </div>

          {/* Contact */}
          <div className="footer-grid__contact">
            <h4 className="font-matter text-[20px] font-semibold text-primary mb-4">
              {data.contact?.title}
            </h4>
            <ul className="space-y-3 text-sm text-gray-700">
              {data.contact?.items?.map((item) => (
                <li key={item.id || item.label} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-primary transition-colors text-[16px]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className='text-[16px]'>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-grid__social">
            <h4 className="font-matter text-[20px] font-semibold text-primary mb-4">
              {data.social?.title}
            </h4>
            <div className="flex items-center gap-4">
              {data.social?.links?.map((link) => (
                <a
                  key={link.id || link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-[#0C5060] to-primary">
        <div className="max-w-284 mx-auto px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs text-white">
          {data.bottomBar?.map((item) => (
            <a
              key={item.id || item.label}
              href={item.href}
              className="hover:underline font-matter font-normal"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
