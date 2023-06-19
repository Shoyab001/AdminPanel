import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const UserManagment = React.lazy(() => import('./views/UserManagment/UserManagment'))
const DeclareResult = React.lazy(() => import('./views/DeclareResult/DeclareResult'))
const WalletManagment = React.lazy(() => import('./views/walletManagment/walletManagment'))
const ContactSetting = React.lazy(() => import('./views/contactSetting/contactSetting'))
const PaymentManagment = React.lazy(() => import('./views/paymentManagment/paymentManagment'))
const SliderImage = React.lazy(() => import('./views/sliderImage/sliderImage'))
const BetFilter = React.lazy(() => import('./views/bitFilter/bitFilter'))
const ProfitLoss = React.lazy(() => import('./views/profitLoss/profitLoss'))
const Winning = React.lazy(() => import('./views/winning/winning'))
const Notice = React.lazy(() => import('./views/notic/notic'))
const GameManagement = React.lazy(() => import('./views/gameManagement/gamemanagement'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/UserManagment', name: 'UserManagment', element: UserManagment },
  { path: '/walletManagment', name: 'Wallet Managment', element: WalletManagment },
  { path: '/declareResult', name: 'Declare Result', element: DeclareResult },
  { path: '/contactSetting', name: 'Contact Setting', element: ContactSetting },
  { path: '/paymentManagment', name: 'Payment Managment', element: PaymentManagment },
  { path: '/sliderImage', name: 'Slider Image', element: SliderImage },
  { path: '/betFilter', name: 'Bet Filter', element: BetFilter },
  { path: '/profitLoss', name: 'Profit Loss', element: ProfitLoss },
  { path: '/winning', name: 'Winning', element: Winning },
  { path: '/notice', name: 'Notice', element: Notice },
  { path: '/gameManagement', name: 'Game Management', element: GameManagement },
]

export default routes
