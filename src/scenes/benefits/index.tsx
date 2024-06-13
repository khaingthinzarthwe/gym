import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equiment, trainers and classes to get you to your
                    ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits