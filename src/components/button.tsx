type colorTypes = 'primary' | 'secondary' | 'danger'
type textTypes = 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl'

function NeoButton({handleClick, text, colorText, sizeText, moreStyle} : {text: string, handleClick: () => any, colorText: colorTypes, sizeText?: textTypes, moreStyle?: string}) {
    
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

    const toggleTextSize = () => {
        switch (sizeText) {
            case sizeText:
                return sizeText
            default:
                return 'text-2xl'
        }
    }
    
    return(
        <button className={"shadow-outerNeo mt-6 rounded-md py-2 font-bold text-2xl " + twText() + " " + toggleTextSize() + " " + moreStyle} onClick={handleClick}>
            {text}
        </button>
    )
}

export default NeoButton;