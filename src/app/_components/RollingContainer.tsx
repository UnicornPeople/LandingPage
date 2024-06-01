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

interface ScrollInnerProps {
  speed: number;
  direction?: "left" | "right";
}

const ScrollerInner = styled.div<ScrollInnerProps>`
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

    width: max-content;
  flex-wrap: nowrap;
  animation: ${scroll} ${(p) => p.speed}ms var(--_animation-direction, forwards)
    linear infinite;
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
      <ScrollerInner speed={speed} direction={direction}>
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} key={"image1" + index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} key={"image2" + index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} key={"image3" + index} />
        ))}
        {images.map((image, index) => (
          <Image src={image} alt={"image" + index} key={"image4" + index} />
        ))}
      </ScrollerInner>
    </Container>
  );
}
