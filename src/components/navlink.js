import '../App.css';

function NavLink(props) {
    return (
        <button className="navbutton">
            <h2>
                <a href={props.url}>{props.name}</a>
            </h2>   
        </button>         
    );
}

export default NavLink;
