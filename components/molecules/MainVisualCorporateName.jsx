import { H1 } from 'components/atoms/H1'
import { H2 } from 'components/atoms/H2'
import { H3 } from 'components/atoms/H3'
import 'tailwindcss/tailwind.css'

export function MainVisualCorporateName() {
  return (
    <div className="absolute m-auto w-full left-0 bottom-5 right-0 z-10 text-white text-center">
      <H2>oichi shouten</H2>
      <H3>大一商店</H3>
    </div>
  )
}

