import SugestoesSeguidores from "./SugestoesSeguidores"
import Usuario from "./Usuario"

export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario loginFoto="assets/img/catanacomics.svg"
                loginUser="catanacomics"
                loginSubUser="Catana" />

            <SugestoesSeguidores />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}