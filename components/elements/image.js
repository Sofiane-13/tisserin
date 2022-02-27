import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, ...props }) => {
  /*eslint-disable */
  console.log('media', media)
  console.log('props', props)
  /*eslint-enable */

  if (!media?.data?.attributes) return null
  const { url, alternativeText, width, height } = media.data.attributes

  const loader = ({ src, width }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
    )
  }

  // The image is responsive
  return (
    <Image
      loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  )
}

Image.propTypes = {
  media: mediaPropTypes.isRequired,
  className: PropTypes.string,
}

export default NextImage
