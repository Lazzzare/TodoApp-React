import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";
backgroundImage: {
  LightModeBackgroundMobile: "url('../src/assets/bg-mobile-light.jpg')";
  DarkModeBackgroundMobile: "url('../src/assets/bg-mobile-dark.jpg')";
  LightModeBackgroundDesktop: "url('../src/assets/bg-desktop-light.jpg')";
  DarkModeBackgroundDesktop: "url('../src/assets/bg-desktop-dark.jpg')";
}

const IMAGE_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://https://todo-app-react-kappa-three.vercel.app/assets/"
    : "/assets/";

interface HeaderProps {
  LightMode: boolean;
  setLightMode: (e: boolean) => void;
}

const Header = ({ LightMode, setLightMode }: HeaderProps) => {
  const backgroundImageURL =
    "https://todo-app-react-kappa-three.vercel.app/assets/src/assets/bg-desktop-light.jpg"; // Replace with the correct URL
  return (
    // Main
    <div className="w-full">
      {/* Background */}
      <div
        className={`${
          LightMode
            ? "bg-DarkModeBackgroundMobile md:bg-DarkModeBackgroundDesktop"
            : "bg-LightModeBackgroundMobile md:bg-LightModeBackgroundDesktop"
        } h-52 md:h-80 bg-cover bg-center`}
      >
        {/* Header (navbar) */}
        <div
          className="flex flex-row justify-between md:items-center w-[327px] md:w-[541px]
            mx-auto pt-10 md:pt-20 px-0"
        >
          <h1
            className="text-white text-2xl font-bold tracking-[10px] uppercase cursor-pointer
            md:text-4xl md:tracking-[15px]"
          >
            todo
          </h1>
          {LightMode ? (
            <img
              onClick={() => setLightMode(!LightMode)}
              src={Moon}
              alt="SunIcon"
              className="w-5 h-5 md:w-7 md:h-7 cursor-pointer"
            />
          ) : (
            <img
              onClick={() => setLightMode(!LightMode)}
              src={Sun}
              alt="SunIcon"
              className="w-5 h-5 md:w-7 md:h-7 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
