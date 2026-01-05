'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Lawyer {
  id: string;
  nombre: string;
  especialidad: string;
  telefono: string;
  isPro: boolean;
}

const LAWYERS: Lawyer[] = [
  { id: '1', nombre: 'Rayén', especialidad: 'Laboral, Empresas, Familia, Migración', telefono: '+56 9 1234 5678', isPro: true },
  { id: '2', nombre: 'Yuri', especialidad: 'Penal', telefono: '+56 9 9876 5432', isPro: true },
  { id: '3', nombre: 'Carlos Mendoza', especialidad: 'Inmobiliario', telefono: '+56 9 2345 6789', isPro: false },
  { id: '4', nombre: 'María González', especialidad: 'Laboral', telefono: '+56 9 3456 7890', isPro: false },
  { id: '5', nombre: 'Roberto Silva', especialidad: 'Mercantil', telefono: '+56 9 4567 8901', isPro: false },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        alert(`Bienvenido ${email}!`);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-900 to-blue-950 flex flex-col">
      {/* NAV SUPERIOR */}
      <nav className="bg-black bg-opacity-50 backdrop-blur text-white px-4 py-4 flex justify-between items-center border-b-2 border-secondary">
        <h1 className="text-2xl font-bold text-secondary">⚖️ ABOGADO VIRTUAL</h1>
        <div className="flex gap-6 text-sm font-semibold">
          <Link href="#" className="hover:text-secondary transition duration-300 transform hover:scale-110">Inicio</Link>
          <Link href="#" className="hover:text-secondary transition duration-300 transform hover:scale-110">Contacto</Link>
          <Link href="#" className="hover:text-secondary transition duration-300 transform hover:scale-110">FAQ</Link>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* SECCIÓN INFO */}
          <div className="text-center text-white mb-10 animate-fadeIn">
            <div className="mb-6 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-amber-600 border-4 border-white shadow-2xl flex items-center justify-center animate-pulse">
                <span className="text-5xl">👤</span>
              </div>
            </div>
            <h2 className="text-4xl font-black mb-2 text-secondary">ABOGADO VIRTUAL</h2>
            <p className="text-xl font-light mb-1">ABOGADO MATCH</p>
            <p className="text-sm text-gray-300">Tu plataforma de consultoría legal online</p>
          </div>

          {/* TARJETA DE LOGIN */}
          <div className="bg-white bg-opacity-95 backdrop-blur rounded-3xl shadow-2xl p-8 border-4 border-secondary transform transition hover:shadow-3xl">
            <h3 className="text-2xl font-bold text-primary text-center mb-1">INGRESA A TU CUENTA</h3>
            <p className="text-center text-gray-600 text-sm mb-6">Acceso rápido y seguro</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-primary mb-2">CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-50 text-gray-900 placeholder-gray-400 transition focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">CONTRASEÑA</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-secondary focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-50 text-gray-900 placeholder-gray-400 transition focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-secondary to-amber-600 text-primary font-bold py-3 px-4 rounded-xl hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 mt-6 duration-300"
              >
                {isLoading ? 'CARGANDO...' : 'INGRESAR'}
              </button>

              <div className="flex justify-between text-xs text-primary font-semibold mt-4">
                <Link href="#" className="hover:text-secondary transition">Olvidé mi contraseña</Link>
                <Link href="#" className="hover:text-secondary transition">Crear cuenta</Link>
              </div>
            </form>
          </div>

          {/* ABOGADOS PRO */}
          <div className="mt-10">
            <h3 className="text-white text-center font-bold mb-4 text-lg border-b-2 border-secondary pb-2">ABOGADOS PREMIUM PRO</h3>
            <div className="grid grid-cols-1 gap-4">
              {LAWYERS.filter(l => l.isPro).map((lawyer) => (
                <div key={lawyer.id} className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-4 border-2 border-secondary text-white hover:bg-opacity-20 transition transform hover:scale-105">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg text-secondary">{lawyer.nombre}</p>
                      <p className="text-xs text-gray-200">{lawyer.especialidad}</p>
                    </div>
                    <span className="bg-secondary text-primary px-2 py-1 rounded text-xs font-bold">PRO</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-100"><strong>Tel:</strong> <a href={`tel:${lawyer.telefono}`} className="text-secondary hover:underline">{lawyer.telefono}</a></p>
                </div>
              ))}
            </div>
          </div>

          {/* OTROS ABOGADOS */}
          <div className="mt-8">
            <h3 className="text-white text-center font-bold mb-4 text-lg border-b-2 border-white pb-2">OTROS PROFESIONALES</h3>
            <div className="grid grid-cols-1 gap-3">
              {LAWYERS.filter(l => !l.isPro).map((lawyer) => (
                <div key={lawyer.id} className="bg-white bg-opacity-5 backdrop-blur rounded-lg p-3 border border-white border-opacity-20 text-white hover:bg-opacity-10 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-white">{lawyer.nombre}</p>
                      <p className="text-xs text-gray-300">{lawyer.especialidad}</p>
                    </div>
                    <a href={`tel:${lawyer.telefono}`} className="text-secondary font-bold hover:text-amber-400">{lawyer.telefono}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black bg-opacity-70 text-white text-center py-4 border-t-2 border-secondary">
        <p className="text-xs">© 2026 Abogado Virtual. Todos los derechos reservados. | Plataforma profesional de consultoría legal</p>
      </footer>
    </div>
  );
}
