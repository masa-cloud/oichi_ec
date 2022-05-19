import { H1 } from 'components/atoms/H1'
import 'tailwindcss/tailwind.css'

export function MainVisualMainCopy() {
  return (
    <div className="absolute m-auto w-full left-0 bottom-0 right-0 z-10 text-white text-center top-10">
    <H1>
      {/* TODO:キャッチコピー画像によって変える　色彩心理学 */}
    <span>創業〇〇年、</span><br/>
    <span>昔から続く伝統の味をあなたに。</span>
    </H1>
    </div>
  )
}
