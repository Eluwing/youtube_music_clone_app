import plugin from "tailwindcss/plugin";

// 🔧 text-vw-[1920,60] → font-size: 60 / 1920 * 100 = 3.125vw
//    形式: [基準解像度, 基準px]
//    利用例: <h1 class="text-vw-[1920,60]">レスポンシブテキスト</h1>
export const vwUtilities = plugin(({ matchUtilities }) => {
  const generateVwUtility = (prop: string) => {
    return (value: string) => {
      const match = value.match(/^(\d+),(\d+)$/);
      if (!match) return null;

      const parts = value.split(',');
      const baseWidth = Number(parts[0]);
      const pixel = Number(parts[1]);

      const vwValue = pixel / (baseWidth / 100);

      return {
        [prop]: `clamp(0px, ${vwValue}vw, ${pixel}px)`,
      };
    };
  };

  matchUtilities(
    {
      "text-vw": generateVwUtility("font-size"),
      "p-vw": generateVwUtility("padding"),
      "pt-vw": generateVwUtility("padding-top"),
      "pr-vw": generateVwUtility("padding-right"),
      "pb-vw": generateVwUtility("padding-bottom"),
      "pl-vw": generateVwUtility("padding-left"),
      "px-vw": (value: string) => {
        const match = value.match(/^(\d+),(\d+)$/);
        if (!match) return null;

        const parts = value.split(',');
        const vw = Number(parts[0]) / (Number(parts[1])/100);
        return {
          "padding-left": `${vw}vw`,
          "padding-right": `${vw}vw`,
        };
      },
      "py-vw": (value: string) => {
        const match = value.match(/^(\d+),(\d+)$/);
        if (!match) return null;

        const parts = value.split(',');
        const vw = Number(parts[0]) / (Number(parts[1])/100);
        return {
          "padding-top": `${vw}vw`,
          "padding-bottom": `${vw}vw`,
        };
      },

      "m-vw": generateVwUtility("margin"),
      "mt-vw": generateVwUtility("margin-top"),
      "mr-vw": generateVwUtility("margin-right"),
      "mb-vw": generateVwUtility("margin-bottom"),
      "ml-vw": generateVwUtility("margin-left"),
      "mx-vw": (value: string) => {
        const match = value.match(/^(\d+),(\d+)$/);
        if (!match) return null;
        
        const parts = value.split(',');
        const vw = Number(parts[0]) / (Number(parts[1])/100);
        return {
          "margin-left": `${vw}vw`,
          "margin-right": `${vw}vw`,
        };
      },
      "my-vw": (value: string) => {
        const match = value.match(/^(\d+),(\d+)$/);
        if (!match) return null;
        
        const parts = value.split(',');
        const vw = Number(parts[0]) / (Number(parts[1])/100);
        return {
          "margin-top": `${vw}vw`,
          "margin-bottom": `${vw}vw`,
        };
      },

      "w-vw": generateVwUtility("width"),
      "h-vw": generateVwUtility("height"),
      "min-w-vw": generateVwUtility("min-width"),
      "min-h-vw": generateVwUtility("min-height"),
      "max-w-vw": generateVwUtility("max-width"),
      "max-h-vw": generateVwUtility("max-height"),
    },
    {
      values: {},
      type: ["any"],
    }
  );
});
