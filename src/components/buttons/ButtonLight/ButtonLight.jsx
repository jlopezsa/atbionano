export const ButtonLight = ({
    message
}) => {
    return (
        <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                    hover:bg-primary-600 
                    hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-secondary-600 
                    focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none 
                    focus:ring-0 
                    active:bg-primary active:text-secondary
                    active:shadow-[0_8px_9px_-4px] bg-primary
                    ">
                    {message}
                </button>
    )
}