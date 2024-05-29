import * as React from "react";

type FeatureCardProps = {
  src: string;
  alt: string;
  title: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ src, alt, title }) => (
  <div className="flex flex-col flex-1 px-7 py-4 bg-white rounded-md shadow-sm">
    <img loading="lazy" src={src} alt={alt} className="self-center w-7 aspect-square" />
    <div className="mt-3.5 text-center text-sm font-medium text-gray-800">{title}</div>
  </div>
);

type SpaceCardProps = {
  location: string;
  imgSrc: string;
  imgAlt: string;
  workspaceIconSrc: string;
  workspaceIconAlt: string;
  workspaceName: string;
};

const SpaceCard: React.FC<SpaceCardProps> = ({
  location,
  imgSrc,
  imgAlt,
  workspaceIconSrc,
  workspaceIconAlt,
  workspaceName
}) => (
  <div className="flex flex-col py-3.5 mt-4 w-full max-w-xs font-medium bg-white rounded-lg border border-solid shadow-sm border-stone-200 border-opacity-80">
    <div className="flex z-10 flex-col px-3">
      <div className="flex gap-5 justify-between text-lg font-semibold text-gray-800">
        <div className="my-auto">{location}</div>
        <img loading="lazy" src={imgSrc} alt={imgAlt} className="shrink-0 w-11 rounded-md border-0 border-solid aspect-square border-stone-200" />
      </div>
      <div className="flex overflow-hidden relative flex-col pt-2 pb-20 mt-4 w-full text-xs tracking-widest text-yellow-500 whitespace-nowrap aspect-[1.69]">
        <img loading="lazy" src={imgSrc} alt={imgAlt} className="object-cover absolute inset-0 size-full" />
        <div className="flex relative gap-2 justify-center p-2 mb-8 rounded border-0 border-solid shadow-sm border-yellow-500 border-opacity-50">
          <img loading="lazy" src={workspaceIconSrc} alt={workspaceIconAlt} className="shrink-0 my-auto w-3 aspect-square" />
          <div className="mt-2.5">{workspaceName}</div>
        </div>
      </div>
      <div className="justify-center self-end px-1.5 py-1.5 mt-3 mr-10 text-xs bg-gray-800 rounded border border-gray-800 border-solid text-stone-50">20% Discount</div>
    </div>
    <div className="flex gap-3 self-center mt-0">
      <div className="flex flex-1 gap-5 justify-between px-3 py-2.5 rounded-md border border-solid bg-stone-50 border-stone-200">
        <div className="flex flex-col">
          <div className="text-xs text-stone-600">Day Pass</div>
          <div className="mt-3 text-xl text-gray-800 text-opacity-80">
            <span className="text-lg font-semibold">₹ 249</span>
            <span className="text-xs text-gray-800">/Day</span>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cf421f996ba5d481b3890f448fa960521efb6da134a56febb788ce1f8ce703d?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="" className="shrink-0 my-auto w-1.5 aspect-[0.55] fill-gray-800" />
      </div>
      <div className="flex flex-1 gap-2.5 px-3 py-2.5 bg-amber-300 rounded-md border border-amber-400 border-solid shadow-sm">
        <div className="flex flex-col">
          <div className="text-xs text-stone-700">Bulk Pass</div>
          <div className="mt-3.5 text-xl text-gray-800 text-opacity-80">
            <span className="text-lg font-semibold">₹ 2400</span>
            <span className="text-xs text-gray-800">/10 Days</span>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/65523f4f54201ad01d1eca1af2f92a0b6aff63005aaa17b177e7a653e82c450e?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="" className="shrink-0 my-auto w-1.5 aspect-[0.55] fill-gray-800" />
      </div>
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  const features = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f918a294f4637798b19ab3b618a403be133d1a5f684ded0b62730944c1fab5a?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Community Events Icon", title: "Community Events" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a0e53ea28d6f73ad562e9c58085a70479b27d30940338c411a95dd9b4d9c0be?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Gym Facilities Icon", title: "Gym Facilities" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c800995966e26f7394f78cb5a23dd4b0873e8135f3d5138a627ca038aaff8a35?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Highspeed Wifi Icon", title: "Highspeed Wifi" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5cf51885d74ebc2b428a5d67d2e0b71807acec52f913adb3d8516e04c7477a49?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Cafe & Tea Bar Icon", title: "Cafe & Tea Bar" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7b6a94c6511d019896bdc3946b0f91c53dbe2199d6326e65bfbe24c9cc25f0c?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Affordable Icon", title: "Affordable" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0f3dd475877bc1fbe41f2f97b83a60dd70c86fbb781924a239eb1656ce826d0?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Comfort Lounges Icon", title: "Comfort Lounges" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/465d41810d4d6d3b87c6fcb58f709278743f98baea47cff6fe351d30630e4eee?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Quick Booking Icon", title: "Quick Booking" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aacf83bab67fa9d71a488b2c4eb60762abde0063e6607fdfda81db7d83bc923a?apiKey=23427d989e77478fa1b7f364de68a73c&", alt: "Sports Area Icon", title: "Sports Area" }
  ];

  const spaces = [
    {
      location: "HSR Sector 6, Service Road",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/754235108042b404d553ddd68404dea08cb22301043f330a10907fe85813442c?apiKey=23427d989e77478fa1b7f364de68a73c&",
      imgAlt: "Image of workspace at HSR Sector 6",
      workspaceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3ef94b65e05484df5dd0bb123bb48e8a94663c16f3b18e33fe80affae84d508?apiKey=23427d989e77478fa1b7f364de68a73c&",
      workspaceIconAlt: "Workspace Icon",
      workspaceName: "Workspace"
    },
    {
      location: "HSR Sector 3, 19th Main Road",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/74691b8a8a2304bd3a1f9f95d9d0f0eba5adbb2baea772a6aa4deaf75cdfb828?apiKey=23427d989e77478fa1b7f364de68a73c&",
      imgAlt: "Image of workspace at HSR Sector 3",
      workspaceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b95a651d6ea13f3fdec29fe71ed09d102ee4322d856abc7eb6e7445d9b17d11?apiKey=23427d989e77478fa1b7f364de68a73c&",
      workspaceIconAlt: "Honeykomb Icon",
      workspaceName: "Honeykomb"
    }
  ];

  return (
    <main className="flex flex-col items-center mx-auto w-full bg-slate-50 max-w-[480px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd40765f22612c8ccc36966d67b7d9112f43081ad8894bdef0d543a93b5d88e?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="Main Image" className="self-stretch w-full aspect-[0.66] fill-yellow-500" />
      <section className="flex gap-3 mt-8 w-full max-w-xs">
        {features.slice(0, 2).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <section className="flex gap-3 mt-3 w-full max-w-xs">
        {features.slice(2, 4).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <section className="flex gap-3 mt-3 w-full max-w-xs">
        {features.slice(4, 6).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <section className="flex gap-3 mt-3 w-full max-w-xs">
        {features.slice(6, 8).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
      <header className="flex gap-5 px-5 mt-14 w-full text-2xl font-bold tracking-wide leading-10 text-gray-800 max-w-[361px]">
        <div className="flex-auto">Our Spaces</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6673005b6cc115434a9f36e2a14019287938167d8e0622584af2ea67641c7174?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="" className="shrink-0 my-auto border border-yellow-500 border-solid aspect-[3.13] stroke-[1px] stroke-yellow-500 w-[25px]" />
      </header>
      {spaces.map((space, index) => (
        <SpaceCard key={index} {...space} />
      ))}
      <header className="flex gap-5 px-5 mt-14 text-2xl font-bold tracking-wide leading-10 text-gray-800">
        <div className="flex-auto">Download our app now</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6673005b6cc115434a9f36e2a14019287938167d8e0622584af2ea67641c7174?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="" className="shrink-0 self-start mt-1 border border-yellow-500 border-solid aspect-[3.13] stroke-[1px] stroke-yellow-500 w-[25px]" />
      </header>
      <section className="flex flex-col items-center pt-7 pb-3 mt-5 w-full max-w-xs bg-white rounded-lg border border-solid shadow-sm border-stone-200 border-opacity-80">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f09104ebe9eee0037533f9da27b7524b55dee5c24e37a1d532afb9cdb6f6e8a2?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="App Advertisement" className="self-stretch w-full aspect-[1.08]" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4225a8cde6ab11e68dd136d24db4491a68cd2358f18095bdcb9e74be28e8c8a7?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="App QR Code" className="w-full border border-solid border-black border-opacity-20 max-w-[296px] stroke-[1px] stroke-black stroke-opacity-20" />
        <div className="flex gap-5 mt-3 w-full max-w-[296px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb3ba14e95ad383fc2ba1916f64d0f9393f2b40c921d7d86b7ef3b4d6d399c2?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="Google Play Store" className="shrink-0 max-w-full aspect-[3.23] w-[146px]" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc751060f9dcd15d798cda9587bd96f39bb328ffee3cf1890dafad35f4a8e799?apiKey=23427d989e77478fa1b7f364de68a73c&" alt="Apple App Store" className="shrink-0 max-w-full aspect-[2.94] w-[132px]" />
        </div>
      </section>
      <footer className="justify-center items-center self-stretch px-16 py-3 mt-8 w-full text-xs leading-4 text-center bg-gray-800 text-zinc-300">
        © Copyright 2024. Bhive Private Limited
      </footer>
    </main>
  );
};

export default MyComponent;