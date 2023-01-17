
export async function generarToken(){

    const grant_type="grant_type=client_credentials"
    const client_secret="client_secret=2244d9b8eb3545e493941c38b71a556e"
    const client_id="client_id=30fe01f9a2bc400a89e4237f614179b5"

    let url="https://accounts.spotify.com/api/token"

    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:grant_type+"&"+client_secret+"&"+client_id
    }

    let respuesta=await fetch(url,peticion)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.acces_token

return(tokenDefinitivo)
    
}