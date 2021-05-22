import { PageRendererProps } from "gatsby"
import React, { Fragment, FunctionComponent } from "react"
import { PageLayoutContent } from "@components/content"
import { Layout } from "@layouts/Layout"
import introImage from "@images/villacavendri/villacavendri.png"
import { useIntl } from "gatsby-plugin-intl"
import Box from "@components/core/Box"
import Text from "@components/core/Text"
import picture1 from "@images/villacavendri/villacavendri1.jpg"
import picture2 from "@images/villacavendri/villacavendri6.jpg"
import picture3 from "@images/villacavendri/villacavendri5.jpg"
import picture4 from "@images/villacavendri/villacavendri4.jpg"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
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

const getVillaText = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text as="p">
            Cà Vendri del siglo XVI es una típica Mansión veneciana, sumergida
            en un silencioso Parque centenario de 7 hectáreas con un imponente
            paseo de cipreses, estatuas, fuentes y un ninfeo con columnas.
          </Text>
          <Text as="p">
            La Mansión está ubicada a seis kilómetros del centro de Verona, en
            Contrada Vendri, nombre que se cree tiene su origen en Venus, ya que
            en la época romana, se decía que existía un Templo dedicado a esta
            diosa.
          </Text>
        </Fragment>
      )
    case "it":
      return (
        <Fragment>
          <Text as="p">
            Immersa in un parco di sei ettari, è importante per la dimora
            padronale, voluta da Giusto Giusti (tra il 1560-1580) e secondo gli
            studiosi, realizzata su progetto di Bernardino Brugnoli, un aiutante
            del Sanmicheli.
          </Text>
          <Text as="p">
            Nell’affresco della facciata, di Paolo Farinati, pittore veronese
            del ‘500, figure allegoriche femminili incorniciano gli stemmi dei
            casati degli Emilei e Pompei ai lati e al centro quello dei Giusti,
            proprietari fino all’inizio dell’Ottocento.
          </Text>
        </Fragment>
      )
    case "en":
    default:
      return (
        <Fragment>
          <Text as="p">
            The sixteenth century Ca' Vendri is a typical Venetian villa,
            immersed in a silent secular 7 hectare park with a magnificent path
            lined with cypresses, statues, fountains and a nymphaeum colonnade.
          </Text>
          <Text as="p">
            The villa is situated at 6 kilometers from the centre of Verona, in
            Contrada Vendri (the Vendri quarter), a name that seems to have
            derived from Venus, as, in Roman times, it is said that there was a
            Temple there devoted to this goddess. For centuries this Villa and
            its park have been the ideal place for festivals, meetings and
            weddings.
          </Text>
        </Fragment>
      )
  }
}

const Talks: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  const lang = intl.locale
  return (
    <Layout
      title={intl.formatMessage({ id: "Villa Ca' Vendri" })}
      location={location}
    >
      <Image src={introImage} alt="" />
      <Box position="relative" overflow="hidden">
        <PageLayoutContent>
          <Shape src={shape} alt="" aria-hidden={true} />
          <Shape2 src={shape} alt="" aria-hidden={true} />
          <Text
            as="h1"
            fontWeight="300"
            fontSize={["3rem", "4rem", "4rem"]}
            fontFamily="Yeseva One !important"
            lineHeight="1"
          >
            Villa Ca' Vendri
          </Text>

          <Box
            display="flex"
            marginBottom="5"
            minHeight="500px"
            flexDirection={["column", "column", "row"]}
          >
            <Box flex={1} marginRight="4">
              {getVillaText(lang)}
            </Box>
            <Box flex={2}>
              <AwesomeSlider>
                <div data-src={picture1} />
                <div data-src={picture2} />
                <div data-src={picture3} />
                <div data-src={picture4} />
              </AwesomeSlider>
            </Box>
          </Box>

          <Box height="500px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11188.182892272338!2d11.0348547!3d45.489024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c13cd3528cdbcbf!2sVilla%20ca%20&#39;Vendri!5e0!3m2!1sen!2sat!4v1572605244011!5m2!1sen!2sat"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </Box>
        </PageLayoutContent>
      </Box>
    </Layout>
  )
}

export default Talks
