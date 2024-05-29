const Header = () => {
  return (
    <div className="w-full px-24 sm:px-7 flex justify-between items-center py-6 bg-white">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05a362a5aae77077089789fc2ca4393aa96477510d5d3c278ecdeead042728ae?apiKey=23427d989e77478fa1b7f364de68a73c&"
        alt="First logo"
        className="self-start shrink-0 max-w-full aspect-[3.13] w-[125px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4578a9d9b1b67e6e12f9ec75264f837c27648381c50607cb8d09ccca7a5c58?apiKey=23427d989e77478fa1b7f364de68a73c&"
        alt="Square thumbnail"
        className="self-start shrink-0 rounded border border-yellow-500 aspect-square w-[42px] shadow-sm border-solid"
      />
    </div>
  )
}

export default Header