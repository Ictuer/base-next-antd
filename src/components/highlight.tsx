'use client'

import React from 'react'

interface HighlightProps {
  text: string
  className?: string
  highlight: Array<
    [string | RegExp, string | ((text: string) => React.ReactNode)]
  >
}

export function Highlight({ text, highlight, className }: HighlightProps) {
  const regex = new RegExp(
    highlight
      .map(([pattern]) =>
        pattern instanceof RegExp ? pattern.source : pattern
      )
      .join('|'),
    'g'
  )

  const parts = text
    .split(regex)
    .reduce<React.ReactNode[]>((acc, part, index) => {
      acc.push(part)
      const match = text.match(regex)?.[index]
      if (match) {
        const [, highlightText] =
          highlight.find(([pattern]) =>
            pattern instanceof RegExp ? pattern.test(match) : pattern === match
          ) || []

        acc.push(
          typeof highlightText === 'function' ? (
            <React.Fragment key={index}>{highlightText(match)}</React.Fragment>
          ) : (
            <span key={index} className={highlightText}>
              {match}
            </span>
          )
        )
      }

      return acc
    }, [])

  return <div className={className}>{parts}</div>
}
