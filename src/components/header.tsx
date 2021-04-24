import logo from '../logo.svg';

interface HeaderProps {
    contributeIsOpen: (isOpen: boolean) => void;
}

export function Header({ contributeIsOpen }: HeaderProps){

    return (<div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'center', padding: '0 25px'}}>
        <img style={{ width: 250 }} src={logo} alt="logo" />
        <button 
            style={{ height: 50, borderRadius: '999px',   /* textDecoration: 'none',*/ border: 'none', backgroundColor: '#37515F', color: '#F3B3A6', width: 120 }}
            onClick={() => { contributeIsOpen(true)}}
        >
            Contribute
        </button>
    </div>);
}; 