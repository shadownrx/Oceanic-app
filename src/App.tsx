import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Market from './pages/Market'
import AdminPanel from './pages/AdminPanel'
import Calendar from './pages/Calendar'
import FlightLog from './pages/FlightLog'
import Register from './pages/Register'
import { ThemeProvider } from './contexts/ThemeContext'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  return (
    <>
      <SignedIn>{element}</SignedIn>
      <SignedOut><RedirectToSignIn /></SignedOut>
    </>
  );
};

const AdminRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  // TODO: Implement admin check
  return <PrivateRoute element={element} />;
};

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
                <Route path="/market" element={<PrivateRoute element={<Market />} />} />
                <Route path="/admin" element={<AdminRoute element={<AdminPanel />} />} />
                <Route path="/calendar" element={<PrivateRoute element={<Calendar />} />} />
                <Route path="/flight-log" element={<PrivateRoute element={<FlightLog />} />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default App