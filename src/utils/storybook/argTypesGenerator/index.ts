import { default as color } from "./color";
import { default as fontSize } from "./fontSize";
import { default as children } from "./children";
import { default as size } from "./size";
import { default as padding } from "./padding";
import { default as margin } from "./margin";
import { default as variant } from "./variant";
import { default as textAlign } from "./textAlign";
import { default as textTransform } from "./textTransform";

const argTypes = {
  children,
  color,
  fontSize,
  margin,
  padding,
  size,
  textAlign,
  textTransform,
  variant,
};

type ArgTypesGenerator = keyof typeof argTypes;

/**
 * Simplify the documentation description of utility props.
 * Just add the prop in to the array and it will show up in your table
 * @param args 
 * @returns argName: {
        name: string;
        control: {
            disable: boolean;
        };
        description: string;
        table: {
            type: {
                summary: string;
            };
        };
    };
 */
const argTypesGenerator = (args: ArgTypesGenerator[]) => {
  let argOptions: any = {};

  args.map((arg) => {
    argOptions = { ...argOptions, ...argTypes[arg] };
  });
  //console.log(argTypes);
  return argOptions;
};

export default argTypesGenerator;
