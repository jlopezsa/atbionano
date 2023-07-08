const CallsProcesses = ({props}) => {

    return(
        <div class={`relative -z-10 w-80 h-[280px] mt-6 bg-primary rounded-xl drop-shadow-md hover:drop-shadow-xl`}>
            <div class={`w-80 h-[200px] bg-tertiary rounded-t-xl grid justify-items-center items-center`}>
                <img class="w-80 h-auto" src={props.imagePath} alt="logo" />
            </div>
            <div class="h-[30px]text-xl font-bold text-white pl-[10px]">
                {props.title}
            </div>
            <div class="text-base text-white pl-[10px] pr-[10px]">
                {props.description}
            </div>
            <div class={`absolute inset-x-0 bottom-0 w-80 h-[30px] bg-secondary rounded-b-xl pl-[10px]`}>
                <p class="font-bold">{props.aditionalInfo}</p>
            </div>
        </div>
    )
}

export default CallsProcesses;