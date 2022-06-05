import { Collapse, Text } from "@nextui-org/react"
import NextImage from "../elements/image"
import styles from "./section-img.module.css"
const SectionImg = ({ data }) => {
  return (
    <div className="container flex flex-col md:flex-row items-center justify-between pb-4">
      <Collapse
        animated
        shadow
        bordered
        title={
          <span className="text-4xl font-semibold text-[#0d3b66]">
            {data.title}
          </span>
        }
        css={{ width: "100%", backgroundColor: "#faf0ca" }}
      >
        <Text>
          <div className="flex flex-col sm:flex-row">
            <div className={styles.containerimg} id="section-img">
              <NextImage
                className={styles.image}
                layout="fill"
                media={data.picture}
              />
            </div>
            <div className="flex flex-col px-8 sm:w-4/6">
              <span className="sm:ml-auto mb-4 text-3xl text-[#F95738]">
                {data.subTitle}
              </span>
              <span>{data.description}</span>
            </div>
          </div>
        </Text>
      </Collapse>
    </div>
  )
}

export default SectionImg