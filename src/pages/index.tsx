import { PageRendererProps } from "gatsby"
import React, { Fragment, FunctionComponent } from "react"
import styled from "styled-components"
// import useSiteMetadata from "@hooks/useSiteMetadata"
import introImage from "@images/nosotros.jpg"
import shape from "@images/shapes/shape2.svg"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"
import { useIntl } from "gatsby-plugin-intl"
import Box from "@components/core/Box"
import Text from "@components/core/Text"

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

const getIntroText = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text
            fontSize={["2rem", "3rem", "3rem"]}
            fontFamily="Yeseva One !important"
            lineHeight="1"
          >
            20.08.2021
          </Text>
          <Text
            fontSize={["3rem", "4rem", "4rem"]}
            fontFamily="Yeseva One !important"
          >
            ¡Nos Casamos!
          </Text>
          <Text as="p">&nbsp;</Text>
          <Text as="p" fontWeight="bold">
            A medida que vayan surgiendo nuevas noticias en relación con las
            restricciones motivadas por la situación actual, iremos modificando
            la web con todos los detalles. Si teneis cualquier pregunta o duda
            sobre vuestra estancia en Italia, la mejor opción es contactar con
            nosotros.
            <br />
            Puedes encontrar todas las condiciones y restricciones de viaje en
            &nbsp;
            <a href="https://www.salute.gov.it/travellers">
              la web del Ministerio de Sanidad italiano
            </a>
            .
          </Text>
          <Text as="p">
            Hemos creado esta web como un sitio donde compartir los detalles más
            importantes de nuestro gran día. Así que echad un vistazo, y no os
            olvideis de confirmar!
          </Text>
          <Text as="p">
            Verona ocupa un sitio muy importante en nuestros corazones, ya que
            fue la primera ciudad que visitamos juntos, así que estamos deseando
            celebrar nuestro gran día con vosotros allí.
          </Text>
          <Text as="p">
            Tenemos muchísimas ganas de compartir nuestro día con nuestra gente
            favorita. Gracias de corazón por vuestro amor y vuestro apoyo.
          </Text>
          <Text
            fontSize="2rem"
            fontFamily="Yeseva One !important"
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
            fontSize={["2rem", "3rem", "3rem"]}
            fontFamily="Yeseva One !important"
            lineHeight="1"
          >
            20.08.2021
          </Text>
          <Text
            fontSize={["3rem", "4rem", "4rem"]}
            fontFamily="Yeseva One !important"
          >
            Ci sposiamo!
          </Text>
          <Text as="p">&nbsp;</Text>
          <Text as="p" fontWeight="bold">
            Questa pagina sarà constantemente aggiornata man mano che saranno
            rilasciati nuovi dettagli sulle restrizioni e norme vigenti relative
            alla situazione attuale. Per qualsiasi domanda sull'organizzazione e
            preparativi, potete sempre rivolgervi direttamente a noi.
          </Text>
          <Text as="p">
            Verona occupa un posto molto speciale nei nostri cuori, poiché è
            stata la prima città che abbiamo visitato insieme. Non vediamo l'ora
            di vedervi tutti lì e poter celebrare insieme!
          </Text>
          <Text as="p">
            Abbiamo fatto del nostro meglio per cercare di riassumere tutti i
            dettagli che vi possano tornare utili riguardo al programma,
            l'organizzazione e l'arrivo in Villa.
          </Text>
          <Text fontSize="2rem" fontFamily="Yeseva One !important">
            Adrián & Elena
          </Text>
        </Fragment>
      )
    case "en":
    default:
      return (
        <Fragment>
          <Text
            fontSize={["2rem", "3rem", "3rem"]}
            fontFamily="Yeseva One !important"
            lineHeight="1"
          >
            20.08.2021
          </Text>
          <Text
            fontSize={["3rem", "3rem", "3rem"]}
            fontFamily="Yeseva One !important"
          >
            We're getting married!
          </Text>
          <Text as="p">&nbsp;</Text>
          <Text as="p" fontWeight="bold">
            We will keep this website up-to-date with all the organizational
            details according to the latests news about the restrictions in
            Italy. If you have any questions or doubts about your stay in Italy,
            feel free to get in contact directly with us.
            <br />
            Restrictions and travel conditions can be found on the&nbsp;
            <a href="https://www.salute.gov.it/travellers">
              website of the Italian Ministry of Health
            </a>
            .
          </Text>
          <Text as="p">
            We’ve created this website as a convenient way to share all of the
            important details with you in the lead up to our wedding. So have
            fun, take a look around and don’t forget to RSVP!
          </Text>
          <Text as="p">
            Verona holds a very special place in our hearts, as it is the very
            first city we visited together, so we can’t wait to celebrate our
            special day with you there.
          </Text>
          <Text as="p">
            We are SO incredibly excited to share this special day with our
            favourite people, a big thanks for all of your love and support.
          </Text>
          <Text fontSize="2rem" fontFamily="Yeseva One !important">
            Adrián & Elena
          </Text>
        </Fragment>
      )
  }
}

const getConfirmationText = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text
            fontSize="6rem"
            fontFamily="Yeseva One !important"
            lineHeight="1.5"
          >
            Confirmación
          </Text>
          <Text as="p">
            Confirmad junto a vuestra asistencia antes de final de abril 2020,
            si haréis uso del servicio de autobús. si tenéis alguna alergia o
            intolerancia alimentaria por favor comunicádnoslo.
          </Text>
          <Text as="p">
            El mejor regalo que nos podéis hacer es el de estar con nosotros en
            nuestro día en Verona, pero si queréis hacernos un regalo, podéis
            colaborar en nuestra luna de miel.
          </Text>
          <Text
            fontSize="4rem"
            fontFamily="Yeseva One !important"
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
            fontSize="6rem"
            fontFamily="Yeseva One !important"
            lineHeight="1.5"
          >
            RSVP
          </Text>
          <Text as="p">
            È gradita conferma entro il 30 Aprile. Sentitevi liberi di
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
            fontFamily="Yeseva One !important"
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
            fontSize="6rem"
            fontFamily="Yeseva One !important"
            lineHeight="1.5"
          >
            Confirmation / RSVP
          </Text>
          <Text as="p">
            We would love you to enjoy our day without any worries, we have
            arranged a bus service for everyone who wants to use it. We kindly
            ask you to confirm if you will make use of this service together
            with your participation.
          </Text>
          <Text as="p">
            The most important gift to us is having you share in our special
            day. But if you wish to collaborate in some other way, you can
            contribute to our honeymoon trip after tying the knot.
          </Text>
          <Text
            fontSize="4rem"
            fontFamily="Yeseva One !important"
            lineHeight="1.5"
          >
            Adrián & Elena
          </Text>
        </Fragment>
      )
  }
}

const Home: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  const lang = intl.locale

  return (
    <Layout location={location}>
      <Shape src={shape} alt="" aria-hidden={true} />
      <Shape2 src={shape} alt="" aria-hidden={true} />
      <PageLayoutContent>
        <Box display="flex" flexDirection={["column", "column", "row"]}>
          <Box
            flex="1 1 100%"
            // order={["2", "1", "1"]}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginRight="4"
          >
            {getIntroText(lang)}
          </Box>

          <Box
            flex="1 1 100%"
            // order={["1", "2", "2"]}
          >
            <img
              src={introImage}
              alt={intl.formatMessage({ id: "pictureofus" })}
            />
          </Box>
        </Box>
      </PageLayoutContent>
    </Layout>
  )
}

export default Home
