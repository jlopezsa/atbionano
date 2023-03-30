
const Companies = ({props}) => {
    return(
        <div class="w-80 h-80 mt-6 bg-[#3cc53c] rounded-full">
            <div class="w-80 h-80 mt-6 bg-[#ffffff] rounded-full grid justify-items-center items-center">
                <img src={props.imagePath} alt="logo" />
            </div>
        </div>
    )
}

export default Companies;