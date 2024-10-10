import React, { useState, useEffect } from 'react'
import { Medal } from 'lucide-react'

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    // TODO: Fetch profile data from FSAirlines API
    // For now, we'll use mock data
    setProfile({
      name: 'John Doe',
      exp: 1000,
      medals: ['Gold Pilot', 'Long Haul Expert'],
      licenses: ['Commercial Pilot', 'Instrument Rating']
    })
  }, [])

  if (!profile) return <div>Cargando perfil...</div>

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">{profile.name}</h1>
      <p className="text-xl mb-4">Experiencia: {profile.exp} puntos</p>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Medallas</h2>
        <ul className="list-disc list-inside">
          {profile.medals.map((medal: string, index: number) => (
            <li key={index} className="flex items-center mb-2">
              <Medal className="mr-2 text-yellow-500" size={20} />
              {medal}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Licencias</h2>
        <ul className="list-disc list-inside">
          {profile.licenses.map((license: string, index: number) => (
            <li key={index}>{license}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Profile