import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
            <h3>today is</h3>
            <h1>{new Date().toDateString().toLowerCase()}🤎</h1>
        </div>
    );
}
export default Header;