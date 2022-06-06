import { Global, css } from '@emotion/react'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 16px;
        }

        ul {
          list-style: none;
        }
      `}
    />
  )
}
