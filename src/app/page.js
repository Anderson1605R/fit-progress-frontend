import { Montserrat } from "next/font/google";
const monserrat = Montserrat(
  {
    weight: ["400", "600", "800"],
     subsets: ["latin"] 
    }
  );

export default function Home() {
  return (
    <>
    <div className="bg-slate-950 h-screen grid place-items-center place-content-center">
     <h1 className="text-white ">Quebre seus limites</h1>
     <h2 style={{fontFamily: "Montserrat", fontWeight: 800, color: "white"}} className="text-xl"> Olá mundo</h2>

    </div>
    </>
  );
}
