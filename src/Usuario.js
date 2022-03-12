export default function Usuario(props){
    return(
        <div class="usuario">
                    <img src={props.loginFoto} alt="" />
                    <div class="texto">
                        <strong>{props.loginUser}</strong>
                        {props.loginSubUser}
                    </div>
                </div>
    )
}

//"assets/img/catanacomics.svg"

//catanacomics

//Catana