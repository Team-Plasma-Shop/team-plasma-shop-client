type colorTypes = 'primary' | 'secondary' | 'danger'

function NeoButton({handleClick, text, colorText} : {text: string, handleClick: () => any,colorText: colorTypes}){
    
    const twText = () => {
        switch (colorText) {
            case 'primary':
                return 'primary-glow-text'
                case 'secondary':
                return 'secondary-glow-text'
                case 'danger':
                return 'danger-glow-text'
            default:
                return 'primary-glow-text'
        }
    }
    
    return(
        <button className={"shadow-outerNeo mt-6 rounded-md py-2 font-bold text-2xl " + twText()} onClick={handleClick}>
            {text}
        </button>
    )
}

export default NeoButton