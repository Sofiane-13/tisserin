import Markdown from "react-markdown"
import { Card as CardUI } from '@nextui-org/react';
import { User } from '@nextui-org/react';

const Card = ({ data }) => {
  return (
    <main className="container flex flex-col md:flex-row items-center justify-between py-12">
    <CardUI bordered hoverable>
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
