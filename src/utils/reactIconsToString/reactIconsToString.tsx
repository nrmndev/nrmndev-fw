import ReactDOMServer from "react-dom/server";

export function getSvgString(
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
): string {
  //const encodedSvg = encodeURIComponent(svgString);
  console.log(
    `data:image/svg+xml,${encodeURIComponent(
      ReactDOMServer.renderToStaticMarkup(<Icon />)
    )}`
  );
  return `data:image/svg+xml,${encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Icon />)
  )}`;
}
