import { Outlet } from 'react-router-dom'

export default function Root () {
  return (
    <>
      <div>
        Acá va el navbar
      </div>
      <Outlet />
      <div>
        Acá iría el footer
      </div>
    </>
  )
}
