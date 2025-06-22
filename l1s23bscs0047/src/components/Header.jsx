function Header () {
     return (

      <div className="mj-navbar">
        <div className="mj-brand"><i><b>Flipmart</b></i></div>
        <div className="mj-categories">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Electronics</a>
          <a href="#">Furniture</a>
          <a href="#">Pages</a>
          <a href="#">Custom</a>
        </div>
        <div className="mj-search">
          <div className="mj-searchicon">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <input placeholder="Search" className="mj-searchbar" />
          <div className="mj-menus">
            <div className="mj-cart">
              <i className="fa-solid fa-cart-shopping" style={{color: 'white'}} />
            </div>
            <div className="mj-menu">
              <i className="fa-solid fa-bars" style={{color: 'white'}} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header;