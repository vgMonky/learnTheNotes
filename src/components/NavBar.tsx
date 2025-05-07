import NavButton from './NavButton'

const NavBar = () => (
    <nav className="bg-white shadow p-4">
        <ul className="flex gap-4">
            <li className="w-24"><NavButton to="/notes">Notes</NavButton></li>
            <li className="w-24"><NavButton to="/scales">Scales</NavButton></li>
            <li className="w-24"><NavButton to="/whatever">Whatever</NavButton></li>
        </ul>
    </nav>
)

export default NavBar

