import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nostrum fuga officia dolorum"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nostrum fuga officia dolorum"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nostrum fuga officia dolorum"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value:SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>

            {/* HEADER */}
            <motion.div className="md:my-5 md:w-3/5"
                initial='hidden' whileInView='visible'
                viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equiment, trainers and classes to get you to your
                    ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                 initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }}
                 variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHICS */}
                <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{' '}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>
                    {/* DESCRIPT */}
                    <div>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem unde dolor neque vel 
                            voluptas sapiente quisquam, ipsa minima quia consectetur ab inventore ad ipsam placeat maiores
                            laboriosam delectus optio quae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur blanditiis quod voluptates voluptas qui aliquid eos,aperiam vitae autem assumenda iure. 
                            Aperiam natus inventore labore incidunt vel sunt tenetur eaque!
                        </p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, assumenda! Architecto sint,
                            voluptate deserunt vitae deleniti quidem doloremque commodi! Suscipit quibusdam unde consequuntur
                            nemo magni, nesciunt eos sapiente eius dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nemo assumenda veritatis consectetur voluptatibus ipsum corrupti dignissimos animi ut quos tenetur
                            accusantium, minima, dolorem in eveniet maxime distinctio autem blanditiis numquam?
                        </p>
                    </div>
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits