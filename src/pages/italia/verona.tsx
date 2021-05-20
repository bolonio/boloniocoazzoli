import { PageRendererProps } from "gatsby"
import React, { FunctionComponent, Fragment } from "react"
import styled from "styled-components"
import { TalksType, TalkType } from "@utils/types"
import { talks } from "@content/talks/talks"
import { Talk } from "@components/Talk"
import { Layout } from "@layouts/Layout"
import { PageLayoutContent } from "@components/content"
import { PageHeading } from "@components/headings/headings"
import introImage from "@images/talks.jpg"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
import Box from "@components/core/Box"
import Text from "@components/core/Text"

const YearHeader = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  font-size: 2.5rem;
`

const TalkContainer = styled.div`
  margin-bottom: 3rem;
`

const Talks: FunctionComponent<PageRendererProps> = ({ location }) => {
  const intl = useIntl()
  return (
    <Layout title={intl.formatMessage({ id: "Talks" })} location={location}>
      <img
        src={introImage}
        alt={intl.formatMessage({ id: "PictureOfMeAlt" })}
      />
      <PageLayoutContent>
        <PageHeading>
          <FormattedMessage id={"Talks"} />
        </PageHeading>

        {talks.map((talk: TalksType, i: number) => (
          <Fragment key={i}>
            <YearHeader>{talk.year}</YearHeader>
            <hr />
            <Box display="flex" flexDirection={["column", "column", "row"]}>
              <Box flex="1 1 33%" marginRight={4}></Box>
              <Box display="flex" flex="1 1 100%" flexDirection="column">
                <Fragment>
                  <TalkContainer>
                    {talk.talks.map((talk: TalkType, i: number) => (
                      <Talk key={i} talk={talk} />
                    ))}
                  </TalkContainer>
                </Fragment>
              </Box>
            </Box>
          </Fragment>
        ))}
      </PageLayoutContent>
    </Layout>
  )
}

export default Talks
