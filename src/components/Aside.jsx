import AsideLogo from "../assets/logo.svg"

const Aside = () => {
    return (
        <aside className="aside">
        <div className="col">
            <img src={AsideLogo} alt="icone"/>
        </div>
        <p>Copiryght, SportSee 2020</p>
        </aside>
    );
};

export default Aside;