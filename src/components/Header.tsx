import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { LayoutContent } from "@components/content"
import useSiteMetadata from "@hooks/useSiteMetadata"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import { LanguageSelector } from "./LanguageSelector"
import { slide as BurgerMenu } from "react-burger-menu"
import Box from "@components/core/Box"

const HeaderContainer = styled.header`
  background-color: transparent;
  min-height: 72px;
`

const StyledNav = styled.nav`
  display: flex;
  padding: 15px 0;
  justify-content: flex-end;
  align-items: center;
`

const MenuLink = styled(Link)`
  font-weight: 800;
  font-family: Mulish, -apple-system, BlinkMacSystemFont, Open Sans, sans-serif !important;
  letter-spacing: -1px;
  margin-right: 25px;
  font-size: 1.5rem;
  text-decoration: none;
  box-shadow: none;
  color: #23333d;

  @media screen and (max-width: 700px) {
    margin-right: 15px;
    margin-bottom: 10px;
  }

  :hover {
    box-shadow: 0 2px 0 0 #23333d;
  }
  :focus {
    outline: 3px solid #23333d;
    outline-offset: 0.5rem;
  }
`

const Menu = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "26px",
    height: "20px",
    left: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#23333d",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "30px",
    width: "25px",
  },
  bmCross: {
    background: "#23333d",
    width: "4px",
    height: "25px",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#ffffff",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#23333d",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "flex",
    marginBottom: "10px",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export const Header: FunctionComponent = () => {
  const { navigation } = useSiteMetadata()
  const intl = useIntl()
  return (
    <HeaderContainer>
      <Box display={["block", "none", "none"]}>
        <BurgerMenu styles={styles}>
          <Box display="flex" flexDirection="column">
            {navigation.map(item => (
              <MenuLink key={item.slug} to={`/${intl.locale}/${item.slug}`}>
                <FormattedMessage id={item.title} />
              </MenuLink>
            ))}
          </Box>
          <LanguageSelector />
        </BurgerMenu>
      </Box>
      <LayoutContent>
        <StyledNav>
          <Box display={["none", "block", "block"]}>
            <Menu>
              {navigation.map(item => (
                <MenuLink key={item.slug} to={`/${intl.locale}/${item.slug}`}>
                  <FormattedMessage id={item.title} />
                </MenuLink>
              ))}
              <LanguageSelector />
            </Menu>
          </Box>
        </StyledNav>
      </LayoutContent>
    </HeaderContainer>
  )
}
