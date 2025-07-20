const Companies = ({ props }) => {
  return (
    <li className={`mx-5 mt-6 h-80 w-80 rounded-full bg-secondary md:mx-20`}>
      <div
        className={`mt-3 grid h-80 w-80 items-center justify-items-center rounded-full bg-white`}
      >
        <a
          id={`${props.title}-company`}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="max-w-60 h-auto w-60 duration-200 ease-in hover:scale-105"
            src={props.imagePath}
            alt="logo"
          />
        </a>
      </div>
    </li>
  )
}

export default Companies
