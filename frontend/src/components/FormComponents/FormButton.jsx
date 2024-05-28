export default function FormButton({ buttonText }){
    return(
        <button className="m-1 btn btn-primary btn-lg btn-block">
            {
                buttonText ? ( buttonText ) : ("Submit")
            }
        </button>
    );
};