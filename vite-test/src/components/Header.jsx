const Header = () => {
    const baseURL = import.meta.env.VITE_APP_URL
    return <h1>{baseURL}</h1>
};
export default Header
