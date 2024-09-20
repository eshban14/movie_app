import './Header.css'

const Header = () => {
    return(
        <div className="header">
            

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
     
      <div class="navbar-brand">YourLogo</div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <button class="nav-link btn btn-link" type="button">Home</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-link" type="button">About</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-link" type="button">Services</button>
          </li>
          <li class="nav-item">
            <button class="nav-link btn btn-link" type="button">Contact</button>
          </li>
        </ul>

      
        <button class="btn btn-outline-danger btn-custom" type="button">Sign In</button>
        <button class="btn btn-primary btn-custom" type="button">Sign Up</button>
      </div>
    </div>
  </nav>

        </div>
    )
}

export default Header;