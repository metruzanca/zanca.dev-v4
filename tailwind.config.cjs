const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
	theme: {
		extend: {
      colors: {
        accent: '#f7e13a',
        secondary: '#111019',
      }
    },
	},
	plugins: [
    require('@tailwindcss/typography'),

    // plugin(function maskGradientPlugin(api) {
    //   api.addUtilities({
    //     ".mask-radial-gradient": {
    //       maskImage: "radial-gradient(rgba(0, 0, 0, 0.8), transparent 60%)",
    //     },
    //     ".mask-linear-gradient-to-b": {
    //       maskImage: "linear-gradient(to bottom, white 0%, white 33%, transparent 90%)",
    //     },
    //   })
    // }),

    plugin(function astroComponentsPlugin({ addComponents, theme }) {
      addComponents({
        // From https://Astro.build
        // "b, strong": {
        //   fontWeight: 700,
        // },

        // ":focus-visible": {
        //   "@apply outline-astro-pink-light outline-offset-2": {},
        // },

        // ".container": {
        //   "@apply w-full mx-auto max-w-screen-2xl px-4 md:px-8": {},
        // },

        // ".grid-container": {
        //   display: "grid",
        //   gridTemplateColumns:
        //     "1fr min(var(--container-width, 1280px), calc(100% - (2 * var(--container-gutter-size, 24px)))) 1fr",
        //   gridColumnGap: "var(--container-gutter-size, 24px)",
        //   overflow: "clip",
        //   width: "100%",
        //   rowGap: theme("spacing.24"),
        //   paddingBottom: theme("spacing.24"),
        //   "@media screen(md)": {
        //     rowGap: theme("spacing.32"),
        //     paddingBottom: theme("spacing.32"),
        //   },
        //   "@media screen(lg)": {
        //     rowGap: theme("spacing.40"),
        //     paddingBottom: theme("spacing.40"),
        //   },

        //   /* center all children by default */
        //   "& > *": {
        //     gridColumn: "2",
        //   },

        //   /* allows content to bleed edge to edge */
        //   "& > .bleed-full": {
        //     gridColumn: "1 / -1",
        //   },

        //   /* allows content to bleed to starting edge */
        //   "& > .bleed-start": {
        //     gridColumn: "1 / 3",
        //   },

        //   /* allows content to bleed to ending edge */
        //   "& > .bleed-end": {
        //     gridColumn: "2 / -1",
        //   },

        //   "& > .bleed-none": {
        //     gridColumn: "2 !important",
        //   },
        // },

        // ".accordion": {
        //   "&::-webkit-details-marker": {
        //     display: "none",
        //   },
        // },

        // ".heading-1": {
        //   "@apply font-obviously text-7xl leading-tight": {},
        // },

        // ".heading-2": {
        //   "@apply font-obviously text-6xl leading-tight": {},
        // },

        // ".heading-3": {
        //   "@apply font-obviously text-4xl leading-tight": {},
        //   fontSize: "32px",
        // },

        // ".heading-4": {
        //   "@apply font-obviously text-2xl leading-tight": {},
        // },

        // ".heading-5": {
        //   "@apply font-obviously text-xl leading-tight": {},
        // },

        // ".body": {
        //   "@apply font-sans text-base font-light": {},
        // },
        // ".body-large": {
        //   "@apply font-sans text-2xl font-extralight leading-normal": {},
        // },

        // ".code": {
        //   "@apply font-mono font-light": {},
        // },

        // ".link": {
        //   "@apply transition-colors text-astro-gray-100 hover:text-astro-gray-300": {},
        // },
        // ".link-underline": {
        //   "@apply link border-b border-astro-gray-100 hover:border-astro-gray-300": {},
        // },

        // ".input": {
        //   "@apply rounded-lg border border-astro-gray-500 bg-astro-gray-600 p-3 leading-none shadow-inner":
        //     {},
        // },
        // ".input-textarea": {
        //   "@apply py-2 leading-normal": {},
        // },

        // ".landing-section": {
        //   "@apply flex flex-col items-center justify-center overflow-visible text-center": {},
        // },

        ".bg-grid": {
          backgroundSize: "100px 100px",
          // zIndex: theme("zIndex.grid"),
          zIndex: -2,
          backgroundImage: `url("/bg-grid.png")`,
          backgroundPositionY: "-9px",

          maskImage: `linear-gradient(to bottom, transparent, 10%, white, 90%, transparent)`,
        },

        // ".panel": {
        //   "@apply border border-astro-gray-500 bg-astro-gray-600 shadow-xl": {},
        // },
      })
    }),
  ],
}
