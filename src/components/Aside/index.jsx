import AsideLogo from "../../assets/iconeNav.svg"

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