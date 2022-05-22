import Markdown from "react-markdown"
import { Card as CardUI } from "@nextui-org/react"
import { User, Modal, useModal, Text, Button } from "@nextui-org/react"
import NextImage from "../elements/image"

const Card = ({ data }) => {
  const { setVisible, bindings } = useModal()

  return (
    <main className="container flex flex-col md:flex-row items-center justify-between py-12">
      <CardUI bordered hoverable onClick={() => setVisible(true)}>
        <Modal
          scroll
          fullScreen
          closeButton
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              {data.title}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <NextImage d="modal-description" media={data.picture} />
          </Modal.Body>
          <Modal.Footer>
            <Button flat auto color="error" onClick={() => setVisible(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <User
          src={data.picture?.data?.attributes?.url}
          name={data.title}
          description={data.subTitle}
          size="xl"
          bordered
          squared
          color="primary"
          zoomed
        />
        <div className="flex-1 sm:pr-8">
          <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
            <Markdown>{data.description}</Markdown>
          </div>
        </div>
      </CardUI>
    </main>
  )
}

export default Card
