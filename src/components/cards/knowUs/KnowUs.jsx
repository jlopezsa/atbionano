const KnowUs = ({ props }) => {
  return (
    <div
      class={`-z-10 w-80 h-[450px] mt-6 bg-tertiary rounded-xl grid justify-items-center drop-shadow-md hover:drop-shadow-xl`}
      data-te-animation-init
      data-te-animation-reset="true"
      data-te-animation="[slide-right_1s_ease-in-out]"
    >
      <div class="w-[300px]">
        <div class="h-[170px]">
          <img
            class="w-[120px] h-[120px] pt-[20px]"
            src={props.imagePath}
            alt="icon"
          />
        </div>
        <div class="h-[35px]">
          <p class="text-xl font-bold">{props.title}</p>
        </div>
        <div>
          <p class="text-base h-[195px]">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
