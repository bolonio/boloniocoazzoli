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

const getArriveVerona = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text as="h3">Desde el aeropuerto de Verona</Text>
          <Text as="p">Aeropuerto Valerio Catullo</Text>
          <Text as="p">
            El servicio de autobús desde el aeropuerto de verona a la estación
            central de Verona opera a diario a las 05:35, 06:30 y luego{" "}
            <b>cada 20 minutos</b> hasta las 23:30
          </Text>
          <Text as="p">
            El servicio de autobús desde la estación central de Verona al
            aeropuerto de verona opera a diario a las 05:15, 06:10 y luego{" "}
            <b>cada 20 minutos</b> hasta las 23:30
          </Text>
          <Text as="p">
            La duración del viaje es de <b>15 minutos.</b>
          </Text>
          <Text as="p">
            El precio del billete es de <b>6,00€</b>. El billete es válido
            durante 75 minutos desde su validación y se podrá utilizar también
            en las lineas de autobuses urbanos de la ciudad de Verona.
          </Text>
          <Text as="p">
            <a
              href="https://www.aeroportoverona.it/trasporti/autobus.html"
              target="_blank"
            >
              Información Aerobus
            </a>
          </Text>
        </Fragment>
      )
    case "en":
    default:
      return (
        <Fragment>
          <Text as="h3">From Verona airport</Text>
          <Text as="p">Valerio Catullo Airport</Text>
          <Text as="p">
            The shuttle service from Verona Airport to Verona Porta Nuova train
            station operates daily at 05:35, 06:30, then{" "}
            <b>every 20 minutes </b> until 23:30
          </Text>
          <Text as="p">
            The shuttle service from Verona Porta Nuova train station to Verona
            Airport operates daily, at 05:15, 06:10, then{" "}
            <b>every 20 minutes </b> until 23:30
          </Text>
          <Text as="p">
            The journey takes <b>15 minutes.</b>
          </Text>
          <Text as="p">
            A single ride ticket costs <b>6,00€</b>. The ticket lasts 75 minutes
            after the punching. Travellers may use the remaining time on city
            buses. The unused ticket is not refundable
          </Text>
          <Text as="p">
            <a
              href="https://www.aeroportoverona.it/en/transport/aerobus.html"
              target="_blank"
            >
              Aerobus information
            </a>
          </Text>
        </Fragment>
      )
  }
}

const getArriveBologna = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text as="h3">Desde el aeropuerto de Bologna</Text>
          <Text as="p">Aeropuerto Guglielmo Marconi</Text>
          <Text as="p">
            La mejor forma para llegar a Verona desde el aeropuerto de Bologna
            es cogiendo un tren desde la estación central de Bologna.
          </Text>
          <Text as="p">
            El servicio de autobús desde el aeropuerto de Bologna a la estación
            central de Bologna (Bologna Centrale) opera a diario.La primera
            salida desde el aeropuerto es a las 05:30 y la última a las 00:15.{" "}
            <b>Cada 1 minutos</b> un autobús conecta el aeropuerto con la
            estación.
          </Text>
          <Text as="p">
            El precio del billete de Ida o vuelta al Aeropuerto es de{" "}
            <b>6,00€</b>. Los tickets pueden comprarse directamente en la web de
            aerobus, en las máquinas emisoras automáticas del Aeropuerto y
            Bologna, en la Estación Central (en andén de partida del aerobús) o
            en las boleterías TPER.
          </Text>
          <Text as="p">
            Se pueden utilizar, además, en todos los medios públicos del Área
            Urbana de Bologna, durante los 75 minutos de validez, marcándolo en
            cada subida (si quieres utilizar aun los buses urbanos tienes que
            convertir tu boleto electronico antes de la subida, como
            especificado en la seccion Tickets).
          </Text>
          <Text as="p">
            <a href="https://aerobus.bo.it/es" target="_blank">
              Información Aerobus
            </a>
          </Text>
          <Text as="p">
            Desde la estación central de Bologna (Bologna Centrale), se puede
            coger un tren directo a Verona Porta Nuova. El precio del billete
            varía entre <b>10,00€ y 15,00€</b>. Los billetes pueden comprarse
            directamente en la web de Trenitalia.
          </Text>
          <Text as="p">
            <a href="https://www.trenitalia.com/" target="_blank">
              Información Trenitalia
            </a>
          </Text>
        </Fragment>
      )
    case "en":
    default:
      return (
        <Fragment>
          <Text as="h3">From Bologna airport</Text>
          <Text as="p">Bologna Guglielmo Marconi Airport</Text>
          <Text as="p">
            The best way to arrive to Verona from Bologna airport is via Bologna
            Centrale train station.
          </Text>
          <Text as="p">
            The shuttle service from Bologna Airport to Bologna Centrale train
            station operates daily. The first trip from the airport is at 5:30
            am, and the last trip is at 12:15 am. From 7:00 am to 9:30 pm a bus
            runs between the airport and the railway station{" "}
            <b>every 11 minutes</b>.
          </Text>
          <Text as="p">
            One-way ticket from/to the Airport <b>6,00€</b>. Tickets can be
            purchased directly on the Aerobus website, from the automatic
            vending machines located in the airport, and in Bologna at the
            Central Railway Station (at the Aerobus departure point) or at the
            TPER ticket offices.
          </Text>
          <Text as="p">
            If you plan to use also the Bologna urban public transport service
            within the 75 minutes of validity following the first validation of
            your ticket, you will need to exchange your electronic ticket for a
            standard magnetic one. You may do this at the automatic vending
            machines located in the airport and at the Central Railway Station.
          </Text>
          <Text as="p">
            <a href="https://aerobus.bo.it/en" target="_blank">
              Aerobus information
            </a>
          </Text>
          <Text as="p">
            Once you arrive to the Bologna Centrale train station, you can take
            a direct train to Verona Porta Nuova. A single train ticket costs
            between <b>10,00€ and 15,00€</b>. Tickets can be purchased directly
            on the Trenitalia website.
          </Text>
          <Text as="p">
            <a href="https://www.trenitalia.com/en.html" target="_blank">
              Trenitalia information
            </a>
          </Text>
        </Fragment>
      )
  }
}

