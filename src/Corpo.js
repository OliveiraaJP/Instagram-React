import Stories from './Stories'
import Sidebar from './Sidebar'
import Conteudo from './Conteudo'

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                {<Stories />}

                {<Conteudo />}
            </div>

            {<Sidebar />}
        </div>
    )
}