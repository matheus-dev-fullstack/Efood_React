import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
import transparentize from 'polished/lib/color/darken'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.corTexto};
  color: ${cores.bege};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: ${(props) => (props.size === 'big' ? '4px 8px' : '6px 6px')};
  text-align: center;
  font-weight: 700;
  display: inline-block;
  border-radius: 3px;
  margin-left: 4px;

  :hover {
    ${(props) =>
      props.type === 'button' &&
      `
      background-color: ${transparentize(0.1, cores.corTexto)};

    `}
  }
  }
`