const getArriveMilano = (lang: string) => {
  switch (lang) {
    case "es":
      return (
        <Fragment>
          <Text as="h3">Desde el aeropuerto de Milano-Bergamo</Text>
          <Text as="p">Aeropuerto Orio al Serio</Text>
          <Text as="p">
            El servicio de autobús desde el aeropuerto Orio al Serio a la
            estación central de Verona opera a diario por la empresa{" "}
            <b>Flixbus.</b>
          </Text>
          <Text as="p">
            La duración del viaje es de aproximadamente{" "}
            <b>1 hora y 25 minutos.</b>
          </Text>
          <Text as="p">
            El precio del billete varía entre <b>9,99€ y 15,99€</b>.
          </Text>
          <Text as="p">
            <a
              href="https://www.flixbus.es/autobuses/bergamo-orio-al-serio-aeropuerto"
              target="_blank"
            >
              Información Flixbus
            </a>
          </Text>
        </Fragment>
      )
    case "en":
    default:
      return (
        <Fragment>
          <Text as="h3">From Milano-Bergamo airport</Text>
          <Text as="p">Orio al Serio Airport</Text>
          <Text as="p">
            The bus service from Orio al Serio Airport to Verona Porta Nuova
            train station operates daily by the company <b>Flixbus.</b>
          </Text>
          <Text as="p">
            The journey takes about <b>1 hour and 25 minutes.</b>
          </Text>
          <Text as="p">
            A single ride ticket costs between <b>9,99€ and 15,99€</b>.
          </Text>
          <Text as="p">
            <a
              href="https://global.flixbus.com/bus/bergamo-orio-al-serio-airport"
              target="_blank"
            >
              Flixbus information
            </a>
          </Text>
        </Fragment>
      )
  }
}

const getTitle = (lang: string) => {
  switch (lang) {
    case "es":
      return "Cómo llegar a Verona"
    case "it":
      return "Come arrivare alla Villa"
    case "en":
    default:
      return "How to arrive to Verona"
  }
}

