const Companies = ({ props }) => {
  return (
    <div class={`w-80 h-80 mt-6 bg-secondary rounded-full`}>
      <div
        class={`w-80 h-80 mt-3 bg-white rounded-full grid justify-items-center items-center`}
      >
        <a
          id={`${props.title}-company`}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="hover:scale-105 ease-in duration-200"
            src={props.imagePath}
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Companies;
