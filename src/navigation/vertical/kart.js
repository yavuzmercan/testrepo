import { 
  Circle, 
  BookOpen
  } from 'react-feather'

export default [
  {
    id: 'kartlar',
    title: 'Kartlar',
    icon: <BookOpen size={20} />,
    children: [
      {
        id: 'hasta',
        title: 'Hasta & Müşteri',
        icon: <Circle size={12} />,
        navLink: '/kart/hastalar'
      },
      {
        id: 'depo',
        title: 'Depolar',
        icon: <Circle size={12} />,
        navLink: '/kart/depolar'
      },
      {
        id: 'doktor',
        title: 'Doktorlar',
        icon: <Circle size={12} />,
        navLink: '/kart/doktorlar'
      },
      {
        id: 'ezcane',
        title: 'Ezcaneler',
        icon: <Circle size={12} />,
        navLink: '/kart/ezcaneler'
      },
      {
        id: 'kurum',
        title: 'Kurumlar',
        icon: <Circle size={12} />,
        navLink: '/kart/kurumlar'
      },
      {
        id: 'tesis',
        title: 'Tesisler',
        icon: <Circle size={12} />,
        navLink: '/kart/tesisler'
      },
      {
        id: 'firma',
        title: 'Firmalar',
        icon: <Circle size={12} />,
        navLink: '/kart/firmalar'
      }
    ]
  }
]
