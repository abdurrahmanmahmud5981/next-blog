"use client"
import Link from "next/link";
import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const Navber = () => {
  return (
    <div className="container mx-auto mb-12">
      <div className="navbar ">
        <div className="flex-1">
          <h3 className=" font-bold text-xl">Next Blog</h3>
        </div>
        <div className="flex-none">
          <div className="flex items-center gap-4">
            <Link className="border px-3 py-1.5 rounded-md" href={"/"}>Home</Link>
            <Link className="border px-3 py-1.5 rounded-md" href={"/profile"}>Profile</Link>
            <LoginLink className="border px-3 py-1.5 rounded-md">Login</LoginLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
