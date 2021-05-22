import { HeaderBar } from './HeaderBar'
export const Layout = ({ children }) => {
  return (
    <>
      <HeaderBar />
      {children}
    </>
  )
}

export default Layout