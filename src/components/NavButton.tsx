import { NavLink } from 'react-router-dom'

interface NavButtonProps {
    to: string
    children: React.ReactNode
}

const NavButton = ({ to, children }: NavButtonProps) => (
    <NavLink to={to}>
        {({ isActive }) => (
            <button
                className={`w-full px-2 py-2 rounded-md ${
                    isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-800'
                }`}
            >
                {children}
            </button>
        )}
    </NavLink>
)

export default NavButton

