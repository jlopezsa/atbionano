import {Color} from "../../../configs/colors"

const Companies = ({props}) => {
    return(
        <div class={`w-80 h-80 mt-6 bg-[${Color.greenLime}] rounded-full`}>
            <div class={`w-80 h-80 mt-3 bg-[${Color.white}] rounded-full grid justify-items-center items-center`}>
                <a href={props.link}>
                    <img class="hover:scale-105 ease-in duration-200" src={props.imagePath} alt="logo" />
                </a>
            </div>
        </div>
    )
}

export default Companies;