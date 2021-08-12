import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const KartRoutes = [
  {
    path: '/satis/yeni',
    component: lazy(() => import('../../views/satis/yeni'))
  },
  {
    path: '/satis/receteli-satis',
    component: lazy(() => import('../../views/satis/receteliSatis'))
  },
  {
    path: '/satis/satis-listesi',
    component: lazy(() => import('../../views/satis/satisListesi'))
  }
]

export default KartRoutes
