import { Layout, Space } from 'antd';

import Link from 'next/link';
import SocialLinks from '@/components/elements/SocialLinks';
import { WalletContext } from '@/modules/wallet';
import styled from 'styled-components';
import sv from '@/constants/styles';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import useWindowDimensions from '@/hooks/useWindowDimensions';

const HeaderTitle = styled.div`
  font-size: 24px;
  line-height: 2px;
  font-weight: 900;
  margin-right: auto;
  a {
    color: ${sv.colors.buttonText};
    &:hover {
      color: ${sv.colors.buttonText};
    }
  }
`;

const { Header } = Layout;

const StyledHeader = styled(Header)`
  ${sv.flexRow};
  margin: 0 0 40px 0;
`;

const HeaderLinkWrapper = styled.div<{ active: boolean }>`
  color: ${sv.colors.buttonText};
  ${({ active }) => active && `text-decoration: underline;`}
`;

export function AppHeader() {
  const windowDimensions = useWindowDimensions();
  const router = useRouter();
  const { connect } = useContext(WalletContext);

  return (
    <StyledHeader>
      <HeaderTitle>
        {windowDimensions.width > 550 ? (
          <Link href="/" passHref>
            👋 Holaplex
          </Link>
        ) : (
          <Link href="/" passHref>
            👋
          </Link>
        )}
      </HeaderTitle>
      <Space size="large">
        {/* {windowDimensions.width >= 778 && (
          <HeaderLinkWrapper
            onClick={() => connect()}
            active={router.pathname == '/storefront/edit'}
          >
            <Link href="/storefront/edit" passHref>
              Edit store
            </Link>
          </HeaderLinkWrapper>
        )} */}

        <HeaderLinkWrapper active={router.pathname == '/nfts/new'}>
          <Link href="/nfts/new" passHref>
            Mint NFTs
          </Link>
        </HeaderLinkWrapper>
        {/* <HeaderLinkWrapper active={router.pathname == '/about'}>
          <Link href="/about" passHref>
            About
          </Link>
        </HeaderLinkWrapper>
        <HeaderLinkWrapper active={false}>
          <a href="https://holaplex-support.zendesk.com/hc/en-us" target="_blank" rel="noreferrer">
            FAQ
          </a>
        </HeaderLinkWrapper> */}
        {/* {windowDimensions.width > 550 && <SocialLinks />} */}
      </Space>
    </StyledHeader>
  );
}
