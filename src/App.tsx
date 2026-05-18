import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home'; // ana sayfa eager — LCP
import { useSiteSettings } from './lib/useSiteSettings';

// Diğer sayfalar lazy: ilk yükleme bundle'ını küçültür
const Catalog = lazy(() => import('./pages/Catalog'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Imalat = lazy(() => import('./pages/Imalat'));
const Galeri = lazy(() => import('./pages/Galeri'));
const YedekParcalar = lazy(() => import('./pages/YedekParcalar'));
const Blog = lazy(() => import('./pages/Blog'));
const Kvkk = lazy(() => import('./pages/Kvkk'));
const CerezPolitikasi = lazy(() => import('./pages/CerezPolitikasi'));

// Admin sayfaları
const AdminLogin = lazy(() => import('./admin/Login'));
const AdminLayout = lazy(() => import('./admin/AdminLayout'));
const ProtectedRoute = lazy(() => import('./admin/ProtectedRoute'));
const Dashboard = lazy(() => import('./admin/Dashboard'));
const Products = lazy(() => import('./admin/Products'));
const SpareParts = lazy(() => import('./admin/SpareParts'));
const AdminSettings = lazy(() => import('./admin/Settings'));

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-neon-pink animate-spin" />
  </div>
);

const AdminFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-100">
    <div className="w-10 h-10 border-4 border-slate-300 border-t-indigo-600 rounded-full animate-spin" />
  </div>
);

function App() {
  useSiteSettings(); // Supabase'deki ayarları <head>'e uygula

  return (
    <Routes>
      {/* Ana site */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="katalog" element={<Suspense fallback={<PageFallback />}><Catalog /></Suspense>} />
        <Route path="katalog/:slug" element={<Suspense fallback={<PageFallback />}><ProductDetail /></Suspense>} />
        <Route path="projeler" element={<Suspense fallback={<PageFallback />}><Projects /></Suspense>} />
        <Route path="imalat" element={<Suspense fallback={<PageFallback />}><Imalat /></Suspense>} />
        <Route path="galeri" element={<Suspense fallback={<PageFallback />}><Galeri /></Suspense>} />
        <Route path="yedek-parcalar" element={<Suspense fallback={<PageFallback />}><YedekParcalar /></Suspense>} />
        <Route path="hakkimizda" element={<Suspense fallback={<PageFallback />}><About /></Suspense>} />
        <Route path="kvkk" element={<Suspense fallback={<PageFallback />}><Kvkk /></Suspense>} />
        <Route path="cerez-politikasi" element={<Suspense fallback={<PageFallback />}><CerezPolitikasi /></Suspense>} />
        <Route path="iletisim" element={<Suspense fallback={<PageFallback />}><Contact /></Suspense>} />
        <Route path="blog" element={<Suspense fallback={<PageFallback />}><Blog /></Suspense>} />
      </Route>

      {/* Admin — login */}
      <Route path="/admin/login" element={<Suspense fallback={<AdminFallback />}><AdminLogin /></Suspense>} />

      {/* Admin — korumalı sayfalar */}
      <Route path="/admin" element={<Suspense fallback={<AdminFallback />}><ProtectedRoute /></Suspense>}>
        <Route element={<Suspense fallback={<AdminFallback />}><AdminLayout /></Suspense>}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Suspense fallback={<AdminFallback />}><Dashboard /></Suspense>} />
          <Route path="urunler" element={<Suspense fallback={<AdminFallback />}><Products /></Suspense>} />
          <Route path="yedek-parcalar" element={<Suspense fallback={<AdminFallback />}><SpareParts /></Suspense>} />
          <Route path="ayarlar" element={<Suspense fallback={<AdminFallback />}><AdminSettings /></Suspense>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
