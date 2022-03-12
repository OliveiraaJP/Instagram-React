const usuarios = [
    {img: "assets/img/9gag.svg", user: "9gag"},
    {img: "assets/img/meowed.svg", user: "meowed"},
    {img: "assets/img/barked.svg", user: "barked"},
    {img: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
    {img: "assets/img/wawawicomics.svg", user: "wawawicomics"},
    {img: "assets/img/respondeai.svg", user: "respondeai"},
    {img: "assets/img/filomoderna.svg", user: "filomoderna"},
    {img: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}
]


const perfis = usuarios.map(user =>
    <div class="story">
        <div class="imagem">
            <img src={user.img} alt="" />
        </div>
        <div class="usuario">
            {user.user}
        </div>
    </div>)


export default function Stories() {
    return (
        <div class="stories">
            {perfis}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}





