import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  LayoutDashboard, Package, Wrench,
  Settings, LogOut, Menu, X, ExternalLink,
} from 'lucide-react';

const navItems = [
  { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/admin/urunler', icon: Package, label: 'Ürünler & Kategoriler' },
  { path: '/admin/yedek-parcalar', icon: Wrench, label: 'Yedek Parçalar' },
  { path: '/admin/ayarlar', icon: Settings, label: 'Site Ayarları' },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col transition-transform duration-200 lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ background: '#2c3876' }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center px-4 py-4 border-b border-white/10 flex-shrink-0">
          <img
            src="/images/logo.png?v=4"
            alt="Matrax"
            className="h-14 w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Admin badge */}
        <div className="px-4 py-2 border-b border-white/10 flex-shrink-0">
          <span className="text-white/50 text-xs font-black uppercase tracking-widest">Yönetim Paneli</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 px-2 overflow-y-auto">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                style={isActive ? { background: '#f83567' } : undefined}
              >
                <Icon size={17} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-2 border-t border-white/10 flex-shrink-0">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full text-sm font-semibold text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <LogOut size={17} />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white border-b border-slate-200 flex items-center gap-3 px-4 h-14 flex-shrink-0">
          <button
            className="lg:hidden p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex-1" />
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-brand-pink font-semibold transition-colors"
          >
            <ExternalLink size={13} />
            Siteyi Görüntüle
          </a>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
