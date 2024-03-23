export const AuthInput = ({type, placeholder, name, handler}) => {


    return(
        <input type={type}  placeholder={placeholder} name={name} onChange={(e) => handler(e)} required></input>
    )
}