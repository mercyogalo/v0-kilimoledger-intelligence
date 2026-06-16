import Link from 'next/link';

export function Footer() {
  const navGroups = [
    {
      title: 'Product',
      links: ['How It Works', 'Features', 'Pricing', 'API Docs', 'Changelog'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Use', 'Compliance', 'Cookie Policy'],
    },
    {
      title: 'Portals',
      links: ['Manager Portal', 'Driver Portal', 'Admin Dashboard', 'Buyer Access'],
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/180/524/original/ChatGPT_Image_Jun_15__2026__09_51_23_PM.png?1781549585"
                alt="KilimoLedger logo"
                className="w-8 h-8 object-contain rounded"
              />
              <span
                className="text-white font-bold text-lg"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                KilimoLedger
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Verified farm-to-port compliance and smart escrow for African agricultural exports.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-700 flex items-center justify-center text-xs cursor-pointer transition-colors"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                {group.title}
              </div>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500">
            © 2026 KilimoLedger Ltd. All rights reserved. Registered in Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">v2026.1.0</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse" />
              <span className="text-xs text-gray-500">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}