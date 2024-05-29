import assets from "../assets"

const { Logo, Call } = assets

const Header = () => {
  return (
    <div className="w-full px-24 sm:px-7 flex justify-between items-center py-6 bg-white">
      <img
        loading="lazy"
        src={Logo}
        alt="First logo"
        className="self-start shrink-0 max-w-full aspect-[3.13] w-[125px]"
      />
      <img
        loading="lazy"
        src={Call}
        alt="phone"
        className="self-start shrink-0 rounded border border-yellow-500 aspect-square w-[42px] shadow-sm border-solid"
      />
    </div>
  )
}

export default Header