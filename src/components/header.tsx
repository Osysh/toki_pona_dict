import logo from '../logo.svg';

export function Header(){
    return (<div style={{ display: 'flex', justifyContent: 'space-between', height: '100%', alignItems: 'center', padding: '0 25px'}}>
        <img style={{ width: 250 }} src={logo} alt="logo" />
        <button style={{ height: 50 }}>Contribute</button>
    </div>);
}; 