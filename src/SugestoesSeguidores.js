import SugestaoSeguidor from "./SugestaoSeguidor"


const seguidores = [
    {foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibe.memes"},
    {foto: "assets/img/chibirdart.svg", nome: "chibirdart"},
    {foto: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar"},
    {foto: "assets/img/adorable_animals.svg", nome: "adorable.animais"},
    {foto: "assets/img/smallcutecats.svg", nome: "smallcutecats"}
]


export default function SugestoesSeguidores() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {seguidores.map(user => <SugestaoSeguidor userFoto={user.foto}userName={user.nome}/>)}
        </div>
    )
}