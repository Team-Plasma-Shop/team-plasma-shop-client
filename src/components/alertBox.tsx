
function AlertBox({ message }: { message: string }) {

    return (
       <div className="absolute top-0 text-2xl left-1/2 -translate-x-1/2 p-5 bg-background-light w-full text-center">
            <span className="text-center">{message}</span>
        </div>
    )
}

export default AlertBox;