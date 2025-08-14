import Link from "next/link";

export default ({currentUser}) => {
    const links=[
       !currentUser && {label:'Sign Up', href:'/auth/signup'},
        !currentUser && {label:'Sign In', href:'/auth/signin'},
        currentUser && {label:'Sign Out', href:'/auth/signout'}
    ].filter(link => link) 
    .map(({label, href}) => {
        return (<li key={href} className="nav-item px-4">
            <Link href={href}>{label}</Link>
            </li>)
    });
    return <nav>
        <Link href="/" className="navbar-brand">GitTix</Link>
        <div className="d-flex justify-content-end">
            <ul className="nav d-flex justify-items-center">
                {links}
            </ul>
        </div>
    </nav>
}