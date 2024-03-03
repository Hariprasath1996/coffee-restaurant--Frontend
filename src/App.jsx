const App= () => {
  return ( 
  <nav className="nav-bar flex flex-row w-screen h-auto justify-center align-center ">
    <div>
      <img className="img-container " src="/assets/coffee-logo.jpg" alt="logo" />
    </div>
    <ul>
      <li>
        <a className=" " href="#">Home</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
      <li>
        <a href="#">Log-In</a>
      </li>
    </ul>
  </nav>

);
}

export default App
;