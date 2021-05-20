import { PageRendererProps } from "gatsby"
import React, { Fragment, FunctionComponent } from "react"
import { PageLayoutContent } from "@components/content"
import { Layout } from "@layouts/Layout"
import introImage from "@images/villacavendri/villacavendri.png"
import { useIntl } from "gatsby-plugin-intl"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import shape from "@images/shapes/shape2.svg"
import styled from "styled-components"

const Shape = styled.img`
  z-index: -1;
  position: absolute;
  transform: translate(25em, 25em);
  top: 0;
  right: 0;
  width: 70%;
  background-position: center center;
`

const Shape2 = styled.img`
  z-index: -1;
  position: absolute;
  transform: translate(-25em, -25em);
  top: 0;
  left: 0;
  width: 70%;
  background-position: center center;
`

const Image = styled.img`
  margin: 0;
`

const getConfirmationText = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text
            as="h1"
            fontWeight="300"
            fontSize={["5rem", "8rem", "8rem"]}
            fontFamily="Opulent Brush !important"
            lineHeight="1"
          >
            Confirmación
          </Text>
          <Text as="p">
            Confirmad, junto a vuestra asistencia antes de final de julio 2021,
            si tenéis alguna alergia o intolerancia alimentaria.
          </Text>
          <Text as="p">
            El mejor regalo que nos podéis hacer es el de estar con nosotros en
            nuestro día en Verona, pero si queréis hacernos un regalo, podéis
            colaborar en nuestra luna de miel.
          </Text>
          <Text
            fontSize="4rem"
            fontFamily="Opulent Brush !important"
            lineHeight="1.5"
          >
            Adrián & Elena
          </Text>
        </Fragment>
      )
    case "it":
      return (
        <Fragment>
          <Text
            as="h1"
            fontWeight="300"
            fontSize={["5rem", "8rem", "8rem"]}
            fontFamily="Opulent Brush !important"
            lineHeight="1"
          >
            RSVP
          </Text>
          <Text as="p">
            È gradita conferma entro il 31 Luglio. Sentitevi liberi di
            comunicarci qualsiasi allergia, intolleranza alimentare o esigenza
            speciale.
          </Text>
          <Text as="p">
            Il più grande regalo che ci possiate fare è quello di essere con noi
            durante questo weekend a Verona. Comunque, se vi facesse piacere
            farci un regalo, potete contribuire alla realizzazione del nostro
            viaggio di nozze.
          </Text>
          <Text
            fontSize="4rem"
            fontFamily="Opulent Brush !important"
            lineHeight="1.5"
          >
            Adrián & Elena
          </Text>
        </Fragment>
      )
    case "en":
    default:
      return (
        <Fragment>
          <Text
            as="h1"
            fontWeight="300"
            fontSize={["5rem", "8rem", "8rem"]}
            fontFamily="Opulent Brush !important"
            lineHeight="1"
          >
            Confirmation / RSVP
          </Text>
          <Text as="p">
            We kindly ask you to confirm your participation before the end of
            July 2021. We would love you to enjoy our day without any worries,
            so please let us know if you have any food allergy or any dietary
            restriction together with yor confirmation.
          </Text>
          <Text as="p">
            The most important gift to us is having you share in our special
            day. But if you wish to collaborate in some other way, you can
            contribute to our honeymoon trip after tying the knot.
          </Text>
          <Text
            fontSize="4rem"
            fontFamily="Opulent Brush !important"
            lineHeight="1.5"
          >
            Adrián & Elena
          </Text>
        </Fragment>
      )
  }
}

const About: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  const lang = intl.locale
  return (
    <Layout
      title={intl.formatMessage({ id: "Confirmation" })}
      location={location}
    >
      <Image src={introImage} alt="" />
      <Box position="relative" overflow="hidden">
        <PageLayoutContent>
          <Shape src={shape} alt="" aria-hidden={true} />
          <Shape2 src={shape} alt="" aria-hidden={true} />
          <Box>{getConfirmationText(lang)}</Box>
        </PageLayoutContent>
      </Box>
    </Layout>
  )
}

export default About
