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
  { id: '1', nombre: 'Rayén', especialidad: 'Derecho Laboral & Penal', telefono: '+56 9 1234 5678', isPro: true },
  { id: '2', nombre: 'Yuri', especialidad: 'Derecho Civil & Familia', telefono: '+56 9 9876 5432', isPro: true },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState('inicio');

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary to-blue-900">
      {/* HEADER PROFESIONAL */}
      <header className="bg-primary text-white p-4 border-b-4 border-secondary shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-2">⚖️ ABOGADO VIRTUAL</h1>
          <p className="text-xl md:text-2xl font-semibold text-white">ABOGADO MATCH! Escoge tu abogado</p>
        </div>
      </header>

      {/* SECCIÓN DE ABOGADOS PRO */}
      <section className="bg-primary text-white p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary border-b-2 border-secondary pb-3">Nuestros Abogados Premium PRO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LAWYERS.map((lawyer) => (
              <div key={lawyer.id} className="bg-white text-gray-900 rounded-lg shadow-xl p-6 border-4 border-secondary hover:shadow-2xl transition transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary">{lawyer.nombre}</h3>
                  {lawyer.isPro && (
                    <span className="bg-secondary text-primary px-3 py-1 rounded-full font-bold text-sm">PRO</span>
                  )}
                </div>
                <p className="text-lg text-gray-700 mb-2"><strong>Especialidad:</strong> {lawyer.especialidad}</p>
                <p className="text-lg text-gray-700 mb-4"><strong>Teléfono:</strong> <a href={`tel:${lawyer.telefono}`} className="text-secondary hover:underline">{lawyer.telefono}</a></p>
                <button className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-yellow-400 transition">
                  Contactar a {lawyer.nombre}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL DE BIENVENIDA */}
      <section className="bg-gradient-to-b from-blue-900 to-primary text-white p-6 md:p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenido a Abogado Virtual</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">Conecta con los mejores abogados de forma rápida y segura</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border-2 border-secondary">
              <p className="text-4xl mb-2">⚡</p>
              <h3 className="text-xl font-bold mb-2">Rápido</h3>
              <p>Acceso inmediato a abogados calificados</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border-2 border-secondary">
              <p className="text-4xl mb-2">🔒</p>
              <h3 className="text-xl font-bold mb-2">Seguro</h3>
              <p>Tus datos protegidos y confidenciales</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 border-2 border-secondary">
              <p className="text-4xl mb-2">✓</p>
              <h3 className="text-xl font-bold mb-2">Profesional</h3>
              <p>Abogados verificados y certificados</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/formulario" className="bg-secondary text-primary font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition text-lg">
              Crear Nuevo Caso
            </Link>
            <Link href="/elegir-abogado" className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition text-lg">
              Elegir Abogado
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ESPECIALIDADES */}
      <section className="bg-primary text-white p-6 md:p-8 border-t-4 border-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Especialidades Disponibles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Laboral', 'Civil', 'Penal', 'Familia', 'Comercial', 'Administrativo'].map((specialty) => (
              <div key={specialty} className="bg-white bg-opacity-10 border-2 border-secondary rounded-lg p-4 text-center hover:bg-opacity-20 transition">
                <p className="font-bold text-lg">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center p-4 border-t-4 border-secondary">
        <p className="text-sm md:text-base">© 2026 Abogado Virtual. Todos los derechos reservados. | Plataforma profesional de consultoría legal</p>
      </footer>
    </main>
  );
}
