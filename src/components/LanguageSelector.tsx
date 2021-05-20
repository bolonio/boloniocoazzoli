import React, { FunctionComponent } from "react"
import { changeLocale, useIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import { Fragment } from "react"
import { getFlag } from "@utils/flags"

const languages = [
  {
    id: "en",
    name: "English",
    flag: "Reino Unido",
  },
  {
    id: "es",
    name: "Español",
    flag: "Spain",
  },
  {
    id: "it",
    name: "Italiano",
    flag: "Italia",
  },
]

const FlagButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  line-height: 0px;
  margin-right: 25px;
  cursor: pointer;

  :hover {
    box-shadow: 0 2px 0 0 #23333d;
  }
  :focus {
    outline: 3px solid #23333d;
    outline-offset: 0.5rem;
  }
`

const FlagIcon = styled.img`
  margin: 0;
`

export const LanguageSelector: FunctionComponent = () => {
  const intl = useIntl()
  return (
    <Fragment>
      {languages.map(language => {
        return intl.locale !== language.id ? (
          <FlagButton
            key={language.id}
            onClick={() => changeLocale(language.id)}
            aria-label={intl.formatMessage({ id: `Change${language.name}` })}
          >
            <FlagIcon
              aria-hidden="true"
              width={"30px"}
              src={getFlag(language.id)}
              alt={intl.formatMessage(
                { id: "Flag" },
                { country: language.flag }
              )}
            />
          </FlagButton>
        ) : null
      })}
    </Fragment>
  )
}
