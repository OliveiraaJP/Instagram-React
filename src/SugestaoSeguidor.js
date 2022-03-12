export default function SugestaoSeguidor(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.userFoto} alt="" />
                <div class="texto">
                    <div class="nome">{props.userName}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}