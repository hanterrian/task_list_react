const path = require('path')

const API_URL = process.env.API_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `${API_URL}/:path*`,
			},
		]
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
