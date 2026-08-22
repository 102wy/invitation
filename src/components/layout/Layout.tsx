import type { PropsWithChildren } from "react";
import * as S from "./Layout.style";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}
