
function Inicio() {
    
  return (
    <div class="container">
        
        <div class="row">
            <div class="col"></div>
                    
            <div class="col black">
                <div class="text-end">
                    <img src="" alt="" />
                </div>
                <h2 class="fw-bold text-center py-4">BIENVENIDO</h2>

                <form>
                    <div class="mb-4">
                        <label for="exampleInputEmail1" class="form-label">Ingrese su Email </label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label">Ingrese su Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div class="mb-4 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Mantenerme conectado</label>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
                    </div>
                    <div class="my-4">
                        <span>¿No tienes cuenta? <a href="#">Registrate aqui</a></span><br />
                        <span><a href="#">Recuperar Password</a></span>
                    </div>
                </form>

            </div>

            <div class="col"></div>

        </div>

    </div>

  )
}

export default Inicio


