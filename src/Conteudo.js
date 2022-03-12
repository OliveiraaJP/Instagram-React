import Post from "./Post";

export default function Conteudo() {
    return (
        <div class="posts">
            <Post urlUser="assets/img/meowed.svg"  userName= "meowed" urlPost="assets/img/gato-telefone.svg"  />
            <Post urlUser="assets/img/barked.svg" userName= "barked"  urlPost="assets/img/dog.svg" />
        </div>
    );
}