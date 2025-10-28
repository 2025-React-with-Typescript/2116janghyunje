import { Title, Subtitle } from "../components";
import { useWindowResize } from "../hooks";
export default function WindowResizeTest() {
  const [width, height] = useWindowResize();
  return (
    <section className="mt-4">
      <Title>WindowResizeTest</Title>
      <div className="mt-4">
        <Subtitle>
          width:{width}, height:{height}
        </Subtitle>
      </div>
    </section>
  );
}
