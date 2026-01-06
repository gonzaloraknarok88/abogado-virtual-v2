'use client';
import { useState } from 'react';

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
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #001a4d 0%, #003d7a 50%, #001a4d 100%)', display: 'flex', flexDirection: 'column' }}>
      {/* NAV */}
      <nav style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: 'white', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #d4af37' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#d4af37', margin: 0 }}>⚖️ ABOGADO VIRTUAL</h1>
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 'bold' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>FAQ</a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: '500px' }}>
          {/* INFO SECTION */}
          <div style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37, #ffd700)', border: '4px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', boxShadow: '0 0 30px rgba(0,0,0,0.5)', animation: 'pulse 2s infinite' }}>
                👤
              </div>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#d4af37', margin: '0 0 8px 0' }}>ABOGADO VIRTUAL</h2>
            <p style={{ fontSize: '18px', fontWeight: '300', margin: '0 0 8px 0' }}>ABOGADO MATCH</p>
            <p style={{ fontSize: '14px', color: '#b0b0b0', margin: 0 }}>Tu plataforma de consultoría legal online</p>
          </div>

          {/* LOGIN CARD */}
          <div style={{ background: 'rgba(255,255,255,0.98)', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.3)', padding: '40px', border: '4px solid #d4af37' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#001a4d', textAlign: 'center', margin: '0 0 8px 0' }}>INGRESA A TU CUENTA</h3>
            <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '24px' }}>Acceso rápido y seguro</p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#001a4d', marginBottom: '8px' }}>CORREO ELECTRÓNICO</label>
                <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #d4af37', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#001a4d', marginBottom: '8px' }}>CONTRASEÑA</label>
                <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '2px solid #d4af37', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <button style={{ background: 'linear-gradient(135deg, #d4af37, #ffd700)', color: '#001a4d', fontWeight: 'bold', padding: '14px 20px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '16px', marginTop: '12px', transition: 'transform 0.3s', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>INGRESAR</button>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', marginTop: '16px' }}>
                <a href="#" style={{ color: '#001a4d', textDecoration: 'none' }}>Olvidé mi contraseña</a>
                <a href="#" style={{ color: '#001a4d', textDecoration: 'none' }}>Crear cuenta</a>
              </div>
            </form>
          </div>

          {/* ABOGADOS PRO */}
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: '20px', fontSize: '18px', borderBottom: '2px solid #d4af37', paddingBottom: '12px' }}>ABOGADOS PREMIUM PRO</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {LAWYERS.map((lawyer) => (
                <div key={lawyer.id} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '16px', border: '2px solid #d4af37', color: 'white', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div>
                      <p style={{ fontWeight: 'bold', fontSize: '16px', color: '#d4af37', margin: 0 }}>{lawyer.nombre}</p>
                      <p style={{ fontSize: '12px', color: '#ddd', margin: '4px 0 0 0' }}>{lawyer.especialidad}</p>
                    </div>
                    <span style={{ background: '#d4af37', color: '#001a4d', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold' }}>PRO</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#ddd', margin: '8px 0 0 0' }}><strong>Tel:</strong> <a href={`tel:${lawyer.telefono}`} style={{ color: '#d4af37', textDecoration: 'none' }}>{lawyer.telefono}</a></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: 'rgba(0,0,0,0.7)', color: 'white', textAlign: 'center', padding: '16px', borderTop: '2px solid #d4af37', fontSize: '12px' }}>
        <p style={{ margin: 0 }}>© 2026 Abogado Virtual. Todos los derechos reservados. | Plataforma profesional de consultoría legal</p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
