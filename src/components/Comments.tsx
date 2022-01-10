import React, { useEffect, useRef } from 'react'

export function Comments() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const commentsScript = document.createElement('script')

    commentsScript.async = true
    commentsScript.src = 'https://utteranc.es/client.js'
    commentsScript.setAttribute(
      'repo',
      'TriangularCube/TriangularCube.github.io'
    )
    commentsScript.setAttribute('issue-term', 'title')
    commentsScript.setAttribute('label', 'Comment')
    commentsScript.setAttribute('theme', 'github-light')
    commentsScript.setAttribute('crossorigin', 'anonymous')

    if (ref.current != null) {
      ref.current.appendChild(commentsScript)
    } else {
      console.log(`Error adding utterances comments on: ${ref}`)
    }
  }, [])

  return <div style={{ width: '100%' }} ref={ref} />
}
