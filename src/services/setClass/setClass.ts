const setClass = (
  defaultClass: string,
  additionalClass?: string
): string => `${defaultClass}${additionalClass ? ` ${additionalClass}` : ""}`;


export default setClass;