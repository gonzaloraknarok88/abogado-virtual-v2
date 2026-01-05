'use client';
import { useState, useEffect } from 'react';

interface Lead {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  tipoCaso: string;
  descripcion: string;
  estado: string;
  fecha: string;
}

const DEMO_LEADS: Lead[] = [
  { id: '1', nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '555-0101', tipoCaso: 'Laboral', descripcion: 'Demanda por despido injustificado', estado: 'Nuevo', fecha: '2024-01-15' },
  { id: '2', nombre: 'María García', email: 'maria@example.com', telefono: '555-0102', tipoCaso: 'Civil', descripcion: 'Conflicto de herencia', estado: 'En proceso', fecha: '2024-01-16' },
  { id: '3', nombre: 'Carlos López', email: 'carlos@example.com', telefono: '555-0103', tipoCaso: 'Penal', descripcion: 'Defensa en caso de fraude', estado: 'Cerrado', fecha: '2024-01-17' },
  { id: '4', nombre: 'Ana Martínez', email: 'ana@example.com', telefono: '555-0104', tipoCaso: 'Familia', descripcion: 'Custodia de menores', estado: 'Nuevo', fecha: '2024-01-18' },
  { id: '5', nombre: 'Roberto Fernández', email: 'roberto@example.com', telefono: '555-0105', tipoCaso: 'Laboral', descripcion: 'Reclamo de horas extras', estado: 'En proceso', fecha: '2024-01-19' }
];

export default function Home() {
  const [leads, setLeads] = useState<Lead[]>(DEMO_LEADS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredLeads = leads.filter(lead => {
    const matchSearch = lead.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = !filterType || lead.tipoCaso === filterType;
    const matchStatus = !filterStatus || lead.estado === filterStatus;
    return matchSearch && matchType && matchStatus;
  });

  const caseTypes = ['Laboral', 'Civil', 'Penal', 'Familia', 'Comercial'];
  const statuses = ['Nuevo', 'En proceso', 'Cerrado'];

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Abogado Virtual</h1>
          <p className="text-gray-600">Dashboard de gestión de leads y casos</p>
        </div>

        {/* Filters Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filtros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Buscar por nombre o email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Case Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los tipos</option>
              {caseTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Todos los estados</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            {/* Reset */}
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterType('');
                setFilterStatus('');
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            >
              Limpiar filtros
            </button>
          </div>
        </div>

        {/* Results Summary */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-gray-700">Se encontraron <span className="font-bold text-blue-600">{filteredLeads.length}</span> de <span className="font-bold">{leads.length}</span> leads</p>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredLeads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b border-gray-300">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nombre</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Teléfono</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tipo de Caso</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Estado</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, index) => (
                    <tr key={lead.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}>
                      <td className="px-4 py-3 text-sm text-gray-900 font-medium">{lead.nombre}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{lead.email}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{lead.telefono}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {lead.tipoCaso}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          lead.estado === 'Nuevo' ? 'bg-green-100 text-green-800' :
                          lead.estado === 'En proceso' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {lead.estado}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{lead.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500 text-lg">No se encontraron leads con los filtros seleccionados</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
