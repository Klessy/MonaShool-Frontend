import BreadCrumbs from "@/components/utils/BreadCrumbs";
import WhoWeAre from "@/components/utils/WhoweAre";

export default function Page(){
  return (
  <main className="p-10">
    <BreadCrumbs title={"ABOUT US"} path={"About Us"} link={"about"}/>
    <WhoWeAre />
  </main>
  )
}
