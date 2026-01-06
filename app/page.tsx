'use client';
import { useState } from 'react';

interface Lawyer {
  id: string;
  nombre: string;
  especialidad: string;
  telefono: string;
  isPro: boolean;
  imagen?: string;
}

const LAWYERS: Lawyer[] = [
  { id: '1', nombre: 'Rayén', especialidad: 'Laboral, Empresas, Familia, Migración', telefono: '+56 9 1234 5678', isPro: true, imagen: '👩‍⚖️' },
  { id: '2', nombre: 'Yuri', especialidad: 'Penal', telefono: '+56 9 9876 5432', isPro: true, imagen: '👨‍⚖️' },
];

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', flexDirection: 'column', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* NAVBAR */}
      <nav style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '28px' }}>⚖️</span>
          <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'white', margin: '0', letterSpacing: '-0.5px' }}>Abogado Virtual</h1>
        </div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500', color: 'rgba(255, 255, 255, 0.8)' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#a8dadc'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Inicio</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#a8dadc'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>Contacto</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#a8dadc'} onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>FAQ</a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
            {/* LOGIN CARD */}
            <div style={{ background: 'rgba(255, 255, 255, 0.95)', borderRadius: '20px', padding: '48px', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)', border: '1px solid rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }}>
              <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 8px 0' }}>Bienvenido</h2>
                <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>Tu plataforma de consultoría legal online</p>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</label>
                  <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e0e0e0', fontSize: '14px', boxSizing: 'border-box', transition: 'all 0.3s', outline: 'none' }} onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'} onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#1a1a1a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contraseña</label>
                  <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '2px solid #e0e0e0', fontSize: '14px', boxSizing: 'border-box', transition: 'all 0.3s', outline: 'none' }} onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'} onBlur={(e) => e.currentTarget.style.borderColor = '#e0e0e0'} />
                </div>

                <button style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', fontWeight: '600', padding: '14px 20px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '15px', marginTop: '8px', transition: 'all 0.3s', boxShadow: '0 10px 25px rgba(102, 126, 234, 0.4)' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)'; }}>Ingresar</button>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginTop: '8px', gap: '12px' }}>
                  <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#764ba2'} onMouseLeave={(e) => e.currentTarget.style.color = '#667eea'}>{"Olvidaste tu contraseña?"}</a>
                  <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#764ba2'} onMouseLeave={(e) => e.currentTarget.style.color = '#667eea'}>{"Crear cuenta"}</a>
                </div>
              </form>
            </div>

            {/* LAWYERS CARD */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <h3 style={{ color: 'white', fontSize: '18px', fontWeight: '700', margin: '0 0 24px 0' }}>Nuestros Abogados</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {LAWYERS.map((lawyer) => (
                    <div key={lawyer.id} style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.15)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'; e.currentTarget.style.transform = 'translateY(-4px)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                        <div style={{ fontSize: '40px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '12px' }}>{lawyer.imagen}</div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontWeight: '700', fontSize: '16px', color: 'white', margin: '0' }}>{lawyer.nombre}</p>
                          <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)', margin: '4px 0 0 0' }}>{lawyer.especialidad}</p>
                        </div>
                        <span style={{ background: '#a8dadc', color: '#2d3436', padding: '4px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>PRO</span>
                      </div>
                      <a href={`tel:${lawyer.telefono}`} style={{ display: 'inline-block', color: '#a8dadc', textDecoration: 'none', fontSize: '13px', fontWeight: '600', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = '#a8dadc'}>{"📞 " + lawyer.telefono}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: 'rgba(0, 0, 0, 0.15)', color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', padding: '20px', fontSize: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <p style={{ margin: '0' }}>© 2026 Abogado Virtual. Todos los derechos reservados.</p>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          div { word-break: break-word; }
        }
      `}</style>
    </div>
  );
}
