import { galleryFonts } from "../../../data/app-constants"

export const user_name_validation = {
	label: "Name",
	type: "text",
	id: "user_name",
	placeholder: "Your full name",
	validation: {
		required: {
			value: true,
			message: "User name required",
		},
		maxLength: {
			value: 80,
			message: "80 characters max",
		},
	},
}

export const company_name_validation = {
	label: "Company Name",
	type: "text",
	id: "company_name",
	placeholder: "Name your company",
	validation: {
		required: {
			value: true,
			message: "Company name required",
		},
		maxLength: {
			value: 40,
			message: "40 characters max",
		},
	},
}

export const gallery_name_validation = {
	label: "Gallery Name",
	type: "text",
	id: "gallery_name",
	placeholder: "Name your gallery",
	validation: {
		required: {
			value: true,
			message: "Gallery name required",
		},
		maxLength: {
			value: 40,
			message: "40 characters max",
		},
	},
}

export const video_name_validation = {
	label: "Video Name",
	type: "text",
	id: "video_name",
	placeholder: "Name your video",
	validation: {
		required: {
			value: true,
			message: "Video name required",
		},
		maxLength: {
			value: 40,
			message: "40 characters max",
		},
	},
}

export const img_URL_validation = {
	label: "Image URL",
	type: "text",
	id: "img_URL",
	placeholder: "Cover image URL",
	validation: {
		required: {
			value: false,
		},
	},
}

export const video_URL_validation = {
	label: "Video URL",
	type: "text",
	id: "video_URL",
	placeholder: "Video URL",
	validation: {
		required: {
			value: true,
			message: "Video URL required",
		},
	},
}

export const website_URL_validation = {
	label: "Website URL",
	type: "text",
	id: "website_URL",
	placeholder: "Your company's website",
	validation: {
		required: {
			value: false,
		},
	},
}

export const youtube_URL_validation = {
	label: "YouTube URL",
	type: "text",
	id: "youtube_URL",
	placeholder: "Your company's YouTube URL",
	validation: {
		required: {
			value: false,
		},
	},
}

export const instagram_URL_validation = {
	label: "Instagram URL",
	type: "text",
	id: "instagram_URL",
	placeholder: "Your company's Instagram URL",
	validation: {
		required: {
			value: false,
		},
	},
}

export const facebook_URL_validation = {
	label: "Facebook URL",
	type: "text",
	id: "facebook_URL",
	placeholder: "Your company's Facebook URL",
	validation: {
		required: {
			value: false,
		},
	},
}

export const vimeo_URL_validation = {
	label: "Vimeo URL",
	type: "text",
	id: "vimeo_URL",
	placeholder: "Your company's Vimeo URL",
	validation: {
		required: {
			value: false,
		},
	},
}

export const tiktok_URL_validation = {
	label: "TikTok URL",
	type: "text",
	id: "tiktok_URL",
	placeholder: "Your company's TikTok URL",
	validation: {
		required: {
			value: false,
		},
	},
}

export const user_email_validation = {
	label: "Email",
	type: "email",
	id: "email",
	placeholder: "Your email address",
	validation: {
		required: {
			value: true,
			message: "Email required",
		},
		maxLength: {
			value: 80,
			message: "80 characters max",
		},
	},
}

export const font_validation = {
	label: "Font",
	id: "font",
	options: galleryFonts,
	placeholder: undefined,
	validation: {
		required: {
			value: true,
			message: "Select a font",
		},
	},
}

export const hex1_validation = {
	label: "Color 1",
	type: "text",
	id: "hex1",
	placeholder: undefined,
	validation: {
		required: {
			value: false,
		},
	},
}

export const hex2_validation = {
	label: "Color 2",
	type: "text",
	id: "hex2",
	placeholder: undefined,
	validation: {
		required: {
			value: false,
		},
	},
}

export const hex3_validation = {
	label: "Color 3",
	type: "text",
	id: "hex3",
	placeholder: undefined,
	validation: {
		required: {
			value: false,
		},
	},
}