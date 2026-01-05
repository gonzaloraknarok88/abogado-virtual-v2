'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulación de login
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        alert(`Bienvenido ${email}!`);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-blue-900 flex flex-col">
      {/* NAV SUPERIOR */}
      <nav className="bg-black bg-opacity-40 backdrop-blur text-white px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-secondary">⚖️ ABOGADO VIRTUAL</h1>
        <div className="flex gap-4 text-sm">
          <Link href="#" className="hover:text-secondary transition">Inicio</Link>
          <Link href="#" className="hover:text-secondary transition">Contacto</Link>
          <Link href="#" className="hover:text-secondary transition">FAQ</Link>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* SECCIÓN IZQUIERDA - INFO */}
          <div className="text-center text-white mb-12">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-amber-600 border-4 border-white shadow-2xl flex items-center justify-center">
                <span className="text-5xl">👤</span>
              </div>
            </div>
            <h2 className="text-4xl font-black mb-2 text-secondary">ABOGADO VIRTUAL</h2>
            <p className="text-xl font-light mb-1">ABOGADO MATCH</p>
            <p className="text-sm text-gray-300">Tu plataforma de consultoría legal online</p>
          </div>

          {/* TARJETA DE LOGIN */}
          <div className="bg-white bg-opacity-95 backdrop-blur rounded-3xl shadow-2xl p-8 border-4 border-secondary">
            <h3 className="text-2xl font-bold text-primary text-center mb-1">INGRESA A TU CUENTA</h3>
            <p className="text-center text-gray-600 text-sm mb-6">Acceso rápido y seguro</p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* EMAIL */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2">CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-50 text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* CONTRASEÑA */}
              <div>
                <label className="block text-sm font-bold text-primary mb-2">CONTRASEÑA</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-50 text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* BOTÓN LOGIN */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-secondary to-amber-600 text-primary font-bold py-3 px-4 rounded-xl hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 mt-6"
              >
                {isLoading ? 'CARGANDO...' : 'INGRESAR'}
              </button>

              {/* ENLACES */}
              <div className="flex justify-between text-xs text-primary font-semibold mt-4">
                <Link href="#" className="hover:text-secondary">Olvidé mi contraseña</Link>
                <Link href="#" className="hover:text-secondary">Crear cuenta</Link>
              </div>
            </form>
          </div>

          {/* SECCIÓN INFO ABOGADOS */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 border border-secondary border-opacity-50 text-white text-center">
              <p className="text-2xl font-bold text-secondary mb-1">Rayén</p>
              <p className="text-xs">PRO - Laboral & Penal</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 border border-secondary border-opacity-50 text-white text-center">
              <p className="text-2xl font-bold text-secondary mb-1">Yuri</p>
              <p className="text-xs">PRO - Civil & Familia</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black bg-opacity-60 text-white text-center py-4 border-t border-secondary border-opacity-30">
        <p className="text-xs">© 2026 Abogado Virtual. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