const Talks: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  const lang = intl.locale
  return (
    <Layout title={intl.formatMessage({ id: "Transport" })} location={location}>
      <Image src={introImage} alt="" />
      <Box position="relative" overflow="hidden">
        <PageLayoutContent>
          <Shape src={shape} alt="" aria-hidden={true} />
          <Shape2 src={shape} alt="" aria-hidden={true} />
          <Text
            as="h1"
            fontWeight="300"
            fontSize={["5rem", "8rem", "8rem"]}
            fontFamily="Opulent Brush !important"
            lineHeight="1"
          >
            {getTitle(lang)}
          </Text>

          {lang === "it" && (
            <Box
              display="flex"
              marginBottom="4"
              paddingBottom="4"
              minHeight="500px"
              flexDirection={["column", "column", "row"]}
              borderBottom="1px solid #23333d"
            >
              <Box flex={1} marginRight="4">
                <h3>Da Milano e da Venezia</h3>
                <p>
                  Dall’Autostrada A4 l'uscita raccomandata é Verona Est. Si
                  prosegue diritto per Lessinia e Valpantena e dopo 7,7 km, alla
                  fine della tangenziale, proseguire verso Nord per 3 km, quindi
                  girare a sinistra verso Quinto; alla prima rotonda seguire a
                  destra direzione S.M. IN STELLE / VENDRI a meno di due km. a
                  destra vi è la Villa e poco oltre, il cancello di ingresso del
                  parcheggio.
                </p>
                <h3>Da Verona Centro</h3>
                <p>
                  Direzione nord verso Porta Vescovo/Grezzana /Bosco
                  Chiesanuova; proseguire lungo Via Colonnello Fincato; uscire
                  dalla città e proseguire per circa 4km - per la Lessinia e la
                  Valpantena subito dopo stabilimento "Veronesi" girare a
                  sinistra verso Quinto, alla prima rotonda seguire a destra
                  direzione S.M. IN STELLE / VENDRI a meno di due km. a destra
                  vi è la Villa e, poco oltre, il cancello di ingresso del
                  parcheggio.
                </p>
                <h3>Con Taxi</h3>
                <p>
                  Dalla stazione alla Villa con un costo di circa <b>€20</b>
                </p>
                <p>
                  <a
                    href="http://www.villacavendri.it/it/home.asp"
                    target="_blank"
                  >
                    Sito web della Villa
                  </a>
                </p>
              </Box>
              <Box flex={1}>
                <iframe
                  title="googlemap"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11188.182892272338!2d11.0348547!3d45.489024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c13cd3528cdbcbf!2sVilla%20ca%20&#39;Vendri!5e0!3m2!1sen!2sat!4v1572605244011!5m2!1sen!2sat"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </Box>
            </Box>
          )}

          {(lang === "es" || lang === "en") && (
            <Box
              display="flex"
              marginBottom="4"
              paddingBottom="4"
              minHeight="500px"
              flexDirection={["column", "column", "row"]}
              borderBottom="1px solid #23333d"
            >
              <Box flex={1} marginRight="4">
                {getArriveVerona(lang)}
              </Box>
              <Box flex={1}>
                <iframe
                  title="googlemap"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d34495.80280334495!2d10.917365120774454!3d45.412980199279964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x477f5f3f64bc5d4b%3A0x3b4cc3ee18227c2c!2sValerio%20Catullo%20Airport%2C%2037066%20Caselle%20VR%2C%20Italia!3m2!1d45.4000011!2d10.890140599999999!4m5!1s0x477f5f664a2f09fd%3A0x558f7661f12a33b9!2sVerona%20Porta%20Nuova%2C%20Verona%2C%20VR%2C%20Italia!3m2!1d45.4290221!2d10.982482!5e0!3m2!1sen!2sat!4v1573986450091!5m2!1sen!2sat"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </Box>
            </Box>
          )}

          {(lang === "es" || lang === "en") && (
            <Box
              display="flex"
              marginBottom="4"
              paddingBottom="4"
              minHeight="500px"
              flexDirection={["column", "column", "row"]}
              borderBottom="1px solid #23333d"
            >
              <Box flex={1} marginRight="4">
                {getArriveBologna(lang)}
              </Box>
              <Box flex={1}>
                <iframe
                  title="googlemap"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d722718.0846058377!2d10.603867126604422!3d44.96160494136382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x477fd3fac047a1cb%3A0x5653430165f8d67b!2sBologna%20Guglielmo%20Marconi%20Airport%2C%20Via%20del%20Triumvirato%2C%2084%2C%2040132%20Bologna%20BO%2C%20Italy!3m2!1d44.5345216!2d11.2878593!4m5!1s0x477f5f664a2f09fd%3A0x558f7661f12a33b9!2sVerona%20Porta%20Nuova%2C%20Verona%2C%20VR%2C%20Italy!3m2!1d45.4290221!2d10.982482!5e0!3m2!1sen!2sat!4v1573986507892!5m2!1sen!2sat"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </Box>
            </Box>
          )}

          {(lang === "es" || lang === "en") && (
            <Box
              display="flex"
              marginBottom="4"
              paddingBottom="4"
              minHeight="500px"
              flexDirection={["column", "column", "row"]}
              borderBottom="1px solid #23333d"
            >
              <Box flex={1} marginRight="4">
                {getArriveMilano(lang)}
              </Box>
              <Box flex={1}>
                <iframe
                  title="googlemap"
                  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d34495.80280334495!2d10.917365120774454!3d45.412980199279964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x477f5f3f64bc5d4b%3A0x3b4cc3ee18227c2c!2sValerio%20Catullo%20Airport%2C%2037066%20Caselle%20VR%2C%20Italia!3m2!1d45.4000011!2d10.890140599999999!4m5!1s0x477f5f664a2f09fd%3A0x558f7661f12a33b9!2sVerona%20Porta%20Nuova%2C%20Verona%2C%20VR%2C%20Italia!3m2!1d45.4290221!2d10.982482!5e0!3m2!1sen!2sat!4v1573986450091!5m2!1sen!2sat"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </Box>
            </Box>
          )}
        </PageLayoutContent>
      </Box>
    </Layout>
  )
}

export default Talks
