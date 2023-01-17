const mix = require("laravel-mix");
const path = require("path");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const imageminMozjpeg = require("imagemin-mozjpeg");
require("mix-html-builder");
require("mix-tailwindcss");
require("laravel-mix-replace-in-file");
require("laravel-mix-clean");
require("laravel-mix-imagemin");
require("laravel-mix-webp");
require("svgo");

const srcFolder = "src";
const distFolder = "dist";
const rootFolder = path.basename(path.resolve());

const paths = {
	src: path.resolve(srcFolder),
	dist: path.resolve(distFolder),
};

mix
	.setPublicPath("dist")
	.options({
		processCssUrls: false,
	})
	.replaceInFile({
		files: `${paths.src}/index.html`,
		from: /NEW_PROJECT_NAME/g,
		to: rootFolder,
	})
	.js(`${paths.src}/js/app.js`, `${paths.dist}/js`)
	.vue()
	.sass(`${paths.src}/scss/style.scss`, `${paths.dist}/css`)
	.tailwind()
	.html({
		htmlRoot: `${paths.src}/*.html`,
		output: `${paths.dist}`,
		partialRoot: `${paths.src}`,
		layoutRoot: `${paths.src}`,
		minify: {
			removeComments: false,
			versioning: false,
		},
	})
	.webpackConfig({
		plugins: [
			// Create an svg sprite with icons
			new SVGSpritemapPlugin(
				"src/images/svg/*.svg", // Relative path to webpack.mix.js
				{
					output: {
						filename: "images/svgMap.svg", // Relative path to "dist/"
						svg4everybody: false, // Disable plugin "SVG for Everybody"
						svg: {
							sizes: false, // Removing inline dimensions of svg
						},
						chunk: {
							keep: true, // Turn it on to prevent errors during the building due to the lack of svgMap.js
						},
						svgo: {
							plugins: [
								{
									name: "removeStyleElement", // Removing tags <style> from svg
									overrides: {
										removeStyleElement: true,
									},
								},
								{
									name: "removeAttrs",
									params: {
										attrs: ["fill", "stroke"], // Removing some attributes to control styles from CSS
									},
								},
							],
						},
					},
					sprite: {
						prefix: "", // The prefix for the id of the icons in the sprite will look like 'icon-$filename'
						generate: {
							title: false, // Do not add <title> tags to the sprite
						},
					},
				}
			),
			// Copy images from "src" directory to "dist" directory
			new CopyWebpackPlugin({
				patterns: [
					{
						from: "src/images", // Relative path to catalog with webpack.mix.js
						to: "images", // Relative path to "dist/"
						globOptions: {
							ignore: ["**/svg/**"], // Ignoring the directory with icons
						},
					},
				],
			}),
		],
	})
	.copy(`${paths.src}/fonts`, `${paths.dist}/fonts`)
	.copy(`${paths.src}/favicons`, `${paths.dist}/favicons`)
	// .copy(`${paths.src}/videos`, `${paths.dist}/videos`)
	.browserSync({
		server: {
			baseDir: `${paths.dist}`,
		},
		// proxy: "clean-layout.test",
		files: [`${paths.src}/**/*.html`, `${paths.src}/**/*.php`, `${paths.src}/js`, `${paths.src}/**/*.htm`, `${paths.src}/img/**/*.*`],
	})
	.clean();

if (mix.inProduction()) {
	mix
		.options({
			processCssUrls: true,
		})
		.webpackConfig({
			plugins: [
				// Optimizing image quality
				new ImageminPlugin({
					test: /\.(jpe?g|png|gif)$/i,
					optipng: {
						optimizationLevel: 3,
					},
					plugins: [
						imageminMozjpeg({
							quality: 80,
							progressive: true,
						}),
					],
				}),
			],
		})
		.ImageWebp({
			from: "src/images",
			to: "dist/images",
			imageminWebpOptions: {
				quality: 70,
			},
		})
		.sourceMaps()
		.version();
}
