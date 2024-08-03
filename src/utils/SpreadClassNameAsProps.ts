/**
 * ClassName spread Function
 *
 * This function overloading accepts an array of strings or two-level deep array of strings
 * and returns className?: string | undefined.
 *
 * The first item in the array will serve as Base ("Block/Block-Element") className.
 * If baseClass is provided, it will follow BEM (double dash) prefixing rule.
 * If left blank, no Base will be rendered, just straight string value passed.
 *
 * @param {string[] | string[][]} items array of strings or two-deep array of strings.
 * @returns className?: string | undefined
 * @example
 * SpreadClassNameAsProps(["btn", variant, display, size])
 *
 * In this example, base "btn" defined, then followed by variant, display, size (strings).
 *
 * If variant, display, size are truthy, this will return "btn btn-{variant} btn-{display}, btn-{size}"
 * Else, just "btn".
 *
 * SpreadClassNameAsProps([
 *  ["", maxCharacters && "width-ch" + maxCharacters.toString()],
 *  ["", textTransform && "text-" + textTransform],
 * ])
 *
 * The above example is a Multiple array passed to handle different className implementations.
 *
 * Looping through arrays, the First Array has a "" as first value, means no base className, then followed by isTruthy statement with {string-concatination} value.
 *
 * If the second value is truthy, it will push the string to className ex. "width-ch{maxCharacters}".
 *
 * Then loop to the second array, if second value is truthy, it will push to className "text-{textTransform}".
 *
 * Example return: "width-ch20 text-transform"
 */
export const SpreadClassNameAsProps: {
  (items: string[]): { className?: string | undefined };
  (items: string[][]): { className?: string | undefined };
} = (items: string[] | string[][]) => {
  //Initialize className as array
  const classNames: string[] = [];
  //Mapping
  items.map((item: unknown) => {
    //Loop A -> "Item is an array":
    if (Array.isArray(item)) {
      //Loop B -> "Pushing a BaseClass":
      //Check if first item in array is truthy (first item could be a Block or Block-Element Classname)
      if (item[0].length > 0) {
        //Push as BaseClass
        classNames.push(item[0]);
        //Remove first item, then iterate through the rest
        const [, ...rest] = item;
        if (rest) {
          rest.forEach((restItem) => {
            //If truthy, add modifier and then push to className array
            restItem.length > 0 && classNames.push(item[0] + "--" + restItem);
          });
        }
      } else {
        //Loop B -> "First item is falsy string":
        //If Succeeding item in array is truthy, push to className array
        item.forEach((restItem) => {
          restItem.length > 0 && classNames.push(restItem);
        });
      }
    } else if (typeof item === "string") {
      //Loop A -> "Item is string":

      //Ternary Operator -> Check if ClassName is empty, then push BaseClass,
      //Else, use that baseClass as prefix for modifier
      classNames.length === 0
        ? classNames.push(item)
        : item.length > 0 && classNames.push(classNames[0] + "--" + item);
    }
  });

  //Spreading classname: If truthy, will return className with values, else nothing will be injected
  return {
    ...(classNames.length > 0 && { className: classNames.join(" ") }),
  };
};

// export const SpreadClassNameAsProps = (
//   baseClass: string,
//   ...rest: string[]
// ) => {
//   const classNames: string[] = [baseClass && baseClass];

//   rest.forEach((item) => {
//     item && classNames.push(baseClass ? baseClass + `--` + item : item);
//   });

//   return {
//     ...(classNames.length > 0 && { className: classNames.join(" ") }),
//   };

//   //console.log(props);
// };
