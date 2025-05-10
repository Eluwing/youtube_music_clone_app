import plugin from "tailwindcss/plugin";

// 🔧 text-vw-clamp-[1920,60,24,80] → font-size: clamp(24px, 3.125vw, 80px)
//    形式: [基準解像度, 基準px, 最小px, 最大px]
//    利用例: <h1 class="text-vw-clamp-[1920,60,24,80]">レスポンシブテキスト</h1>
export const vwClampUtilities = plugin(({ matchUtilities }) => {
  const getClampParts = (value:string):Number[] | null => {
    const parts = value.split(',');
    if(parts.length !== 4) return null;

    const baseWidth = Number(parts[0]);
    const pixel = Number(parts[1]);
    const min = Number(parts[2]);
    const max = Number(parts[3]);
    if(isNaN(baseWidth) || isNaN(pixel) || isNaN(min) || isNaN(max) || baseWidth === 0) return null;

    const vw = pixel / (baseWidth / 100);

    return [min,vw,max];
  };

  const generateClampUtility = (prop: string) => {
    return (value: string) => {
      const parts = getClampParts(value);
      if(!parts) return null;

      const [min,vw,max] = parts;

      return {
        [prop]: `clamp(${min}px, ${vw}vw, ${max}px)`,
      };
    };
  };

  matchUtilities(
    {
      "text-vw-clamp": generateClampUtility("font-size"),
      "p-vw-clamp": generateClampUtility("padding"),
      "pt-vw-clamp": generateClampUtility("padding-top"),
      "pr-vw-clamp": generateClampUtility("padding-right"),
      "pb-vw-clamp": generateClampUtility("padding-bottom"),
      "pl-vw-clamp": generateClampUtility("padding-left"),

      "px-vw-clamp": (value: string) => {
        const parts = getClampParts(value);
        if(!parts) return null;
  
        const [min,vw,max] = parts;
        return {
          "padding-left": `clamp(${min}px, ${vw}vw, ${max}px)`,
          "padding-right": `clamp(${min}px, ${vw}vw, ${max}px)`,
        };
      },

      "py-vw-clamp": (value: string) => {
        const parts = getClampParts(value);
        if(!parts) return null;
  
        const [min,vw,max] = parts;
        return {
          "padding-top": `clamp(${min}px, ${vw}vw, ${max}px)`,
          "padding-bottom": `clamp(${min}px, ${vw}vw, ${max}px)`,
        };
      },

      "m-vw-clamp": generateClampUtility("margin"),
      "mt-vw-clamp": generateClampUtility("margin-top"),
      "mr-vw-clamp": generateClampUtility("margin-right"),
      "mb-vw-clamp": generateClampUtility("margin-bottom"),
      "ml-vw-clamp": generateClampUtility("margin-left"),

      "mx-vw-clamp": (value: string) => {
        const parts = getClampParts(value);
        if(!parts) return null;
  
        const [min,vw,max] = parts;
        return {
          "margin-left": `clamp(${min}px, ${vw}vw, ${max}px)`,
          "margin-right": `clamp(${min}px, ${vw}vw, ${max}px)`,
        };
      },

      "my-vw-clamp": (value: string) => {
        const parts = getClampParts(value);
        if(!parts) return null;
  
        const [min,vw,max] = parts;
        return {
          "margin-top": `clamp(${min}px, ${vw}vw, ${max}px)`,
          "margin-bottom": `clamp(${min}px, ${vw}vw, ${max}px)`,
        };
      },

      "w-vw-clamp": generateClampUtility("width"),
      "h-vw-clamp": generateClampUtility("height"),
      "min-w-vw-clamp": generateClampUtility("min-width"),
      "min-h-vw-clamp": generateClampUtility("min-height"),
      "max-w-vw-clamp": generateClampUtility("max-width"),
      "max-h-vw-clamp": generateClampUtility("max-height"),
    },
    {
      values: {},
      type: ["any"],
    }
  );
});
