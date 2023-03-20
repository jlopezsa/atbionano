//import image from "../../../images/laboratory-unsplash.jpg"

const CallsProcesses = ({props}) => {

    return(
        <div class="relative w-80 h-[400px] mt-6 bg-[#151F12] rounded-xl drop-shadow-md hover:drop-shadow-xl">
            <div class="w-80 h-[200px] bg-[#c2e4b8] rounded-t-xl">
                <img class="w-80 h-[200px] rounded-t-xl" src={props.imagePath} alt="logo" />
            </div>
            <div class="h-[30px]text-xl font-bold text-white pl-[10px]">
                {props.title}
            </div>
            <div class="text-base text-white pl-[10px] pr-[10px]">
                {props.description}
            </div>
            <div class="absolute inset-x-0 bottom-0 w-80 h-[30px] bg-[#3cff00] rounded-b-xl pl-[10px]">
                {props.aditionalInfo}
            </div>
        </div>
    )
}

export default CallsProcesses;