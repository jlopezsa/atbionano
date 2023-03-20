const KnowUs = ({props}) => {
    return(
        <div class="w-80 h-[400px] mt-6 bg-green-200 rounded-xl grid justify-items-center drop-shadow-md hover:drop-shadow-xl" >
            <div class="w-[300px]">
                <div class="h-[170px]">
                    <p>Imagen</p>
                </div>
                <div class="h-[35px]">
                    <p class="text-xl font-bold">{props.title}</p>
                </div>
                <div>
                    <p class="text-base h-[195px]">{props.content}</p>
                </div>
            </div>
        </div>
    )
}

export default KnowUs;