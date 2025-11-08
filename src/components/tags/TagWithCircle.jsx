import { Typography } from "@material-tailwind/react"

export const TagWithCircle = ({ message }) => {
  return (
    <p className="z-20 inline-flex items-center gap-2 rounded-full bg-gray-300 px-3 py-1 text-xs font-medium shadow-[0_8px_28px_rgba(0,0,0,0.45)] ring-1 ring-white/20 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      <Typography variant="paragraph" class="color text-base">
        {message}
      </Typography>
    </p>
  )
}
