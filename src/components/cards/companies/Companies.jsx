const Companies = ({props}) => {
    return(
        <div class="w-80 h-80 mt-6 bg-[#3cc53c] rounded-full">
            <div class="w-80 h-80 mt-3 bg-[#ffffff] rounded-full grid justify-items-center items-center">
                <a href={props.link}>
                    <img class="hover:scale-105 ease-in duration-300" src={props.imagePath} alt="logo" />
                </a>
            </div>
        </div>
    )
}

export default Companies;