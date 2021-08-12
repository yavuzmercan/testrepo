import { 
  Circle, 
  CreditCard
  } from 'react-feather'

export default [
  {
    id: 'satis',
    title: 'Satış',
    icon: <CreditCard size={20} />,
    children: [
      {
        id: 'yenisatis',
        title: 'Yeni Satış',
        icon: <Circle size={12} />,
        navLink: '/satis/yeni'
      },
      {
        id: 'receteli-satis',
        title: 'Reçeteli Satış',
        icon: <Circle size={12} />,
        navLink: '/satis/receteli-satis'
      },
      {
        id: 'satis-listesi',
        title: 'Satış Listesi',
        icon: <Circle size={12} />,
        navLink: '/satis/satis-listesi'
      }
    ]
  }
]
