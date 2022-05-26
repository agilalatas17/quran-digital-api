module.exports = {
    content: ["./src/**/*.{html,ts}"],

    theme: {
        fontSize: {
            // sm: ".75rem",
            // base: "1rem",
            // lg: "1.25rem",
            // xl: "1.5rem",
            // "2xl": "1.75rem",
            // "3xl": "2rem",
            // "4xl": "2.5rem",

            arabic: {
                display: {
                    lg: ["57px", { lineHeight: "64px", letterSpacing: "-0.25em" }],
                    md: ["45px", { lineHeight: "92px" }],
                    sm: ["36px", { lineHeight: "44px" }],
                },

                headline: {
                    lg: ["32px", { lineHeight: "40px" }],
                    md: ["28px", { lineHeight: "36px" }],
                    sm: ["24px", { lineHeight: "48px" }],
                },
            },

            "display-lg": ["57px", { lineHeight: "64px", letterSpacing: "-0.25em" }],
            "display-md": ["45px", { lineHeight: "52px" }],
            "display-sm": ["36px", { lineHeight: "44px" }],

            "headline-lg": ["32px", { lineHeight: "40px" }],
            "headline-md": ["28px", { lineHeight: "36px" }],
            "headline-sm": ["24px", { lineHeight: "32px" }],

            "title-lg": ["22px", { lineHeight: "28px" }],
            "title-md": ["16px", { lineHeight: "24px", letterSpacing: "0.15em" }],
            "title-sm": ["14px", { lineHeight: "20px", letterSpacing: "0.1em" }],

            "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.1em" }],
            "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.5em" }],
            "label-sm": ["10px", { lineHeight: "16px", letterSpacing: "0.5em" }],

            "body-lg": ["16px", { lineHeight: "24px", letterSpacing: "0.15em" }],
            "body-md": ["14px", { lineHeight: "20px", letterSpacing: "0.25em" }],
        },

        colors: {
            white: "#ffffff",
            black: "#000000",

            typography: {
                "heading-color": "#152536",
                "body-color": "#6C757D",
            },

            red: "#FF0000",

            gray: {
                100: "#F8F9FA",
                200: "#E9ECEF",
                300: "#DEE2E6",
                400: "#CED4DA",
                500: "#ADB5BD",
                600: "#6C757D",
                700: "#495057",
                800: "#343A40",
                900: "#212529",
            },

            purple: {
                100: "#EBCEFF",
                200: "#DEAEFF",
                300: "#D08EFF",
                400: "#C675FF",
                500: "#BC5DFF",
                600: "#B655FF",
                700: "#AD4BFF",
                800: "#A541FF",
                900: "#9730FF",
            },

            blue: {
                100: "#C8D6F8",
                200: "#A3BBF3",
                300: "#7E9FEE",
                400: "#638BEA",
                500: "#4776E6",
                600: "#406EE3",
                700: "#3763DF",
                800: "#2F59DB",
                900: "#2046D5",
            },
        },

        extend: {
            fontFamily: {
                arabic: ["Arabic"],
                roboto: ["Roboto"],
                nunito: ["Nunito"],
            },

            boxShadow: {
                sm: "",
                md: "0 6px 12px 2px rgba(140,89,166,0.25)",
                lg: "",
                xl: "",
            },
        },
    },
    plugins: [],
};