import ImagePlaceholder from "../assets/image-placeholder.jpg";

export const getImageSrc = (fileName) => {
	if (fileName) {
		return process.env.REACT_APP_API_URL + fileName;
	}

	return ImagePlaceholder;
}