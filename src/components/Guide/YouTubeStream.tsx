import { Section } from './Section.tsx'

const videoId = 'HnME8xAROLE'

export function YouTubeStream() {
  return (
    <Section title="Video Guide">
      <div className="w-full max-w-[720px] aspect-video">
        <iframe
          className="w-full h-full rounded border-2 border-teal-700"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </Section>
  )
}
