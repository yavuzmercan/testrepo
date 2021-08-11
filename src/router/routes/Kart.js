import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const KartRoutes = [
  {
    path: '/kart/hastalar',
    component: lazy(() => import('../../views/kart/hastalar'))
  },
  {
    path: '/kart/depolar',
    component: lazy(() => import('../../views/kart/depolar'))
  },
  {
    path: '/kart/doktorlar',
    component: lazy(() => import('../../views/kart/doktorlar'))
  },
  {
    path: '/kart/ezcaneler',
    component: lazy(() => import('../../views/kart/ezcaneler'))
  },
  {
    path: '/kart/kurumlar',
    component: lazy(() => import('../../views/kart/kurumlar'))
  },
  {
    path: '/kart/tesisler',
    component: lazy(() => import('../../views/kart/tesisler'))
  },
  {
    path: '/kart/firmalar',
    component: lazy(() => import('../../views/kart/firmalar'))
  }
]

export default KartRoutes
