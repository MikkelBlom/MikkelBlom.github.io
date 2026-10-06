// "Image needed" placeholders are notes for Mikkel, not for visitors. They show in `npm run dev`
// and when building with SHOW_TODO=1 (review copies); the published build leaves the slots out.
export const showTodo = import.meta.env.DEV || process.env.SHOW_TODO === '1'

type Slot = { src?: string | null; illustration?: string; youtube?: string; file?: string }
export const hasMedia = (m: Slot) => Boolean(m.src || m.illustration || m.youtube || m.file)
export const visible = (m: Slot) => showTodo || hasMedia(m)
