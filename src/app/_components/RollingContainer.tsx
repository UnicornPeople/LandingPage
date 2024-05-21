import Image, { StaticImageData } from "next/image";
import { css, keyframes, styled } from "styled-components";

const scroll = keyframes`
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
`;

const Container = styled.div<{
  direction?: "left" | "right";
  speed?: "fast" | "slow";
}>`
  width: 100%;
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
`;

const ScrollerInner = styled.div<{
  animated?: boolean;
  speed: number;
  direction?: "left" | "right";
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 60px;

  ${({ direction }) =>
    direction === "right" &&
    css`
      --_animation-direction: reverse;
    `}

  ${({ direction }) =>
    direction === "left" &&
    css`
      --_animation-direction: forwards;
    `}

  ${({ animated, speed }) =>
    animated &&
    css`
      width: max-content;
      flex-wrap: nowrap;
      animation: ${scroll} ${speed}ms var(--_animation-direction, forwards)
        linear infinite;
    `}
`;

interface RollingContainerProps {
  images: StaticImageData[];
  speed: number;
  direction?: "left" | "right";
}

export function RollingContainer({
  images,
  speed,
  direction,
}: RollingContainerProps) {
  return (
    <Container>
      <ScrollerInner animated speed={speed} direction={direction}>
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} />
        ))}
      </ScrollerInner>
    </Container>
  );
}
