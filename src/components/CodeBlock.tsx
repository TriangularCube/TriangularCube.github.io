import React, { PropsWithChildren, ReactElement } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'

export function CodeBlock(props: PropsWithChildren<any>): ReactElement {
  const className = props.children.props.className || ''
  const matches = className.match(/language-(?<lang>.*)/)

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={matches?.groups?.lang ?? ''}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px', overflow: 'scroll' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
