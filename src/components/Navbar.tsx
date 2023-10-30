import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MainIcon from "@/assets/ecommerce.png";
import { Separator } from "@/components/ui/separator"
import { useState } from "react";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    // Not Loging
    <nav className="flex flex-1 justify-between p-5 border shadow-md bg-slate-100">
      <div className="flex gap-3">
        <img src={MainIcon} alt="navbar-image" width={30} height={30} />
        <h3 className="text-3xl  font-bold flex justify-center items-center ">
          E-Market
        </h3>
      </div>
      {isLogin ? (
        <>
          <div className="flex justify-center items-center gap-7">
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://www.svgrepo.com/show/525577/user-circle.svg" alt="user-image" />
                <AvatarFallback className="font-semibold">Me</AvatarFallback>
              </Avatar>
              <Button variant={"ghost"}>Tolga Tatlı</Button>
            </div>
            <Separator orientation="vertical" />
            <div className="flex justify-center items-center text-center ">
              <Avatar>
                <AvatarImage src="https://www.svgrepo.com/show/521920/wallet.svg" alt="wallet-image" className="w-10 h-9 object-contain" />
                <AvatarFallback className="font-semibold">Me</AvatarFallback>
              </Avatar>
              <Button variant={"ghost"}>Cüzdanım</Button>
              <span className="border border-slate-600 rounded p-1 text-sm bg-slate-100">
                30.000 TL
              </span>
            </div>
            <Separator orientation="vertical" />
            <div className="flex">
              <Avatar>
                <AvatarImage src="https://www.svgrepo.com/show/25775/ecommerce.svg" alt="basket-image" className="w-10 h-9 object-contain"/>
                <AvatarFallback className="font-semibold">ME</AvatarFallback>
              </Avatar>
              <Button variant={"ghost"}>Sepetim</Button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <Avatar>
            <AvatarImage src="" alt="user-image" />
            <AvatarFallback className="font-semibold">Me</AvatarFallback>
          </Avatar>
          <Button variant={"ghost"}>Giriş Yap</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
