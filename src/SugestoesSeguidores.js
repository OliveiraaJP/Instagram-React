import SugestaoSeguidor from "./SugestaoSeguidor"


const seguidores = [
    {foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibe.memes"},
    {foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibe.memes"},
    {foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibe.memes"},
    {foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibe.memes"},
    {foto: "assets/img/bad.vibes.memes.svg", nome: "bad.vibe.memes"}
]


export default function SugestoesSeguidores() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <SugestaoSeguidor userFoto="assets/img/bad.vibes.memes.svg" userName="bad.vibes.memes"/>
            <SugestaoSeguidor userFoto="assets/img/chibirdart.svg" userName="chibirdart"/>
            <SugestaoSeguidor userFoto="assets/img/razoesparaacreditar.svg" userName ="razoes"/>
            <SugestaoSeguidor userFoto="assets/img/adorable_animals.svg" userName="ame.animais"/>
            <SugestaoSeguidor userFoto="assets/img/smallcutecats.svg" userName="smallcutecats"/>
        </div>
    )
}