const App= () => {
  return ( 
  <nav className="nav-bar flex flex-row w-screen h-auto justify-center align-center ">
    <div className="img-container w-[50rem] h-auto flex flex-row justify-start items-start gap-8" >
      <img className="w-[4rem] rounded-xl  h- auto justify-start items-start  " src="/assets/coffee-logo.jpg" alt="logo" />
      <h1 className=" h-auto flex flex-row justify-center items-center mt-6 font-bold text-3xl ">Masaala coffee Bar</h1>
    </div>
    <ul className="sections-list w-[50rem] h-auto flex flex-row justify-start items-start gap-10 mt-8 font-bold text-2xl">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Cart</a>
      </li>
      <li className=" w-[50rem] h-auto flex flex-row justify-end items-end gap-20   ">
        <a href="#">Log-In</a>
      </li>
    </ul>
  </nav>

);
}

export default App
;