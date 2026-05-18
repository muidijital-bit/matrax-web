import { useState, type FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/admin/dashboard', { replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError('E-posta veya şifre hatalı.');
      setLoading(false);
    } else {
      navigate('/admin/dashboard', { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#2c3876' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <img
            src="/images/logo.png?v=4"
            alt="Matrax"
            className="h-20 w-auto object-contain mx-auto drop-shadow-xl"
          />
          <p className="text-white/60 text-sm mt-3 font-semibold">Yönetim Paneli</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/15">
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-500/20 border border-red-400/30 text-red-200 text-sm font-medium rounded-xl">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-white/80 text-sm font-semibold mb-1.5">E-posta</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors"
              placeholder="admin@matrax.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white/80 text-sm font-semibold mb-1.5">Şifre</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-white/50 transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-60 shadow-lg"
            style={{ background: '#f83567' }}
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : null}
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
