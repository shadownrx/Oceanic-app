import React from 'react'
import { Link } from 'react-router-dom'
import { Home, User, ShoppingBag, Shield, Calendar, PlaneTakeoff, Sun, Moon, LogOut } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const { isAuthenticated, logout } = useAuth()

  return (
    <header className={`${darkMode ? 'bg-blue-900' : 'bg-blue-600'} text-white shadow-md`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Oceanic Reward</Link>
        <div className="flex space-x-4 items-center">
          <Link to="/" className="flex items-center"><Home className="mr-1" size={18} /> Inicio</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="flex items-center"><User className="mr-1" size={18} /> Perfil</Link>
              <Link to="/market" className="flex items-center"><ShoppingBag className="mr-1" size={18} /> Mercado</Link>
              <Link to="/admin" className="flex items-center"><Shield className="mr-1" size={18} /> Admin</Link>
              <Link to="/calendar" className="flex items-center"><Calendar className="mr-1" size={18} /> Eventos</Link>
              <Link to="/flight-log" className="flex items-center"><PlaneTakeoff className="mr-1" size={18} /> Registro de Vuelos</Link>
              <button onClick={logout} className="flex items-center"><LogOut className="mr-1" size={18} /> Cerrar sesión</button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center">Iniciar sesión</Link>
              <Link to="/register" className="flex items-center">Registrarse</Link>
            </>
          )}
          <button onClick={toggleDarkMode} className="flex items-center">
            {darkMode ? <Sun className="mr-1" size={18} /> : <Moon className="mr-1" size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header