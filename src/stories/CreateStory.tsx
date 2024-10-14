// import { Meta, StoryObj } from "@storybook/react";

// // Define the type for the reusable function parameters
// type StoryConfig<T extends React.ComponentType<any>> = {
//   title: string;
//   component: T;
//   render: (args: any) => JSX.Element;
//   args: Partial<React.ComponentProps<T>>;
// };

// // Reusable function to create a Meta object and Story
// function createStory<T extends React.ComponentType<any>>({ title, component, render, args }: StoryConfig<T>) {
//   // Define the meta object with the generic type T
//   const meta: Meta<typeof component> = {
//     title,
//     component,
//     tags: ["autodocs"],
//   }  ;

//   // Define the primary story using the render function and args provided
//   const Primary: StoryObj<typeof component> = {
//     render: render as (args: any) => JSX.Element,
//     args,
//   };

//   return { meta, Primary };
// }

// export default createStory;
// // Example usage of the reusable function
// // import { FaBeer } from 'react-icons/fa';
// // import { List } from './List'; // Import the List component

// // Using the reusable function to create a Storybook story for the List component
// // const { meta, Primary } = createStory({
// //   title: 'Example/List',
// //   component: List,
// //   render: (args) => <List {...args}>This is some content passed as children</List>,
// //   args: {
// //     icon: FaBeer,
// //     items: ['List Item 1', 'List Item 2'],
// //   },
// // });
