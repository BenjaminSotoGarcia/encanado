import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='Navbar'>
            <h1>El Encañado</h1>
            <div className='dentroNavbar'>
                <button>Cervezas</button>
                <button>Destilados</button>
                <button>Picoteo</button>
            </div>
        </nav>
    )
}

export default Navbar