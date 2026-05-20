import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home'; // ana sayfa eager — LCP
import { useSiteSettings } from './lib/useSiteSettings';
import { ErrorBoundary } from './components/ErrorBoundary';

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
        <Route path="katalog" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Catalog /></Suspense></ErrorBoundary>} />
        <Route path="katalog/:slug" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><ProductDetail /></Suspense></ErrorBoundary>} />
        <Route path="projeler" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Projects /></Suspense></ErrorBoundary>} />
        <Route path="imalat" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Imalat /></Suspense></ErrorBoundary>} />
        <Route path="galeri" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Galeri /></Suspense></ErrorBoundary>} />
        <Route path="yedek-parcalar" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><YedekParcalar /></Suspense></ErrorBoundary>} />
        <Route path="hakkimizda" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><About /></Suspense></ErrorBoundary>} />
        <Route path="kvkk" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Kvkk /></Suspense></ErrorBoundary>} />
        <Route path="cerez-politikasi" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><CerezPolitikasi /></Suspense></ErrorBoundary>} />
        <Route path="iletisim" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Contact /></Suspense></ErrorBoundary>} />
        <Route path="blog" element={<ErrorBoundary><Suspense fallback={<PageFallback />}><Blog /></Suspense></ErrorBoundary>} />
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
