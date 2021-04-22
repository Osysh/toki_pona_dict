import logo from '../logo.svg';

export function Header(){
    return (<div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'center', padding: '0 25px'}}>
        <img style={{ width: 250 }} src={logo} alt="logo" />
        <button style={{ height: 50, borderRadius: '999px',   textDecoration: 'none', border: '2px solid #707070', backgroundColor: '#ffffff', width: 120 }}>Contribute</button>
    </div>);
}; 